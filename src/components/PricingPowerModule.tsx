import React, { useState } from 'react';
import { LULU_RAW_DATA } from '../data/luluData.ts';
import { ScoreRing } from './ScoreRing.tsx';
import { ScoreBar } from './ScoreBar.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { FlippableCard } from './FlippableCard.tsx';
import { FullPricePromoTimeline } from './FullPricePromoTimeline.tsx';
import { WhyModalData } from './WhyModal.tsx';

interface PricingPowerModuleProps {
  onOpenWhy?: (data: WhyModalData) => void;
}

type SubmoduleFilter = 'ALL' | 'GROSS_MARGIN' | 'PROMO' | 'RECOVERY' | 'TARIFF';

export const PricingPowerModule: React.FC<PricingPowerModuleProps> = () => {
  const pData = LULU_RAW_DATA.modules.pricingPower;
  const grossMargin = pData.categoryWiseGrossMargin;
  const promo = pData.fullPricePromoLanguage;
  const recovery = pData.marginRecoverySpeed;
  const tariff = pData.tariffCostShockPassThrough;

  const [activeSubmodule, setActiveSubmodule] = useState<SubmoduleFilter>('ALL');

  const promoEvidences = (promo.evidence || []).map((e: any) => ({
    source: e.source,
    filingDate: e.period,
    quote: e.quote,
    context: `${e.period} (${e.topic}) · Pricing & Full-Price Discipline`
  }));

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* PRICING POWER HERO */}
      <div className="p-6 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-6">
            <ScoreRing
              score={pData.pricingPowerScore}
              max={10}
              size={110}
              strokeWidth={8}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#795900] font-mono">
                  Pricing Power Assessment
                </span>
                <StatusBadge status="Tier 2: Moderate Pricing Power" size="xs" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight font-heading">
                Pricing Power Score: {pData.pricingPowerScore} / 10
              </h2>
              <p className="text-xs text-[#505A63] max-w-2xl mt-1 leading-relaxed">
                Evaluates product margin durability, tariff and freight cost absorption, markdown posture, and rapid recovery response across global trade shifts.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Submodule Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          <div 
            onClick={() => setActiveSubmodule(activeSubmodule === 'GROSS_MARGIN' ? 'ALL' : 'GROSS_MARGIN')}
            className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
              activeSubmodule === 'GROSS_MARGIN' ? 'bg-[#FBF3DC] border-[#795900] shadow-xs' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#111827]">1. Gross Margin Resilience</span>
                <span className="font-mono text-xs font-bold text-[#DC2626]">2.0 / 10</span>
              </div>
              <StatusBadge status="Tier 3: Margin Erosion Risk" size="xs" className="mb-2" />
              <p className="text-[11px] text-[#505A63] leading-snug line-clamp-3">
                Compression of 262 bps in FY25 due to tariffs, higher markdowns, and occupancy deleverage.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8]">
              <ScoreBar score={grossMargin.submoduleScore} max={10} height={5} showScoreText={false} />
            </div>
          </div>

          <div 
            onClick={() => setActiveSubmodule(activeSubmodule === 'PROMO' ? 'ALL' : 'PROMO')}
            className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
              activeSubmodule === 'PROMO' ? 'bg-[#FBF3DC] border-[#795900] shadow-xs' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#111827]">2. Full-Price & Promotional Health</span>
                <span className="font-mono text-xs font-bold text-[#795900]">6.0 / 10</span>
              </div>
              <StatusBadge status="Tier 2: Moderate Promo" size="xs" className="mb-2" />
              <p className="text-[11px] text-[#505A63] leading-snug line-clamp-3">
                Promotional pressure peaked in FY24 (+70 bps); sequential full-price recovery evident by FY26 Q1.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8]">
              <ScoreBar score={promo.submoduleScore} max={10} height={5} showScoreText={false} />
            </div>
          </div>

          <div 
            onClick={() => setActiveSubmodule(activeSubmodule === 'RECOVERY' ? 'ALL' : 'RECOVERY')}
            className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
              activeSubmodule === 'RECOVERY' ? 'bg-[#FBF3DC] border-[#795900] shadow-xs' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#111827]">3. Margin Recovery Speed</span>
                <span className="font-mono text-xs font-bold text-[#15803D]">10.0 / 10</span>
              </div>
              <StatusBadge status="Tier 1: Rapid 1-Quarter Recovery" size="xs" className="mb-2" />
              <p className="text-[11px] text-[#505A63] leading-snug line-clamp-3">
                Recouped 100% of 2026 Q1 gross margin dip (54.17% to 60.52%) in exactly one quarter.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8]">
              <ScoreBar score={recovery.submoduleScore} max={10} height={5} showScoreText={false} />
            </div>
          </div>

          <div 
            onClick={() => setActiveSubmodule(activeSubmodule === 'TARIFF' ? 'ALL' : 'TARIFF')}
            className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
              activeSubmodule === 'TARIFF' ? 'bg-[#FBF3DC] border-[#795900] shadow-xs' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#111827]">4. Cost-Shock Pass-Through</span>
                <span className="font-mono text-xs font-bold text-[#795900]">6.0 / 10</span>
              </div>
              <StatusBadge status="Tier 2: Moderate / Partial Pass-Through" size="xs" className="mb-2" />
              <p className="text-[11px] text-[#505A63] leading-snug line-clamp-3">
                Demonstrated multi-cycle cost absorption with selective price hikes and vendor diversification.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8]">
              <ScoreBar score={tariff.submoduleScore} max={10} height={5} showScoreText={false} />
            </div>
          </div>
        </div>

        {activeSubmodule !== 'ALL' && (
          <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs text-[#505A63]">
            <span>Filtered view: showing only selected submodule.</span>
            <button
              type="button"
              onClick={() => setActiveSubmodule('ALL')}
              className="text-[#795900] hover:underline font-semibold cursor-pointer"
            >
              Show all 4 submodules
            </button>
          </div>
        )}
      </div>

      {/* SUBMODULE 1: CONSOLIDATED GROSS MARGIN TREND (FLIPPABLE CARD) */}
      {(activeSubmodule === 'ALL' || activeSubmodule === 'GROSS_MARGIN') && (
        <FlippableCard
          title="Submodule 1: Consolidated Gross Margin Trend"
          subtitle="Measures gross-margin recovery patterns and resilience across successive quarters"
          badgeText="Score: 2.0 / 10 (Tier 3)"
          badgeType="warning"
          evidences={grossMargin.evidence}
        >
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Fiscal Year</th>
                    <th className="py-2.5 px-3 text-right">Net Revenue ($M)</th>
                    <th className="py-2.5 px-3 text-right">Gross Profit ($M)</th>
                    <th className="py-2.5 px-3 text-right">Gross Margin %</th>
                    <th className="py-2.5 px-3 text-right">YoY Margin Change (bps)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                  {grossMargin.annualMargins.map((m, idx) => (
                    <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                      <td className="py-3 px-3 font-semibold text-[#111827] font-sans">FY{m.fiscalYear}</td>
                      <td className="py-3 px-3 text-right font-bold text-[#111827]">
                        ${(m.revenue / 1e6).toFixed(1)}M
                      </td>
                      <td className="py-3 px-3 text-right text-[#505A63]">
                        ${(m.grossProfit / 1e6).toFixed(1)}M
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-[#111827]">
                        {m.grossMarginPct.toFixed(2)}%
                      </td>
                      <td className={`py-3 px-3 text-right font-bold ${
                        m.yoyChangeBps === null ? 'text-[#8D969E]' :
                        m.yoyChangeBps >= 0 ? 'text-[#15803D]' : 'text-[#DC2626]'
                      }`}>
                        {m.yoyChangeBps === null ? 'Base Year' : `${m.yoyChangeBps > 0 ? '+' : ''}${m.yoyChangeBps} bps`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-lg text-xs text-[#795900] leading-relaxed">
              <strong>Analytical Summary:</strong> Core women’s franchise remains the key margin engine ($6.99B), but overall corporate product margin contracted by 250 bps primarily due to Americas promotional markdowns and tariff cost increases. Click <em>Show Evidence</em> above to inspect audited 10-K footnotes.
            </div>
          </div>
        </FlippableCard>
      )}

      {/* SUBMODULES 2 & 3: FULL-PRICE HEALTH (LEFT) & MARGIN RECOVERY SPEED (RIGHT) */}
      {(activeSubmodule === 'ALL' || activeSubmodule === 'PROMO' || activeSubmodule === 'RECOVERY') && (
        <div className={`grid gap-6 ${
          activeSubmodule === 'ALL' ? 'grid-cols-1 lg:grid-cols-2 items-start' : 'grid-cols-1'
        }`}>
          {/* SUBMODULE 2: FULL-PRICE & PROMOTIONAL HEALTH (LEFT HALF) */}
          {(activeSubmodule === 'ALL' || activeSubmodule === 'PROMO') && (
            <FlippableCard
              title="Submodule 2: Full-Price & Promotional Health"
              subtitle="Evaluates full-price selling strength, promotional intensity, and pricing discipline"
              badgeText={`Score: ${promo.submoduleScore.toFixed(1)} / 10 (${promo.tier.split(':')[0]})`}
              badgeType="info"
              evidences={promoEvidences}
              className="h-full"
            >
              <FullPricePromoTimeline />
            </FlippableCard>
          )}

          {/* SUBMODULE 3: MARGIN RECOVERY SPEED (RIGHT HALF) */}
          {(activeSubmodule === 'ALL' || activeSubmodule === 'RECOVERY') && (
            <FlippableCard
              title="Submodule 3: Margin Recovery Speed"
              subtitle="Quarterly gross margin resilience demonstrating rapid 1-quarter rebound surpassing peak"
              badgeText={`Score: ${recovery.score || recovery.submoduleScore} / 10 (${recovery.tier.split(':')[0]})`}
              badgeType="positive"
              evidences={recovery.evidence}
              className="h-full"
            >
              <div className="space-y-4">
                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D969E] block">Peak Margin</span>
                    <span className="text-sm font-bold text-[#111827] font-mono mt-0.5 block">{recovery.summary.peakMargin}%</span>
                    <span className="text-[10px] text-[#505A63]">2024 Q4 baseline</span>
                  </div>
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D969E] block">Trough Margin</span>
                    <span className="text-sm font-bold text-[#DC2626] font-mono mt-0.5 block">{recovery.summary.troughMargin}%</span>
                    <span className="text-[10px] text-[#DC2626] font-mono font-medium">-{recovery.summary.drawdownBps} bps</span>
                  </div>
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D969E] block">Recovery Margin</span>
                    <span className="text-sm font-bold text-[#15803D] font-mono mt-0.5 block">{recovery.summary.recoveryMargin}%</span>
                    <span className="text-[10px] text-[#15803D] font-mono font-medium">{recovery.summary.recoveryPercent}% of drop</span>
                  </div>
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D969E] block">Recovery Speed</span>
                    <span className="text-sm font-bold text-[#15803D] font-mono mt-0.5 block">{recovery.summary.recoveryQuarters} Quarter</span>
                    <span className="text-[10px] text-[#15803D] font-medium">{recovery.summary.status}</span>
                  </div>
                </div>

                {/* SVG Progression Chart with Proper Proportions and Full-Width Scaling */}
                <div className="w-full bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3 relative">
                  <div className="flex items-center justify-between text-[11px] pb-2 mb-1 border-b border-[#E5E0D8]">
                    <span className="font-mono uppercase tracking-wider text-[10px] text-[#505A63] font-semibold">
                      Quarterly Margin Progression (2024 Q4 - 2026 Q2)
                    </span>
                    <span className="font-mono text-[10px] text-[#15803D] font-bold bg-[#E8F5E9] px-2 py-0.5 rounded border border-[#C8E6C9]">
                      +635 bps Rebound
                    </span>
                  </div>

                  <div className="w-full h-64 sm:h-72">
                    <svg viewBox="0 0 540 230" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="recoveryGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                          <stop offset="60%" stopColor="#10B981" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Y-Axis Horizontal Grid Lines */}
                      <line x1="42" y1="35" x2="520" y2="35" stroke="#E5E0D8" strokeDasharray="3 3" />
                      <text x="35" y="38" fontSize="8" fill="#8D969E" textAnchor="end" fontFamily="monospace">61%</text>

                      <line x1="42" y1="85" x2="520" y2="85" stroke="#E5E0D8" strokeDasharray="3 3" />
                      <text x="35" y="88" fontSize="8" fill="#8D969E" textAnchor="end" fontFamily="monospace">59%</text>

                      <line x1="42" y1="135" x2="520" y2="135" stroke="#E5E0D8" strokeDasharray="3 3" />
                      <text x="35" y="138" fontSize="8" fill="#8D969E" textAnchor="end" fontFamily="monospace">56%</text>

                      <line x1="42" y1="185" x2="520" y2="185" stroke="#E5E0D8" strokeDasharray="3 3" />
                      <text x="35" y="188" fontSize="8" fill="#8D969E" textAnchor="end" fontFamily="monospace">53%</text>

                      {/* Baseline Target Line (60.5%) */}
                      <line x1="42" y1="48" x2="520" y2="48" stroke="#795900" strokeDasharray="4 2" strokeOpacity="0.4" />
                      <text x="515" y="44" fontSize="7.5" fill="#795900" textAnchor="end" fontFamily="monospace" fontWeight="bold">
                        Target Baseline: {recovery.recovery.targetMargin}%
                      </text>

                      {/* Gradient Fill Under Polyline */}
                      <polygon
                        points="55,185 55,50 132,87 210,83 287,130 365,142 442,172 515,48 515,185"
                        fill="url(#recoveryGradient)"
                      />

                      {/* Drawdown Line (55,50 to 442,172) */}
                      <polyline
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        points="55,50 132,87 210,83 287,130 365,142 442,172"
                      />

                      {/* Full Polyline */}
                      <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="55,50 132,87 210,83 287,130 365,142 442,172 515,48"
                      />

                      {/* 2024 Q4 Peak */}
                      <circle cx="55" cy="50" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
                      <rect x="25" y="20" width="60" height="15" rx="3" fill="#FFFFFF" stroke="#E5E0D8" />
                      <text x="55" y="31" fontSize="8" fill="#111827" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        60.42%
                      </text>
                      <text x="55" y="202" fontSize="8" fill="#8D969E" textAnchor="middle" fontFamily="monospace">24 Q4</text>

                      {/* Intermediate Drawdown Nodes */}
                      <circle cx="132" cy="87" r="3.5" fill="#DC2626" />
                      <text x="132" y="202" fontSize="8" fill="#8D969E" textAnchor="middle" fontFamily="monospace">25 Q1</text>

                      <circle cx="210" cy="83" r="3.5" fill="#DC2626" />
                      <text x="210" y="202" fontSize="8" fill="#8D969E" textAnchor="middle" fontFamily="monospace">25 Q2</text>

                      <circle cx="287" cy="130" r="3.5" fill="#DC2626" />
                      <text x="287" y="202" fontSize="8" fill="#8D969E" textAnchor="middle" fontFamily="monospace">25 Q3</text>

                      <circle cx="365" cy="142" r="3.5" fill="#DC2626" />
                      <text x="365" y="202" fontSize="8" fill="#8D969E" textAnchor="middle" fontFamily="monospace">25 Q4</text>

                      {/* 2026 Q1 Trough */}
                      <circle cx="442" cy="172" r="5.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2.5" />
                      <rect x="408" y="142" width="68" height="15" rx="3" fill="#FEF2F2" stroke="#FECACA" />
                      <text x="442" y="153" fontSize="8" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        54.17% (-625bps)
                      </text>
                      <text x="442" y="202" fontSize="8" fill="#DC2626" textAnchor="middle" fontWeight="bold" fontFamily="monospace">26 Q1</text>

                      {/* 2026 Q2 Rebound Peak */}
                      <circle cx="515" cy="48" r="6" fill="#FFFFFF" stroke="#15803D" strokeWidth="3" />
                      <rect x="475" y="18" width="58" height="15" rx="3" fill="#E8F5E9" stroke="#C8E6C9" />
                      <text x="504" y="29" fontSize="8" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        60.52%
                      </text>
                      <text x="515" y="202" fontSize="8" fill="#15803D" textAnchor="middle" fontWeight="bold" fontFamily="monospace">26 Q2</text>

                      {/* Rebound Vector Indicator Arrow */}
                      <path d="M 465 130 Q 480 85 500 65" fill="none" stroke="#15803D" strokeWidth="1.5" strokeDasharray="2 2" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#505A63] pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <span>Margin Recovery:</span>
                    <strong className="text-[#15803D] font-mono font-bold">+635 bps</strong>
                    <span>({recovery.summary.drawdownBps} bps recoup in 1 quarter)</span>
                  </span>
                  <span className="font-mono text-[#111827] font-semibold text-[11px]">
                    Recovery vs. Drawdown: {recovery.summary.recoveryPercent}% (Above Previous Peak)
                  </span>
                </div>

                <div className="p-3 bg-[#FBF3DC] border border-[#F1DEC0] rounded-lg text-xs text-[#795900] leading-relaxed">
                  <strong>Analytical Summary:</strong> {recovery.strategicSummary}
                </div>
              </div>
            </FlippableCard>
          )}
        </div>
      )}

      {/* SUBMODULE 4: COST-SHOCK PASS-THROUGH (FLIPPABLE CARD) */}
      {(activeSubmodule === 'ALL' || activeSubmodule === 'TARIFF') && (
        <FlippableCard
          title="Submodule 4: Cost-Shock Pass-Through"
          subtitle="Evaluates gross-margin impact and recovery across 4 major cost-shock events"
          badgeText={`Score: ${tariff.score || tariff.submoduleScore} / 10 (${tariff.tier})`}
          badgeType="info"
          evidences={tariff.evidence}
        >
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Cost-Shock Event</th>
                    <th className="py-2.5 px-2 text-right">Pre-Shock Margin</th>
                    <th className="py-2.5 px-2 text-right">Trough Margin</th>
                    <th className="py-2.5 px-2 text-right">Recovery Margin</th>
                    <th className="py-2.5 px-3">Pass-Through Classification</th>
                    <th className="py-2.5 px-2 text-center">Reported Impact (bps)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                  {tariff.shocks.map((cycle, idx) => (
                    <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                      <td className="py-3 px-3 font-semibold text-[#111827] font-sans">
                        <div>{cycle.shockName}</div>
                        <div className="text-[10px] text-[#8D969E] font-mono">{cycle.onsetPeriod} ({cycle.natureOfShock})</div>
                      </td>
                      <td className="py-3 px-2 text-right text-[#505A63]">{cycle.preShockMarginPct}%</td>
                      <td className="py-3 px-2 text-right font-bold text-[#DC2626]">{cycle.troughMarginPct}%</td>
                      <td className="py-3 px-2 text-right font-bold text-[#15803D]">{cycle.recoveredMarginPct}%</td>
                      <td className="py-3 px-3 font-sans">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F1EEE7] text-[#111827] border border-[#E5E0D8]">
                          {cycle.passThroughClassification}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-[#111827]">
                        {cycle.reportedMagnitudeBps ? `${cycle.reportedMagnitudeBps} bps` : 'Not quantified'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs text-[#505A63] leading-relaxed">
              <strong>Analytical Summary:</strong> {tariff.strategicSummary}
            </div>
          </div>
        </FlippableCard>
      )}
    </div>
  );
};
