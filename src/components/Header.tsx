import React from 'react';
import { TabType } from '../types/index.ts';
import { ShieldCheck, BarChart3, Clock } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const navItems: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Executive Overview' },
    { id: 'pricingPower', label: 'Pricing Power' },
    { id: 'catalyst', label: 'Catalyst' },
    { id: 'moat', label: 'Moat Durability' },
    { id: 'structuralCyclical', label: 'Structural vs Cyclical' },
    { id: 'downsideFloor', label: 'Downside Floor' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E5E0D8] shadow-xs">
      {/* Top Banner Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Terminal & Company Identity */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#1F242F] text-[#FBF9F5] flex items-center justify-center font-mono font-bold text-base tracking-tight shrink-0 shadow-xs border border-[#111827]">
            LULU
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#795900] font-mono">
                Institutional Intelligence Terminal
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#FBF3DC] text-[#795900] border border-[#E8D7AA]">
                NASDAQ: LULU
              </span>
            </div>
            <h1 className="text-lg font-bold text-[#111827] tracking-tight leading-snug font-heading">
              Lululemon Athletica Inc.
            </h1>
          </div>
        </div>

        {/* Right Status Metadata */}
        <div className="flex items-center gap-4 text-xs text-[#505A63]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            <span className="font-medium text-[#111827]">Market Price:</span>
            <span className="font-mono font-bold text-[#111827]">$165.00</span>
          </div>

          <div className="h-4 w-px bg-[#E5E0D8]" />

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8D969E]">
            <Clock className="w-3.5 h-3.5 text-[#795900]" />
            <span>FY2025 / Q2 FY2026 Active</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E5E0D8]">
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none" aria-label="Tabs">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#1F242F] text-[#FFFFFF] shadow-xs'
                    : 'text-[#505A63] hover:text-[#111827] hover:bg-[#F1EEE7]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
