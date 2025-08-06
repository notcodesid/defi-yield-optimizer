import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-[var(--color-background)] p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
