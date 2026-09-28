import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-[#E5E0D8] bg-[#F1EEE7] text-center text-xs text-[#505A63]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-medium text-[#111827]">
          Institutional Intelligence Terminal · Lululemon Athletica Inc. (LULU)
        </span>
        <span className="text-[#8D969E]">
          Forensic business quality, pricing durability & valuation floor synthesis
        </span>
      </div>
    </footer>
  );
};
