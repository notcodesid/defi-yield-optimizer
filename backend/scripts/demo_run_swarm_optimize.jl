# Demo: Run the custom swarm_optimize agent strategy
using Pkg
Pkg.activate("../backend")

include("../backend/src/agents/strategies/swarm_optimize_strategy.jl")

# Dummy context and tool for demonstration
struct DummyTool
    metadata::NamedTuple
    config::Nothing
end

function (tool::DummyTool)(config, args)
    # Simulate LLM response
    return Dict("success" => true, "output" => "{\"best_protocol\": \"Aave\", \"consensus_apy\": 4.21, \"all_yields\": {\"Aave\": 4.21, \"Compound\": 3.9}, \"explanation\": \"Aave offers the best APY for USDC.\"}")
end

# Setup dummy context
dummy_tool = DummyTool((name = "llm_chat",), nothing)
context = AgentContext([dummy_tool])

config = SwarmOptimizeConfig(["Aave", "Compound"], 3)
input = Dict("token" => "USDC")

result = swarm_optimize(config, context, input)
println("Swarm Optimize Agent Output:")
println(result)
