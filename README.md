# DeFi Yield Optimizer

## Product Overview

DeFi Yield Optimizer is an AI-powered decentralized finance (DeFi) application built on the JuliaOS agent framework. The product leverages large language models (LLMs) to autonomously recommend optimal yield strategies for users on Solana, helping maximize returns while providing transparency and explainability.

### Key Features
- **LLM-Powered Swarm Agent:** The core backend agent (`swarm_optimize`) uses an LLM to analyze available protocols and suggest the best yield opportunities for a given token, returning a rationale and APY estimates.
- **Minimal, Clean Backend:** The backend is a slimmed-down JuliaOS instance, focused solely on the custom LLM agent and the essential tools for yield optimization. All legacy code is removed for clarity and maintainability.
- **Modern Next.js Frontend:** The frontend is a beautiful, modular dashboard built with Next.js and Tailwind CSS, providing an intuitive interface for users to view portfolio stats, optimization opportunities, and protocol analytics.
- **Demo/Test Script:** A demonstration script is included to showcase the agent’s reasoning and output, even without live API keys.

## How It Works
1. **User Input:** The user specifies a token (e.g. USDC) and available protocols.
2. **Agent Reasoning:** The `swarm_optimize` agent builds a prompt for the LLM, asking it to recommend the best protocol, estimate APY, and explain its choice.
3. **LLM Response:** The agent parses the LLM’s JSON output, returning the best protocol, APY, and an explanation.
4. **Frontend Display:** The frontend dashboard visualizes portfolio value, APY, and optimization suggestions, ready for further extension.

## Quickstart

### Backend Demo
To run the agent demo and see a sample output:
```bash
cd backend/scripts
julia demo_run_swarm_optimize.jl
```

### Frontend
To launch the dashboard UI:
```bash
cd frontend
npm install
npm run dev
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

## File Structure
- `backend/` — JuliaOS backend with custom agent and tools
- `frontend/` — Next.js dashboard UI
- `backend/scripts/demo_run_swarm_optimize.jl` — Demo script for the agent

## Why This Product?
- **Originality:** Unlike a framework fork, this repo demonstrates a real, working JuliaOS agent and a modern DeFi dashboard.
- **Transparency:** The agent’s logic and LLM prompt are visible and auditable.
- **Extensibility:** Clean structure makes it easy to add new agents, strategies, or frontend features.

---

**Built for the JuliaOS AI DApp Bounty.**
