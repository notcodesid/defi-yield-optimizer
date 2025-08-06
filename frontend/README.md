# defi-yield-optimizer

## What I Built

This project is a DeFi Yield Optimizer AI DApp built using the JuliaOS agent framework. It features a custom LLM-powered agent strategy (`swarm_optimize`) that recommends the best yield protocol on Solana based on protocol data and token input. The backend is fully minimal, clean, and focused on this new agent logic.

### Key Features
- **LLM-powered agent**: The `swarm_optimize` strategy uses a large language model to recommend optimal protocols and explain its reasoning.
- **Minimal, clean JuliaOS backend**: Only the custom agent and LLM tool are registered. All legacy/unused code is removed.
- **Modern Next.js frontend**: Clean dashboard UI for demo and extension.
- **Demo/test script**: Run the agent locally and see output.

## Demo: Run the Custom Agent

To run a demonstration of the new `swarm_optimize` agent logic:

```bash
cd backend/scripts
julia demo_run_swarm_optimize.jl
```

This will print a simulated output from the agent, showing the LLM-powered recommendation logic.

## How it Works
- The agent takes a list of protocols and a token (e.g. USDC), builds an LLM prompt, and parses the LLM's JSON response.
- The demo script mocks the LLM call for easy local testing.

---

## Frontend (Next.js)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
