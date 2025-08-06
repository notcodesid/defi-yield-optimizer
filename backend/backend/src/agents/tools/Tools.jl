module Tools

export TOOL_REGISTRY

include("tool_llm_chat.jl")

using ..CommonTypes: ToolSpecification

const TOOL_REGISTRY = Dict{String, ToolSpecification}()

function register_tool(tool_spec::ToolSpecification)
    tool_name = tool_spec.metadata.name
    if haskey(TOOL_REGISTRY, tool_name)
        error("Tool with name '$tool_name' is already registered.")
    end
    TOOL_REGISTRY[tool_name] = tool_spec
end

# All tools to be used by agents must be registered here:

register_tool(TOOL_LLM_CHAT_SPECIFICATION)

end