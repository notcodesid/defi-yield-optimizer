// DeFi Yield Optimizer mock data
export const appData = {
  protocols: [
    { name: "Aave", apy: 4.23, tvl: "12.5B", risk: "Low", assets: ["USDC", "USDT", "DAI", "ETH"] },
    { name: "Compound", apy: 3.87, tvl: "8.2B", risk: "Low", assets: ["USDC", "USDT", "DAI", "ETH"] },
    { name: "Yearn", apy: 5.12, tvl: "2.1B", risk: "Medium", assets: ["USDC", "USDT", "DAI"] },
    { name: "Curve", apy: 4.67, tvl: "4.8B", risk: "Medium", assets: ["USDC", "USDT", "DAI"] },
    { name: "Convex", apy: 6.34, tvl: "3.2B", risk: "High", assets: ["USDC", "USDT"] },
    { name: "Beefy", apy: 7.89, tvl: "1.5B", risk: "High", assets: ["USDC", "USDT", "DAI", "ETH"] }
  ],
  portfolio: {
    totalValue: 25000,
    currentAPY: 4.1,
    potentialAPY: 5.8,
    assets: [
      { symbol: "USDC", balance: 10000, protocol: "Aave", apy: 4.23 },
      { symbol: "USDT", balance: 8000, protocol: "Compound", apy: 3.87 },
      { symbol: "DAI", balance: 5000, protocol: "Yearn", apy: 5.12 }
    ]
  }
};
