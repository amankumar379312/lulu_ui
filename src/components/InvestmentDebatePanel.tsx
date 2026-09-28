import React, { useState } from 'react';
import { LULU_RAW_DATA, ALL_EVIDENCE, EvidenceItem } from '../data/luluData.ts';
import { StatusBadge } from './StatusBadge.tsx';
import { 
  Scale, ShieldCheck, AlertTriangle, CheckCircle2, 
  Quote, ChevronDown, ChevronUp, FileText, Sparkles 
} from 'lucide-react';
import { WhyModalData } from './WhyModal.tsx';

interface InvestmentDebatePanelProps {
  onOpenWhy: (data: WhyModalData) => void;
}

export const InvestmentDebatePanel: React.FC<InvestmentDebatePanelProps> = ({ onOpenWhy }) => {
  const [expandedDebate, setExpandedDebate] = useState<string | null>('structural');
  const [activeEvidenceModal, setActiveEvidenceModal] = useState<EvidenceItem[] | null>(null);

  const structInsights = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.insights.investmentDebates.structuralVSCyclical;
  const floorInsights = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.insights.investmentDebates.downSideFloor;

  // Grab specific evidence items
  const cyclicalQuotes = ALL_EVIDENCE.filter(e => 
    e.module === 'Structural vs Cyclical' || e.submodule?.includes('Margin') || e.submodule?.includes('Inventory')
  );

  const structuralQuotes = ALL_EVIDENCE.filter(e => 
    e.module === 'Structural vs Cyclical' || e.submodule?.includes('Weakness') || e.quote.includes('Americas')
  );

  const valuationQuotes = ALL_EVIDENCE.filter(e => 
    e.module === 'Downside Floor' || e.submodule?.includes('Valuation') || e.submodule?.includes('Balance Sheet')
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Institutional Overview Header */}
      <div className="p-6 bg-white border border-[#dee1e6] rounded-xl shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#eef0f3]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0a0b0d] text-white flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0a0b0d] tracking-tight">
                Institutional Investment Debate Panels
              </h2>
              <p className="text-xs text-[#5b616e]">
                Synthesis of core bull vs bear contentions with auditable SEC evidence citations.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExpandedDebate(expandedDebate === 'structural' ? null : 'structural')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                expandedDebate === 'structural'
                  ? 'bg-[#0052ff] text-white border-[#0052ff]'
                  : 'bg-[#f7f7f7] text-[#5b616e] border-[#dee1e6]'
              }`}
            >
              Structural vs Cyclical Debate
            </button>
            <button
              onClick={() => setExpandedDebate(expandedDebate === 'floor' ? null : 'floor')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                expandedDebate === 'floor'
                  ? 'bg-[#0052ff] text-white border-[#0052ff]'
                  : 'bg-[#f7f7f7] text-[#5b616e] border-[#dee1e6]'
              }`}
            >
              Downside Valuation Floor Debate
            </button>
          </div>
        </div>

        <div className="pt-4 text-xs text-[#5b616e] leading-relaxed">
          <strong className="text-[#0a0b0d]">Investment Committee Brief:</strong> The central debate on LULU centers on whether the deceleration in North American comparable sales and margin compression represents temporary macro consumer discretionary friction (cyclical) or a permanent loss of market share to emergent competitors like Vuori and Alo Yoga (structural). At the same time, the stock trades at 17.17x forward P/E against a 32x historical median with $1.39B net cash.
        </div>
      </div>

      {/* 1. STRUCTURAL VS CYCLICAL DEBATE */}
      <div className="p-6 bg-white border border-[#dee1e6] rounded-xl shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#eef0f3]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-[#0a0b0d]">
                Debate 1: Is North America Slowdown Structural or Cyclical?
              </h3>
              <StatusBadge status="Score: 5.1 / 10 Mixed" size="xs" />
            </div>
            <p className="text-xs text-[#5b616e]">
              Reconciling rapid margin recovery and pristine inventory with broad-based contraction across 7 of 9 business units.
            </p>
          </div>

          <button
            onClick={() => setActiveEvidenceModal(structuralQuotes.concat(cyclicalQuotes))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0052ff] bg-[#eff6ff] hover:bg-[#dbeafe] border border-[#bfdbfe] rounded-lg transition-colors shrink-0"
          >
            <Quote className="w-3.5 h-3.5" />
            View Verbatim Evidence ({structuralQuotes.length + cyclicalQuotes.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bull / Cyclical Stance */}
          <div className="p-5 bg-[#f0fdf4]/50 border border-[#bbf7d0] rounded-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#bbf7d0]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#15803d] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                Cyclical Thesis: Transitory Headwinds
              </span>
              <span className="font-mono text-xs font-bold text-[#15803d]">Strong Discipline</span>
            </div>

            <div className="space-y-3 text-xs text-[#166534] leading-relaxed">
              <div className="p-3 bg-white border border-[#bbf7d0] rounded-lg">
                <div className="font-bold text-[#0a0b0d] mb-1">Pristine Working Capital Discipline</div>
                <p>
                  Inventory growth has trailed sales growth for four consecutive quarters (-11.9 to -2.9 pts divergence), with 0.0 points penalty. LULU is not saddled with excess stock that triggers clearance gluts.
                </p>
              </div>

              <div className="p-3 bg-white border border-[#bbf7d0] rounded-lg">
                <div className="font-bold text-[#0a0b0d] mb-1">V-Shaped Margin Elasticity</div>
                <p>
                  Gross margin demonstrated instant V-shaped recovery in 2026 Q2, rebounding 635 bps to 60.52% and fully recapturing the 625 bps drawdown within a single quarter.
                </p>
              </div>

              <div className="p-3 bg-white border border-[#bbf7d0] rounded-lg">
                <div className="font-bold text-[#0a0b0d] mb-1">International Compounding Engine</div>
                <p>
                  China mainland revenue grew 28% to 30%, expanding to 28.4% of corporate top line and proving global product authority outside domestic activewear saturation.
                </p>
              </div>
            </div>
          </div>

          {/* Bear / Structural Stance */}
          <div className="p-5 bg-[#fef2f2]/50 border border-[#fecaca] rounded-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#fecaca]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#dc2626]" />
                Structural Thesis: Secular Market Share Friction
              </span>
              <span className="font-mono text-xs font-bold text-[#b91c1c]">Severe Breadth</span>
            </div>

            <div className="space-y-3 text-xs text-[#991b1b] leading-relaxed">
              <div className="p-3 bg-white border border-[#fecaca] rounded-lg">
                <div className="font-bold text-[#0a0b0d] mb-1">Extreme Weakness Breadth (7 of 9 Negative)</div>
                <p>
                  Weakness is not isolated to an anomalous SKU or weather pattern; 7 of 9 monitored dimensions contracted YoY in FY26, including US (-8%), Canada (-11%), Accessories (-13%), and both Stores and Digital (-6%).
                </p>
              </div>

              <div className="p-3 bg-white border border-[#fecaca] rounded-lg">
                <div className="font-bold text-[#0a0b0d] mb-1">Traffic & Conversion Deterioration</div>
                <p>
                  Americas comparable store sales declined 3.0%, driven by synchronized foot-traffic (-3.0%), conversion (-1.5%), and units-per-transaction (-2.1%) declines.
                </p>
              </div>

              <div className="p-3 bg-white border border-[#fecaca] rounded-lg">
                <div className="font-bold text-[#0a0b0d] mb-1">Persistent Deceleration Trajectory</div>
                <p>
                  Net revenue growth has dropped monotonically from 42.14% in FY21 to 4.86% in FY25, signaling North American category maturation and competitive encroachment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DOWNSIDE VALUATION FLOOR DEBATE */}
      <div className="p-6 bg-white border border-[#dee1e6] rounded-xl shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#eef0f3]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-[#0a0b0d]">
                Debate 2: Is the Downside Floor at $137.46 Formidable?
              </h3>
              <StatusBadge status="Score: 7.2 / 10 Good Support" size="xs" />
            </div>
            <p className="text-xs text-[#5b616e]">
              Evaluating multiple compression buffers, unencumbered balance sheet assets, and downside recession risk.
            </p>
          </div>

          <button
            onClick={() => setActiveEvidenceModal(valuationQuotes)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0052ff] bg-[#eff6ff] hover:bg-[#dbeafe] border border-[#bfdbfe] rounded-lg transition-colors shrink-0"
          >
            <Quote className="w-3.5 h-3.5" />
            View Valuation Evidence ({valuationQuotes.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bull Floor Case */}
          <div className="p-5 bg-white border border-[#dee1e6] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0a0b0d]">
              <ShieldCheck className="w-4 h-4 text-[#05b169]" />
              Support Factors: Intrinsic Safety Cushion
            </div>

            <ul className="space-y-2.5 text-xs text-[#5b616e] leading-relaxed">
              <li className="p-3 bg-[#f7f7f7] rounded-lg border border-[#eef0f3]">
                <strong className="text-[#0a0b0d]">46.3% Forward P/E Discount:</strong> LULU trades at 17.17x forward P/E compared to its 10-year median of 32.0x, offering severe valuation discount cushion.
              </li>
              <li className="p-3 bg-[#f7f7f7] rounded-lg border border-[#eef0f3]">
                <strong className="text-[#0a0b0d]">Zero Funded Debt & $1.39B Net Cash:</strong> No credit refinancing cliff or maturity wall; capable of funding internal capex and share repurchases organically.
              </li>
              <li className="p-3 bg-[#f7f7f7] rounded-lg border border-[#eef0f3]">
                <strong className="text-[#0a0b0d]">5.82% Free Cash Flow Yield:</strong> Substantially above peer median (4.20%), generating strong cash return yield at current valuation.
              </li>
            </ul>
          </div>

          {/* Bear Floor Risk */}
          <div className="p-5 bg-white border border-[#dee1e6] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0a0b0d]">
              <AlertTriangle className="w-4 h-4 text-[#d97706]" />
              Downside Risk Factors: Multiple De-rating Exposure
            </div>

            <ul className="space-y-2.5 text-xs text-[#5b616e] leading-relaxed">
              <li className="p-3 bg-[#f7f7f7] rounded-lg border border-[#eef0f3]">
                <strong className="text-[#0a0b0d]">Historical Cycle Drawdowns (-66% to -68%):</strong> Past crises (2013-14 sheer recall, 2015-16 reset) experienced severe peak-to-trough equity drawdowns requiring ~18 months to recover.
              </li>
              <li className="p-3 bg-[#f7f7f7] rounded-lg border border-[#eef0f3]">
                <strong className="text-[#0a0b0d]">$1.61B Lease Obligations:</strong> While funded debt is zero, substantial retail lease liabilities represent rigid fixed overhead if foot-traffic stays negative.
              </li>
              <li className="p-3 bg-[#f7f7f7] rounded-lg border border-[#eef0f3]">
                <strong className="text-[#0a0b0d]">Potential Multiple De-rating:</strong> If growth stalls permanently below 5%, valuation could re-rate from premium specialty retail (17x) to mature apparel peers (12-14x).
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidence Drawer if opened */}
      {activeEvidenceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0b0d]/50 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white rounded-xl shadow-2xl border border-[#dee1e6] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee1e6] bg-[#f7f7f7]">
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4 text-[#0052ff]" />
                <h4 className="text-sm font-bold text-[#0a0b0d]">
                  SEC Filing & Transcript Evidence Dossier
                </h4>
              </div>
              <button
                onClick={() => setActiveEvidenceModal(null)}
                className="text-xs text-[#7c828a] hover:text-[#0a0b0d] font-bold"
              >
                Close ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-3">
              {activeEvidenceModal.map((ev, idx) => (
                <div key={idx} className="p-3.5 bg-[#f7f7f7] border border-[#eef0f3] rounded-lg text-xs space-y-1">
                  <div className="flex items-center justify-between text-[#0052ff] font-semibold text-[11px]">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" /> {ev.source}
                    </span>
                    <span className="text-[#7c828a]">{ev.submodule}</span>
                  </div>
                  <blockquote className="text-[#0a0b0d] italic leading-relaxed pt-1">
                    "{ev.quote}"
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="px-6 py-3 border-t border-[#dee1e6] bg-[#f7f7f7] text-right">
              <button
                onClick={() => setActiveEvidenceModal(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0a0b0d] rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
