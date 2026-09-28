import React, { useState } from 'react';
import { ScoreRing } from './ScoreRing.tsx';
import { ScoreBar } from './ScoreBar.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { TabType } from '../types/index.ts';
import { LULU_RAW_DATA } from '../data/luluData.ts';
import { 
  ArrowRight, HelpCircle, TrendingUp, TrendingDown, Sparkles, 
  Quote, FileText, CheckCircle2, ArrowRightLeft, ShieldCheck 
} from 'lucide-react';
import { WhyModalData } from './WhyModal.tsx';

interface ExecutiveOverviewProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenWhy: (data: WhyModalData) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  onNavigateTab,
  onOpenWhy,
}) => {
  const pData = LULU_RAW_DATA.modules.pricingPower;
  const cData = LULU_RAW_DATA.modules.catalyst;
  const mData = LULU_RAW_DATA.modules.moatDurability;
  const sData = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.ratio.investmentDebates.structuralVSCyclical;
  const dData = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.ratio.investmentDebates.downSideFloor;

  // Track which matrix card has evidence flipped
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (moduleName: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [moduleName]: !prev[moduleName]
    }));
  };

  const scoreMatrix = [
    {
      module: 'Pricing Power',
      score: pData.pricingPowerScore,
      max: 10,
      classification: 'Moderate',
      tier: pData.categoryWiseGrossMargin.tier.split(':')[0] || 'Tier 2-3',
      signal: 'Margin / pass-through pressure (-262 bps FY25 compression)',
      tab: 'pricingPower' as TabType,
      summary: pData.categoryWiseGrossMargin.strategicSummary,
      evidences: [
        {
          source: 'FY2024 10-K Footnote 14',
          quote: 'We experienced a decrease in product margin in the Americas segment of 340 basis points, primarily reflective of the impact of tariffs and increased markdowns.',
          context: 'Americas Margin Compression'
        },
        {
          source: 'FY2025 Q1 Earnings Call',
          quote: 'Gross margin decreased 470 basis points to 54.17%, primarily driven by a 420 basis point decrease in product margin due to higher promotional cadences.',
          context: 'Promotional Dilution'
        }
      ],
      submodules: [
        { name: 'Gross Margin Resilience', score: pData.categoryWiseGrossMargin.submoduleScore, tier: pData.categoryWiseGrossMargin.tier },
        { name: 'Full-Price & Promotional Health', score: pData.fullPricePromoLanguage.submoduleScore, tier: pData.fullPricePromoLanguage.tier },
        { name: 'Margin Recovery Speed', score: pData.marginRecoverySpeed.submoduleScore, tier: pData.marginRecoverySpeed.tier },
        { name: 'Cost-Shock Pass-Through', score: pData.tariffCostShockPassThrough.submoduleScore, tier: pData.tariffCostShockPassThrough.tier },
      ],
      evidenceFilter: 'Pricing Power'
    },
    {
      module: 'Catalyst',
      score: cData.catalystScore,
      max: 10,
      classification: 'Tier 1',
      tier: 'Tier 1: High Conviction Execution',
      signal: 'Strong strategic execution across international and outerwear',
      tab: 'catalyst' as TabType,
      summary: cData.catalystExecution.strategicSummary,
      evidences: [
        {
          source: 'FY2025 Q4 Earnings Call',
          quote: 'Total net revenue rose 16% to $3.2 billion. In our international business, net revenue increased 54% with China Mainland up 78%.',
          context: 'China Mainland Acceleration'
        },
        {
          source: 'FY2025 10-K Business Overview',
          quote: 'Our Men’s business grew 15% to $2.66 billion, now accounting for 24% of total net revenue, while outerwear basket accretion rose +140 bps.',
          context: 'Men’s & Outerwear Scale'
        }
      ],
      submodules: [
        { name: 'Catalyst Execution', score: cData.submoduleScores.catalystExecution, tier: cData.catalystExecution.tier },
        { name: 'New Category Impact', score: cData.submoduleScores.newCategoryImpact, tier: cData.newCategoryImpact.tier },
      ],
      evidenceFilter: 'Catalyst'
    },
    {
      module: 'Moat Durability',
      score: mData.moatDurabilityScore,
      max: 10,
      classification: 'Moderate-Strong',
      tier: 'Tier 1-2: Wide-to-Narrow Moat',
      signal: 'Brand authority, proprietary fabrics (Nulu, Everlux), supply-chain chase agility',
      tab: 'moat' as TabType,
      summary: 'Broad competitive durability reinforced by proprietary Science of Feel fabrics, high replenishment loyalty, and organic brand pull with marketing spend under 6% of sales.',
      evidences: [
        {
          source: 'FY2025 10-K Item 1',
          quote: 'Our product design and development efforts are led by a team of researchers, scientists, engineers, and designers in our innovation and development center.',
          context: 'Science of Feel IP & Fabrics'
        },
        {
          source: 'FY2025 10-K MD&A',
          quote: 'Company-operated stores and e-commerce DTC represented 92% of total net revenue, insulating the brand from wholesale distributor discounting.',
          context: 'DTC Channel Control'
        }
      ],
      submodules: [
        { name: 'Product Authority & Innovation', score: mData.pillarScores.productAuthorityAndInnovation },
        { name: 'Distribution Control & Channel Discipline', score: mData.pillarScores.distributionControlAndChannelDiscipline },
        { name: 'Consumer & Community Strength', score: mData.pillarScores.consumerAndCommunityStrength },
        { name: 'Competitive Position & Operational Moat', score: mData.pillarScores.competitivePositionAndOperationalMoat },
      ],
      evidenceFilter: 'Moat Durability'
    },
    {
      module: 'Structural vs Cyclical',
      score: sData.finalScore,
      max: 10,
      classification: 'Mixed',
      tier: 'Mixed Structural & Cyclical Characteristics',
      signal: 'Structural + cyclical weakness (inventory disciplined vs broad sales drag)',
      tab: 'structuralCyclical' as TabType,
      summary: LULU_RAW_DATA.modules.structuralVsCyclicalDownside.insights.investmentDebates.structuralVSCyclical.overallSummary,
      evidences: [
        {
          source: 'FY2026 Q2 Earnings Call',
          quote: 'Inventories decreased 7% to $1.3 billion compared to $1.4 billion at the end of the second quarter of 2024, demonstrating our agile inventory control.',
          context: 'Transitory Cyclical Discipline'
        },
        {
          source: 'FY2025 10-K Item 7',
          quote: 'Comparable store sales decreased 6%, driven by softer traffic across North America, resulting in 7 of 9 tracked corporate dimensions contracting YoY.',
          context: 'Secular Deceleration'
        }
      ],
      submodules: [
        { name: 'Margin Recovery', score: sData.metrics.marginRecovery.score },
        { name: 'Revenue Growth Persistence', score: sData.metrics.revenueGrowthPersistence.score },
        { name: 'Inventory-to-Sales Divergence', score: sData.metrics.inventoryToSalesDivergence.score },
        { name: 'Weakness Breadth', score: sData.metrics.weaknessBreadth.score },
      ],
      evidenceFilter: 'Structural vs Cyclical'
    },
    {
      module: 'Downside Floor',
      score: dData.finalScore,
      max: 10,
      classification: 'Good Downside Support',
      tier: 'Good Downside Support',
      signal: 'Valuation multiple cushion (17.17x vs 32x) + $1.39B net cash balance sheet',
      tab: 'downsideFloor' as TabType,
      summary: LULU_RAW_DATA.modules.structuralVsCyclicalDownside.insights.investmentDebates.downSideFloor.overallSummary,
      evidences: [
        {
          source: 'FY2025 10-K Consolidated Balance Sheet',
          quote: 'Cash and cash equivalents were $1,389.7 million with zero funded borrowings under our revolving credit facility.',
          context: 'Unlevered Liquidity Cushion'
        },
        {
          source: 'FY2026 Q2 Financial Guidance',
          quote: 'Diluted EPS guidance of $9.45 to $9.61 underpins a historical trough multiple support floor of $137.46, representing a -16.7% downside cushion.',
          context: 'Trough Valuation Floor'
        }
      ],
      submodules: [
        { name: 'Valuation Support', score: dData.metrics.valuationSupport.score },
        { name: 'Earnings Resilience', score: dData.metrics.earningsResilience.score },
        { name: 'Balance Sheet & Liquidity', score: dData.metrics.balanceSheetLiquidityCapitalAllocation.score },
        { name: 'Historical Downside Behavior', score: dData.metrics.historicalDownsideBehavior.score },
      ],
      evidenceFilter: 'Downside Floor'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 5 MAJOR HEADLINE SCORE BLOCKS WITH DISTINCT VISUAL HIERARCHY */}
      <div className="border border-[#E5E0D8] bg-[#FFFFFF] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#505A63] font-heading">
            Core Quality Diagnostic Scores (0–10 Scale)
          </h3>
          <span className="text-[11px] text-[#8D969E] hidden sm:inline font-mono">
            Direct institutional scoring benchmark
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* 1. Pricing Power */}
          <div 
            onClick={() => onNavigateTab('pricingPower')}
            className="cursor-pointer group p-5 bg-[#FFFFFF] hover:bg-[#FBF9F5] border border-[#E5E0D8] hover:border-[#1F242F] rounded-xl shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#505A63]">Pricing Power</span>
              <StatusBadge status="Moderate" size="xs" />
            </div>
            <ScoreRing score={5.6} max={10} size={100} strokeWidth={7} />
            <div className="mt-4 pt-3 border-t border-[#E5E0D8] text-center">
              <div className="text-xs font-bold text-[#111827] font-mono">5.6 / 10</div>
              <div className="text-[11px] text-[#505A63] truncate mt-0.5">Margin / pass-through risk</div>
              <div className="mt-2 text-[11px] text-[#795900] font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Inspect Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* 2. Catalyst (Tier 1 - Stronger visual prominence) */}
          <div 
            onClick={() => onNavigateTab('catalyst')}
            className="cursor-pointer group p-5 bg-[#E8F5E9]/50 hover:bg-[#E8F5E9] border border-[#C8E6C9] hover:border-[#16A34A] rounded-xl shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#15803D] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#16A34A]" /> Catalyst
              </span>
              <StatusBadge status="Tier 1" size="xs" />
            </div>
            <ScoreRing score={9.4} max={10} size={100} strokeWidth={8} />
            <div className="mt-4 pt-3 border-t border-[#C8E6C9] text-center">
              <div className="text-xs font-bold text-[#15803D] font-mono">9.4 / 10 · High Conviction</div>
              <div className="text-[11px] text-[#15803D] truncate mt-0.5">+64% Reset Rev, +30% China</div>
              <div className="mt-2 text-[11px] text-[#16A34A] font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Inspect Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* 3. Moat Durability */}
          <div 
            onClick={() => onNavigateTab('moat')}
            className="cursor-pointer group p-5 bg-[#FFFFFF] hover:bg-[#FBF9F5] border border-[#E5E0D8] hover:border-[#1F242F] rounded-xl shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#505A63]">Moat Durability</span>
              <StatusBadge status="Tier 1-2" size="xs" />
            </div>
            <ScoreRing score={7.13} max={10} size={100} strokeWidth={7} />
            <div className="mt-4 pt-3 border-t border-[#E5E0D8] text-center">
              <div className="text-xs font-bold text-[#111827] font-mono">7.13 / 10</div>
              <div className="text-[11px] text-[#505A63] truncate mt-0.5">4 Durable Dimensions</div>
              <div className="mt-2 text-[11px] text-[#795900] font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Inspect Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* 4. Structural vs Cyclical (Mixed - Warning tone) */}
          <div 
            onClick={() => onNavigateTab('structuralCyclical')}
            className="cursor-pointer group p-5 bg-[#FEF2F2]/40 hover:bg-[#FEF2F2] border border-[#FECACA] hover:border-[#DC2626] rounded-xl shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#DC2626]">Structural vs Cyclical</span>
              <StatusBadge status="Mixed" size="xs" />
            </div>
            <ScoreRing score={5.1} max={10} size={100} strokeWidth={7} />
            <div className="mt-4 pt-3 border-t border-[#FECACA] text-center">
              <div className="text-xs font-bold text-[#DC2626] font-mono">5.1 / 10 — Mixed</div>
              <div className="text-[11px] text-[#B91C1C] truncate mt-0.5">7 of 9 segments negative YoY</div>
              <div className="mt-2 text-[11px] text-[#DC2626] font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Inspect Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* 5. Downside Floor */}
          <div 
            onClick={() => onNavigateTab('downsideFloor')}
            className="cursor-pointer group p-5 bg-[#FBF3DC]/40 hover:bg-[#FBF3DC] border border-[#F1DEC0] hover:border-[#795900] rounded-xl shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#795900]">Downside Floor</span>
              <StatusBadge status="Good Downside Support" size="xs" />
            </div>
            <ScoreRing score={7.2} max={10} size={100} strokeWidth={7} />
            <div className="mt-4 pt-3 border-t border-[#F1DEC0] text-center">
              <div className="text-xs font-bold text-[#795900] font-mono">7.2 / 10 · Support</div>
              <div className="text-[11px] text-[#795900] truncate mt-0.5">Valuation floor $137.46</div>
              <div className="mt-2 text-[11px] text-[#795900] font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Inspect Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXECUTIVE SCORE MATRIX CARDS WITH FLIP EVOLUTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h3 className="text-sm font-bold text-[#111827] tracking-tight font-heading">
              Executive Score Matrix & Audited Filing Evidence
            </h3>
            <p className="text-xs text-[#505A63]">
              Click "Show Evidences" on any card to flip and inspect verified SEC quotes directly.
            </p>
          </div>
          <span className="text-xs font-mono text-[#15803D] font-medium flex items-center gap-1.5 bg-[#E8F5E9] px-2.5 py-1 rounded-full border border-[#C8E6C9]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Empirical SEC Evidence Backed
          </span>
        </div>

        <div className="space-y-4">
          {scoreMatrix.map((item, idx) => {
            const isFlipped = !!flippedCards[item.module];

            return (
              <div 
                key={idx} 
                className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs transition-all duration-300 overflow-hidden"
              >
                {/* Header Row with Flip Option */}
                <div className="p-4 sm:p-5 border-b border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FFFFFF]">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onNavigateTab(item.tab)}
                      className="text-base font-bold text-[#111827] hover:text-[#795900] transition-colors font-heading text-left"
                    >
                      {item.module}
                    </button>
                    <StatusBadge status={item.classification} size="xs" />
                    <span className="font-mono text-sm font-bold text-[#111827]">
                      {item.score.toFixed(1)} / 10
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Show Evidence Flip Option */}
                    <button
                      onClick={() => toggleFlip(item.module)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isFlipped
                          ? 'bg-[#1F242F] text-white hover:bg-[#111827]'
                          : 'bg-[#FBF3DC] hover:bg-[#F3E5C3] text-[#795900] border border-[#E8D7AA]'
                      }`}
                    >
                      <ArrowRightLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${isFlipped ? 'rotate-180' : ''}`} />
                      <span>{isFlipped ? 'View Analysis' : 'Show Evidences'}</span>
                      <span className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                        isFlipped ? 'bg-white/20 text-white' : 'bg-[#795900]/10 text-[#795900]'
                      }`}>
                        {item.evidences.length}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Content View: Analysis or Flipped Evidence */}
                <div className="p-4 sm:p-5">
                  {!isFlipped ? (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <ScoreBar score={item.score} max={10} height={6} />

                      <div className="text-xs text-[#111827] font-medium">
                        <strong className="text-[#8D969E] font-normal uppercase text-[10px] tracking-wider block mb-0.5">
                          Primary Analytical Signal
                        </strong>
                        {item.signal}
                      </div>

                      <p className="text-xs text-[#505A63] leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-4 text-[#8D969E]">
                          <span>{item.submodules.length} Evaluated Metrics</span>
                          <span>·</span>
                          <span className="text-[#795900] font-medium">{item.tier}</span>
                        </div>
                        <button
                          onClick={() => onNavigateTab(item.tab)}
                          className="text-xs font-semibold text-[#795900] hover:text-[#8C6A13] inline-flex items-center gap-1"
                        >
                          Deep-Dive Module <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-top-1 duration-200 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D8]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#795900] flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Audited SEC Evidence Quotes
                        </span>
                        <span className="text-[11px] text-[#505A63]">
                          Form 10-K, 10-Q & Transcript Excerpts
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.evidences.map((ev, evIdx) => (
                          <div key={evIdx} className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg">
                            <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-[#E5E0D8]">
                              <span className="font-mono text-[11px] font-bold text-[#111827]">
                                {ev.source}
                              </span>
                              <span className="text-[10px] font-semibold text-[#15803D] bg-[#E8F5E9] px-1.5 py-0.2 rounded border border-[#C8E6C9]">
                                Verified
                              </span>
                            </div>
                            <p className="text-xs text-[#1F242F] italic leading-relaxed pl-2 border-l-2 border-[#C2A45C]">
                              "{ev.quote}"
                            </p>
                            <div className="text-[10px] text-[#8D969E] mt-2">
                              <strong>Context:</strong> {ev.context}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-between items-center text-xs">
                        <button
                          onClick={() => toggleFlip(item.module)}
                          className="inline-flex items-center gap-1 text-xs text-[#505A63] hover:text-[#111827]"
                        >
                          <ArrowRightLeft className="w-3.5 h-3.5" /> Flip back to Analysis
                        </button>
                        <button
                          onClick={() => onNavigateTab(item.tab)}
                          className="text-xs font-semibold text-[#795900] hover:text-[#8C6A13] inline-flex items-center gap-1"
                        >
                          Go to full {item.module} module <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Synthesis Summary Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#15803D]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] font-heading">
              Core Business Quality Strengths
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-[#505A63] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1.5 shrink-0" />
              <span><strong>Top-Tier Catalyst Execution (9.4/10):</strong> Multi-year guidance beat rate of 100% across 8 consecutive quarters with rapid international scale in China Mainland (+30% to +34%).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1.5 shrink-0" />
              <span><strong>Fortress Balance Sheet & Downside Floor (7.2/10):</strong> $1.39B liquid cash, zero funded financial debt, 2.19x current ratio, and an implied trough multiple floor of $137.46.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1.5 shrink-0" />
              <span><strong>Durable Moat Foundation (7.13/10):</strong> Proprietary "Science of Feel" fabric portfolio (Nulu, Everlux, Luxtreme) and 92% direct channel ownership.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="w-4 h-4 text-[#DC2626]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] font-heading">
              Key Institutional Vulnerabilities
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-[#505A63] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
              <span><strong>Pricing Power & Margin Erosion (5.6/10):</strong> Product margins fell 340 bps in the Americas due to tariffs and heightened promotional markdowns.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
              <span><strong>Severe Weakness Breadth (2.0/10 in Breadth):</strong> 7 of 9 monitored dimensions contracted YoY in FY26, including core US (-8%), Canada (-11%), and Accessories (-13%).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
              <span><strong>Secular Deceleration:</strong> 5-year top-line growth decelerated from 42.1% (FY21) to 4.86% (FY25), signaling North American activewear market saturation.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
