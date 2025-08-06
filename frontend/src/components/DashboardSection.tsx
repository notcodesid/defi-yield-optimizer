import React from "react";
import StatCard from "./StatCard";
import { appData } from "../data/appData";

export default function DashboardSection() {
  const { portfolio } = appData;
  return (
    <section id="dashboard">
      <header className="section-header flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button className="btn btn--primary shadow-md hover:shadow-lg transition">Optimize Portfolio</button>
      </header>
      <div className="dashboard-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Portfolio Value" value={`$${portfolio.totalValue.toLocaleString()}`} change="+$312 this month" positive />
        <StatCard title="Current APY" value={`${portfolio.currentAPY}%`} change="Below optimal" />
        <StatCard title="Potential APY" value={`${portfolio.potentialAPY}%`} change={`+${(portfolio.potentialAPY-portfolio.currentAPY).toFixed(2)}% available`} positive />
        <StatCard title="Monthly Earnings" value="$85.42" change="Potential: $120.83" positive />
      </div>
      {/* Add more dashboard widgets here */}
    </section>
  );
}
