import React from "react";

const navItems = [
  { label: "Dashboard", icon: "📊", section: "dashboard" },
  { label: "Protocols", icon: "🏦", section: "protocols" },
  { label: "Portfolio", icon: "💼", section: "portfolio" },
  { label: "Notifications", icon: "🔔", section: "notifications", badge: 3 },
  { label: "Analytics", icon: "📈", section: "analytics" },
  { label: "Settings", icon: "⚙️", section: "settings" }
];

export default function Sidebar() {
  // For MVP, no navigation logic yet
  return (
    <aside className="sidebar bg-[var(--color-surface)] border-r border-[var(--color-border)] flex flex-col p-6 shadow-sm min-w-[260px] max-w-[280px]">
      <div className="sidebar-header mb-8">
        <h2 className="logo text-[var(--color-primary)] font-bold text-2xl m-0">DeFi Optimizer</h2>
      </div>
      <nav className="sidebar-nav flex-1 flex flex-col gap-2">
        {navItems.map((item, idx) => (
          <button key={item.label} className={`nav-item flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-text)] font-medium text-base w-full text-left transition-all duration-150 ${idx === 0 ? 'bg-[var(--color-primary)] text-[var(--color-btn-primary-text)]' : ''}`}> {/* Dashboard active by default */}
            <span className="nav-icon text-lg min-w-[20px]">{item.icon}</span>
            {item.label}
            {item.badge && (
              <span className="notification-badge bg-[var(--color-error)] text-white rounded-full px-2 py-1 text-xs font-bold ml-auto">{item.badge}</span>
            )}
          </button>
        ))}
      </nav>
      <div className="wallet-connection mt-6 pt-6 border-t border-[var(--color-border)]">
        <button className="btn btn--primary w-full">Connect Wallet</button>
        <div className="wallet-info hidden mt-3 p-3 bg-[var(--color-bg-1)] rounded-lg">
          <div className="wallet-address font-mono text-sm text-[var(--color-text-secondary)]">0x742d...4e8c</div>
          <div className="wallet-balance font-bold text-[var(--color-text)] mt-1">$25,000 USD</div>
        </div>
      </div>
    </aside>
  );
}
