module Strategies

export STRATEGY_REGISTRY

include("swarm_optimize_strategy.jl")

using ..CommonTypes: StrategySpecification

const STRATEGY_REGISTRY = Dict{String, StrategySpecification}()

function register_strategy(strategy_spec::StrategySpecification)
    strategy_name = strategy_spec.metadata.name
    if haskey(STRATEGY_REGISTRY, strategy_name)
        error("Strategy with name '$strategy_name' is already registered.")
    end
    STRATEGY_REGISTRY[strategy_name] = strategy_spec
end

# All strategies to be used by agents must be registered here:

register_strategy(SWARM_OPTIMIZE_STRATEGY_SPECIFICATION)

end