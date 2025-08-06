import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  positive?: boolean;
}

export default function StatCard({ title, value, change, positive }: StatCardProps) {
  return (
    <div className="card stats-card shadow-md hover:shadow-lg transition-shadow duration-200 border border-[var(--color-card-border)] rounded-xl bg-[var(--color-surface)]">
      <div className="card__body flex flex-col gap-2 justify-center p-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-1">{title}</h3>
        <div className="stat-value text-3xl font-bold text-[var(--color-text)] mb-1">{value}</div>
        {change && (
          <div className={`stat-change text-sm font-medium ${positive ? 'text-[var(--color-success)]' : 'text-[var(--color-warning)]'}`}>{change}</div>
        )}
      </div>
    </div>
  );
}
