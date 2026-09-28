import React, { useState } from 'react';
import { 
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { LULU_RAW_DATA } from '../data/luluData.ts';

interface TimelineNodeData {
  period: string;
  yearLabel: string;
  stance: string;
  fullPriceHealth: 'Stable' | 'Promotional Pressure' | 'Improving' | 'Under Pressure';
  stateType: 'stable' | 'pressure' | 'improving';
  eventHeadline: string;
  keyEvent: string;
  markdownImpact: string;
  markdownImpactBps: number | null;
  disclosure: string;
  managementResponse?: string | null;
  source: string;
  topic?: string;
  keyEvidence: string;
}

interface FullPricePromoTimelineProps {
  onOpenAudit?: () => void;
}

export const FullPricePromoTimeline: React.FC<FullPricePromoTimelineProps> = () => {
  const promoData = LULU_RAW_DATA.modules.pricingPower.fullPricePromoLanguage;
  const timeline: TimelineNodeData[] = (promoData.timeline as any[]) || [
    {
      period: 'FY2023',
      yearLabel: 'FY2023',
      stance: 'Moderate Activity',
      fullPriceHealth: 'Stable',
      stateType: 'stable',
      eventHeadline: 'Investment & resilience',
      keyEvent: 'Investment & resilience',
      markdownImpact: 'Not Quantified',
      markdownImpactBps: null,
      disclosure: 'Management highlighted ongoing investment in product assortment and incremental strategies to drive long-term growth despite external pressures.',
      managementResponse: null,
      source: 'FY2023 Q2 10-Q',
      topic: 'Tariff pressure',
      keyEvidence: 'We are navigating increased costs related to tariffs and the removal of the de minimis exemption.'
    },
    {
      period: 'FY2024',
      yearLabel: 'FY2024',
      stance: 'Moderate Activity',
      fullPriceHealth: 'Promotional Pressure',
      stateType: 'pressure',
      eventHeadline: 'Markdown pressure',
      keyEvent: 'Increased markdown pressure',
      markdownImpact: '+70 bps',
      markdownImpactBps: 70.0,
      disclosure: 'Management acknowledged increased markdowns due to shifting market dynamics and tariff costs, while emphasizing actions to improve full-price health.',
      managementResponse: 'Strategic pricing actions to mitigate tariff costs.',
      source: 'FY2024 Q4 Earnings Transcript',
      topic: 'Pricing actions',
      keyEvidence: 'We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions.'
    },
    {
      period: 'FY2025',
      yearLabel: 'FY2025',
      stance: 'Moderate Activity',
      fullPriceHealth: 'Promotional Pressure',
      stateType: 'pressure',
      eventHeadline: 'Full-price restoration focus',
      keyEvent: 'Continued promotional pressure',
      markdownImpact: 'Not Quantified',
      markdownImpactBps: null,
      disclosure: 'Higher markdown penetration in North America remained a concern, while management focused on restoring full-price health.',
      managementResponse: 'Focus on restoring full-price health, increasing newness, and guest experience.',
      source: 'FY2025 Q4 Earnings Transcript',
      topic: 'Full-price focus',
      keyEvidence: 'We are focused on the growth of our full-price business ... to increase newness, enhance the guest experience in stores and online and improve our performance.'
    },
    {
      period: 'FY2026 Q1',
      yearLabel: 'FY2026 Q1',
      stance: 'Moderate Activity',
      fullPriceHealth: 'Improving',
      stateType: 'improving',
      eventHeadline: 'Full-Price Improvement',
      keyEvent: 'Full-price recovery',
      markdownImpact: 'Not Quantified',
      markdownImpactBps: null,
      disclosure: 'Management reported sequential improvement in full-price sales relative to Q4.',
      managementResponse: 'Continued focus on product newness, guest experience, brand engagement, and pricing discipline.',
      source: 'FY2026 Q1 Earnings Transcript',
      topic: 'Improvement',
      keyEvidence: 'In Q1, I\'m encouraged that we have experienced a sequential improvement in our full price sales relative to Q4.'
    }
  ];

  // Active / selected timeline node (toggle accordion per item)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setSelectedIdx(selectedIdx === idx ? null : idx);
  };

  const getNodeStyles = (stateType: string, isSelected: boolean) => {
    if (stateType === 'stable') {
      return {
        dotBg: 'bg-[#2563EB]',
        halo: 'bg-[#EFF6FF] border-[#BFDBFE]',
        ring: isSelected ? 'ring-2 ring-[#2563EB] ring-offset-2' : 'hover:ring-2 hover:ring-[#2563EB]/40',
        textColor: 'text-[#1E40AF]',
        badgeBg: 'bg-[#EFF6FF] text-[#1E40AF] border-[#BFDBFE]'
      };
    }
    if (stateType === 'pressure') {
      return {
        dotBg: 'bg-[#DC2626]',
        halo: 'bg-[#FEF2F2] border-[#FECACA]',
        ring: isSelected ? 'ring-2 ring-[#DC2626] ring-offset-2' : 'hover:ring-2 hover:ring-[#DC2626]/40',
        textColor: 'text-[#DC2626]',
        badgeBg: 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]'
      };
    }
    // improving
    return {
      dotBg: 'bg-[#16A34A]',
      halo: 'bg-[#F0FDF4] border-[#BBF7D0]',
      ring: isSelected ? 'ring-2 ring-[#16A34A] ring-offset-2' : 'hover:ring-2 hover:ring-[#16A34A]/40',
      textColor: 'text-[#15803D]',
      badgeBg: 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]'
    };
  };

  return (
    <div className="space-y-4">
      {/* SUMMARY BOX */}
      <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
        <span className="font-bold uppercase tracking-wider text-[10px] font-mono block mb-1 text-[#795900]">
          Analytical Summary
        </span>
        <p className="text-xs text-[#1F242F] leading-relaxed font-normal">
          {promoData.strategicSummary || "Over the past five fiscal years, Lululemon has navigated a landscape of increased costs and promotional activities while maintaining a focus on brand strength and full-price selling strategies. While markdowns have increased due to external pressures, management has expressed a dedication to improving full-price sales across all regions. Continued emphasis on product innovation and strategic pricing actions reflects an effort to protect brand equity and enhance customer loyalty."}
        </p>
      </div>

      {/* SEQUENTIAL TIMELINE SECTION */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-[11px] pb-1 border-b border-[#E5E0D8]">
          <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px] text-[#505A63] font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#795900]" />
            Promotional Trajectory
          </span>
          <span className="text-[10px] text-[#8D969E]">
            Tap period to expand disclosures
          </span>
        </div>

        {/* Vertical Track with In-Place Expandable Accordion Nodes */}
        <div className="relative pl-7 space-y-2 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#3B82F6] before:via-[#EF4444] before:to-[#10B981]">
          {timeline.map((node, idx) => {
            const isSelected = selectedIdx === idx;
            const styles = getNodeStyles(node.stateType, isSelected);

            return (
              <div 
                key={node.period}
                className="relative"
              >
                {/* Timeline Node Bullet on Rail */}
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  aria-label={`${node.period}: ${node.fullPriceHealth}`}
                  className={`absolute -left-[27px] top-2.5 w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    styles.halo
                  } ${isSelected ? 'scale-110 shadow-xs ' + styles.ring : 'hover:scale-105 ' + styles.ring}`}
                >
                  <span className={`w-2 h-2 rounded-full ${styles.dotBg}`} />
                </button>

                {/* In-Place Expandable Period Card */}
                <div 
                  onClick={() => handleToggle(idx)}
                  className={`p-2.5 sm:p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-[#FBF9F5] border-[#795900] ring-1 ring-[#795900]/30 shadow-xs' 
                      : 'bg-[#FFFFFF] border-[#E5E0D8] hover:border-[#D8D2C5] hover:bg-[#FBF9F5]/40'
                  }`}
                >
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono font-bold text-xs text-[#111827]">
                        {node.period}
                      </span>
                      <span className="text-[#8D969E] text-xs">·</span>
                      <span className="text-xs font-semibold text-[#111827]">
                        {node.eventHeadline}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${styles.badgeBg}`}>
                        {node.fullPriceHealth === 'Improving' ? 'Improving ↗' : node.fullPriceHealth}
                      </span>
                      {isSelected ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#795900]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#8D969E]" />
                      )}
                    </div>
                  </div>

                  {/* Compact Preview Line when Collapsed */}
                  {!isSelected && (
                    <div className="flex items-center justify-between text-[10px] text-[#505A63] mt-1 pt-1 border-t border-[#E5E0D8]/60">
                      <span>
                        Markdown Impact: <strong className={node.markdownImpactBps ? 'text-[#DC2626]' : 'text-[#505A63]'}>{node.markdownImpact}</strong>
                      </span>
                      <span className="text-[#8D969E] font-mono">
                        {node.source}
                      </span>
                    </div>
                  )}

                  {/* In-Place Compact Expanded Details */}
                  {isSelected && (
                    <div 
                      onClick={(e) => e.stopPropagation()} 
                      className="mt-2 pt-2 border-t border-[#E5E0D8] space-y-2 text-xs animate-in fade-in duration-150 cursor-default"
                    >
                      <p className="text-[11px] text-[#505A63] leading-relaxed">
                        {node.disclosure}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-1.5 bg-[#FFFFFF] border border-[#E5E0D8] rounded">
                          <span className="text-[9px] font-mono uppercase text-[#8D969E] block">Markdown Impact</span>
                          <span className={`font-mono text-xs font-bold ${node.markdownImpactBps ? 'text-[#DC2626]' : 'text-[#505A63]'}`}>
                            {node.markdownImpact}
                          </span>
                        </div>
                        <div className="p-1.5 bg-[#FFFFFF] border border-[#E5E0D8] rounded">
                          <span className="text-[9px] font-mono uppercase text-[#8D969E] block">Filing Source</span>
                          <span className="font-semibold text-[#111827] truncate block text-[11px]" title={node.source}>
                            {node.source}
                          </span>
                        </div>
                      </div>

                      {node.managementResponse && (
                        <div className="p-2 bg-[#FFFFFF] border border-[#E5E0D8] rounded text-[11px]">
                          <strong className="text-[#795900] font-semibold">Action: </strong>
                          <span className="text-[#1F242F]">{node.managementResponse}</span>
                        </div>
                      )}

                      <div className="p-2 bg-[#FFFFFF] border-l-2 border-l-[#795900] border border-[#E5E0D8] rounded text-[11px]">
                        <span className="text-[9px] font-mono uppercase text-[#8D969E] block mb-0.5">Audited Footnote</span>
                        <p className="italic text-[#1F242F] text-[10.5px] leading-snug">"{node.keyEvidence}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
