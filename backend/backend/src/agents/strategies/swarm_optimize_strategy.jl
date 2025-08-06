using Statistics
using ..CommonTypes: StrategySpecification, StrategyMetadata, AgentContext

struct SwarmOptimizeConfig
    protocols::Vector{String}
    num_agents::Int
end

function swarm_optimize(config::SwarmOptimizeConfig, context::AgentContext, input::Dict)
    try
        token = get(input, "token", "USDC")
        println("DEBUG: Strategy called with token: $token")
        println("DEBUG: Config protocols: $(config.protocols)")
        println("DEBUG: Config num_agents: $(config.num_agents)")

        # Compose the LLM prompt
        prompt = """
        You are a DeFi yield optimization agent working on Solana.
        Given the following protocols: $(join(config.protocols, ", "))
        and the token: $token,
        recommend the best protocol for yield optimization.
        Respond with a JSON object containing:
        - best_protocol: the protocol name
        - consensus_apy: the estimated APY
        - all_yields: a mapping from protocol to APY (if known)
        - explanation: a brief rationale for your choice
        """

        # Find the llm_chat tool in the context
        llm_chat_index = findfirst(tool -> tool.metadata.name == "llm_chat", context.tools)
        if llm_chat_index === nothing
            println("ERROR: llm_chat tool not found in context.tools")
            return Dict("error" => "llm_chat tool not found in context")
        end
        llm_chat_tool = context.tools[llm_chat_index]

        # Call the LLM tool
        resp = try
            llm_chat_tool.execute(llm_chat_tool.config, Dict("prompt" => prompt))
        catch e
            println("ERROR: Exception calling llm_chat tool: $e")
            return Dict("error" => string(e))
        end

        println("DEBUG: LLM response: $resp")
        if get(resp, "success", false)
            # Try to parse the output as JSON if possible
            using JSON3
            output = resp["output"]
            parsed = try
                JSON3.read(output)
            catch e
                println("WARN: Could not parse LLM output as JSON: $e")
                Dict("llm_output" => output)
            end
            return parsed
        else
            return Dict("error" => get(resp, "error", "Unknown LLM error"))
        end
    catch e
        println("ERROR in strategy: $e")
        return Dict("error" => string(e))
    end
end

const swarm_optimize_metadata = StrategyMetadata(
    name="swarm_optimize",
    description="Swarm-based yield optimization for Solana protocols."
)

const swarm_optimize_strategy = StrategySpecification(
    SwarmOptimizeConfig,
    nothing,
    nothing,
    swarm_optimize,
    swarm_optimize_metadata
)