import React, { useState } from 'react';
import { LULU_RAW_DATA } from '../data/luluData.ts';
import { ScoreRing } from './ScoreRing.tsx';
import { ScoreBar } from './ScoreBar.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { FlippableCard } from './FlippableCard.tsx';
import { HelpCircle, Globe, Package, CheckCircle2 } from 'lucide-react';
import { WhyModalData } from './WhyModal.tsx';

interface StructuralVsCyclicalModuleProps {
  onOpenWhy: (data: WhyModalData) => void;
}

export const StructuralVsCyclicalModule: React.FC<StructuralVsCyclicalModuleProps> = ({ onOpenWhy }) => {
  const sData = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.ratio.investmentDebates.structuralVSCyclical;
  const metrics = sData.metrics;
  const insights = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.insights.investmentDebates.structuralVSCyclical;

  // Active view toggle for Geography vs Product Category in Weakness Breadth
  const [breadthView, setBreadthView] = useState<'geography' | 'product' | 'all'>('all');

  // 1. Margin Recovery Data
  const marginData = metrics.marginRecovery.periods;

  // 2. Revenue Growth Persistence Data
  const revenuePeriods = metrics.revenueGrowthPersistence.periods;

  // 3. Inventory-to-Sales Divergence Data
  const divergencePeriods = metrics.inventoryToSalesDivergence.periods;

  // 4. Weakness Breadth Data
  const geoData = metrics.weaknessBreadth.graphs.segmentWise.data;
  const productData = metrics.weaknessBreadth.graphs.productWise.data;

  // Clean evidence mappings directly from payload
  const marginEvidences = insights.marginRecovery.evidence.map(quote => ({ quote }));
  const revenueEvidences = insights.revenueGrowthPersistence.evidence.map(quote => ({ quote }));
  const inventoryEvidences = insights.inventoryToSalesDivergence.evidence.map(quote => ({ quote }));
  const breadthEvidences = insights.weaknessBreadth.evidence.map(quote => ({ quote }));

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. HERO SECTION & OVERALL SUMMARY */}
      <div className="p-6 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-6">
            <ScoreRing
              score={sData.finalScore}
              max={10}
              size={110}
              strokeWidth={8}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#795900] font-mono">
                  Investment Debate
                </span>
                <StatusBadge status={`${sData.category}: ${sData.finalScore} / 10`} size="xs" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight font-heading">
                Structural vs. Cyclical Score: {sData.finalScore} / 10
              </h2>
              <p className="text-xs text-[#505A63] max-w-3xl mt-1.5 leading-relaxed">
                {insights.overallSummary}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Evaluated Diagnostic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {/* Card 1: Margin Recovery */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg flex flex-col justify-between hover:border-[#D8D2C5] transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#111827]">Gross Margin Recovery</span>
                <span className="font-mono text-xs font-bold text-[#DC2626]">{metrics.marginRecovery.score.toFixed(1)} / 10</span>
              </div>
              <div className="text-[10px] text-[#795900] font-mono font-semibold">{metrics.marginRecovery.recoveryPercentage}% Recovery</div>
              <p className="text-[11px] text-[#505A63] mt-1.5 leading-snug">
                Gross margin reached 60.5% in Q2 FY26 following trough of 54.2% in Q1 FY26.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
              <div className="flex-1">
                <ScoreBar score={metrics.marginRecovery.score} max={10} height={5} showScoreText={false} />
              </div>
              <button
                type="button"
                onClick={() => onOpenWhy({
                  title: 'Gross Margin Recovery',
                  score: metrics.marginRecovery.score,
                  maxScore: 10,
                  tier: 'Limited Recovery',
                  classification: `Score: ${metrics.marginRecovery.score.toFixed(1)} / 10`,
                  keySignal: `${metrics.marginRecovery.recoveryPercentage}% Recovery from Trough`,
                  strategicSummary: insights.marginRecovery.summary,
                  evidence: marginEvidences.map(e => ({
                    module: 'Structural vs Cyclical',
                    submodule: 'Gross Margin Recovery',
                    quote: e.quote
                  }))
                })}
                className="text-[10px] font-semibold text-[#795900] hover:text-[#111827] flex items-center gap-0.5 shrink-0 px-2 py-0.5 rounded bg-[#FBF3DC] hover:bg-[#F3E5C3] border border-[#E8D7AA] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                Why?
              </button>
            </div>
          </div>

          {/* Card 2: Growth Persistence */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg flex flex-col justify-between hover:border-[#D8D2C5] transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#111827]">Revenue Growth Persistence</span>
                <span className="font-mono text-xs font-bold text-[#795900]">{metrics.revenueGrowthPersistence.score.toFixed(1)} / 10</span>
              </div>
              <div className="text-[10px] text-[#DC2626] font-mono font-semibold">Decelerated to -4.0% YoY</div>
              <p className="text-[11px] text-[#505A63] mt-1.5 leading-snug">
                Slowing from +12.68% (Q4 FY24) to -4.0% in Q2 FY26. Q3 guidance projects a 10% to 11% decline.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
              <div className="flex-1">
                <ScoreBar score={metrics.revenueGrowthPersistence.score} max={10} height={5} showScoreText={false} />
              </div>
              <button
                type="button"
                onClick={() => onOpenWhy({
                  title: 'Revenue Growth Persistence',
                  score: metrics.revenueGrowthPersistence.score,
                  maxScore: 10,
                  tier: 'Moderate Drag',
                  classification: `Score: ${metrics.revenueGrowthPersistence.score.toFixed(1)} / 10 · Weight: ${metrics.revenueGrowthPersistence.weightPct}%`,
                  keySignal: 'Decelerated to -4.0% YoY (Q3 Guidance -10% to -11%)',
                  strategicSummary: insights.revenueGrowthPersistence.summary,
                  evidence: revenueEvidences.map(e => ({
                    module: 'Structural vs Cyclical',
                    submodule: 'Revenue Growth Persistence',
                    quote: e.quote
                  }))
                })}
                className="text-[10px] font-semibold text-[#795900] hover:text-[#111827] flex items-center gap-0.5 shrink-0 px-2 py-0.5 rounded bg-[#FBF3DC] hover:bg-[#F3E5C3] border border-[#E8D7AA] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                Why?
              </button>
            </div>
          </div>

          {/* Card 3: Inventory Divergence */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg flex flex-col justify-between hover:border-[#D8D2C5] transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#111827]">Inventory Divergence</span>
                <span className="font-mono text-xs font-bold text-[#15803D]">{metrics.inventoryToSalesDivergence.score.toFixed(1)} / 10</span>
              </div>
              <div className="text-[10px] text-[#15803D] font-mono font-semibold">-3.0 pts Spread (Unit Basis)</div>
              <p className="text-[11px] text-[#505A63] mt-1.5 leading-snug">
                Inventory units fell -7% in Q2 FY26 vs -4% revenue, showing lean inventory alignment without excess glut.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
              <div className="flex-1">
                <ScoreBar score={metrics.inventoryToSalesDivergence.score} max={10} height={5} showScoreText={false} />
              </div>
              <button
                type="button"
                onClick={() => onOpenWhy({
                  title: 'Inventory-to-Sales Divergence',
                  score: metrics.inventoryToSalesDivergence.score,
                  maxScore: 10,
                  tier: 'Disciplined Inventory',
                  classification: `Score: ${metrics.inventoryToSalesDivergence.score.toFixed(1)} / 10 · Weight: ${metrics.inventoryToSalesDivergence.weightPct}%`,
                  keySignal: '-3.0 pts Spread (Unit Basis)',
                  strategicSummary: insights.inventoryToSalesDivergence.summary,
                  evidence: inventoryEvidences.map(e => ({
                    module: 'Structural vs Cyclical',
                    submodule: 'Inventory Divergence',
                    quote: e.quote
                  }))
                })}
                className="text-[10px] font-semibold text-[#795900] hover:text-[#111827] flex items-center gap-0.5 shrink-0 px-2 py-0.5 rounded bg-[#FBF3DC] hover:bg-[#F3E5C3] border border-[#E8D7AA] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                Why?
              </button>
            </div>
          </div>

          {/* Card 4: Weakness Breadth */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg flex flex-col justify-between hover:border-[#D8D2C5] transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#111827]">Weakness Breadth</span>
                <span className="font-mono text-xs font-bold text-[#DC2626]">{metrics.weaknessBreadth.score.toFixed(1)} / 10</span>
              </div>
              <div className="text-[10px] text-[#DC2626] font-mono font-semibold">{metrics.weaknessBreadth.metricValue}% Contracting</div>
              <p className="text-[11px] text-[#505A63] mt-1.5 leading-snug">
                7 of 9 monitored dimensions are negative, showing broad-based deceleration across regions and product lines.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
              <div className="flex-1">
                <ScoreBar score={metrics.weaknessBreadth.score} max={10} height={5} showScoreText={false} />
              </div>
              <button
                type="button"
                onClick={() => onOpenWhy({
                  title: 'Weakness Breadth Across Segments',
                  score: metrics.weaknessBreadth.score,
                  maxScore: 10,
                  tier: 'Broad Contraction',
                  classification: `Score: ${metrics.weaknessBreadth.score.toFixed(1)} / 10 · Weight: ${metrics.weaknessBreadth.weightPct}%`,
                  keySignal: `${metrics.weaknessBreadth.metricValue}% of Monitored Dimensions Contracting`,
                  strategicSummary: insights.weaknessBreadth.summary,
                  evidence: breadthEvidences.map(e => ({
                    module: 'Structural vs Cyclical',
                    submodule: 'Weakness Breadth',
                    quote: e.quote
                  }))
                })}
                className="text-[10px] font-semibold text-[#795900] hover:text-[#111827] flex items-center gap-0.5 shrink-0 px-2 py-0.5 rounded bg-[#FBF3DC] hover:bg-[#F3E5C3] border border-[#E8D7AA] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                Why?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VISUAL 1: GROSS MARGIN RECOVERY TRAJECTORY */}
      <FlippableCard
        title="Gross Margin Recovery Trajectory"
        subtitle="7-quarter gross margin progression"
        badgeText={`Score: ${metrics.marginRecovery.score.toFixed(1)} / 10`}
        badgeType="danger"
        evidences={marginEvidences}
      >
        <div className="space-y-5">
          {/* Chart Header & Legend */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E5E0D8]">
            <div>
              <span className="text-xs font-bold text-[#111827] font-heading">
                Quarterly Gross Margin Progression
              </span>
              <p className="text-[11px] text-[#505A63]">
                Peak-to-trough decline of 622 bps (60.42% → 54.20%), rebounding to 60.50% in Q2 FY26.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="text-[#111827] font-medium text-[11px]">Gross Margin %</span>
            </div>
          </div>

          {/* Side-by-Side: Graph (Left - 58%) & Table (Right - 42%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Line Chart */}
            <div className="lg:col-span-7 w-full h-80 sm:h-96 lg:h-[350px] bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-4 relative flex items-center justify-center">
              <svg viewBox="0 0 540 220" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                {/* Grid Lines */}
                <line x1="45" y1="30" x2="515" y2="30" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="38" y="34" fontSize="9.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="monospace">61.0%</text>

                <line x1="45" y1="75" x2="515" y2="75" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="38" y="79" fontSize="9.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="monospace">58.5%</text>

                <line x1="45" y1="120" x2="515" y2="120" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="38" y="124" fontSize="9.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="monospace">56.0%</text>

                <line x1="45" y1="165" x2="515" y2="165" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="38" y="169" fontSize="9.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="monospace">54.0%</text>

                {/* Reported trajectory path */}
                <polyline
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  points="60,41.2 135,81.3 210,78.2 285,134.7 360,148.2 435,161.1 500,39.6"
                />

                {/* Baseline points */}
                <circle cx="60" cy="41.2" r="4.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
                <circle cx="135" cy="81.3" r="4" fill="#10B981" />
                <circle cx="210" cy="78.2" r="4" fill="#10B981" />
                <circle cx="285" cy="134.7" r="4" fill="#10B981" />
                <circle cx="360" cy="148.2" r="4" fill="#10B981" />

                {/* Trough point Apr 2026 */}
                <circle cx="435" cy="161.1" r="6" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <text x="435" y="182" fontSize="9.5" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  Trough: 54.20%
                </text>

                {/* Reported point Jul 2026 */}
                <circle cx="500" cy="39.6" r="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
                <text x="500" y="26" fontSize="10" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  60.50%
                </text>

                {/* X Axis Labels */}
                <text x="60" y="196" fontSize="9" fill="#64748B" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2025-01-31</text>
                <text x="135" y="196" fontSize="9" fill="#64748B" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2025-04-30</text>
                <text x="210" y="196" fontSize="9" fill="#64748B" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2025-07-31</text>
                <text x="285" y="196" fontSize="9" fill="#64748B" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2025-10-31</text>
                <text x="360" y="196" fontSize="9" fill="#64748B" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2026-01-31</text>
                <text x="435" y="196" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="bold" fontFamily="monospace">2026-04-30</text>
                <text x="500" y="196" fontSize="9" fill="#111827" textAnchor="middle" fontWeight="bold" fontFamily="monospace">2026-07-31</text>
              </svg>
            </div>

            {/* Table */}
            <div className="lg:col-span-5 overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Period</th>
                    <th className="py-2.5 px-3 text-right">Gross Margin %</th>
                    <th className="py-2.5 px-3 text-right">Delta vs Peak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                  {marginData.map((item, idx) => {
                    const delta = (item.grossMargin - 60.42).toFixed(2);
                    return (
                      <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">{item.period}</td>
                        <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{item.grossMargin.toFixed(2)}%</td>
                        <td className={`py-2.5 px-3 text-right font-semibold ${
                          parseFloat(delta) >= 0 ? 'text-[#15803D]' : 'text-[#DC2626]'
                        }`}>
                          {parseFloat(delta) >= 0 ? `+${delta}%` : `${delta}%`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clean Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.marginRecovery.summary}
            </p>
          </div>
        </div>
      </FlippableCard>

      {/* 3. VISUAL 2: REVENUE GROWTH PERSISTENCE */}
      <FlippableCard
        title="Revenue Growth Persistence"
        subtitle="Quarterly net revenue YoY growth from Q4 FY24 to Q2 FY26"
        badgeText={`Score: ${metrics.revenueGrowthPersistence.score.toFixed(1)} / 10 · Weight: ${metrics.revenueGrowthPersistence.weightPct}%`}
        badgeType="warning"
        evidences={revenueEvidences}
      >
        <div className="space-y-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E5E0D8]">
            <div>
              <span className="text-xs font-bold text-[#111827] font-heading">
                YoY Net Revenue Growth Rate (%)
              </span>
              <p className="text-[11px] text-[#505A63]">
                Revenue growth transitioned from double-digit expansion to -4.0% in Q2 FY26.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] px-2.5 py-0.5 rounded-full">
                Q3 Guidance: -10% to -11%
              </span>
            </div>
          </div>

          {/* Side-by-Side: Graph (Left - 58%) & Table (Right - 42%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Bar Chart with Zero Axis */}
            <div className="lg:col-span-7 w-full h-80 sm:h-96 lg:h-[350px] bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-4 relative flex items-center justify-center">
              <svg viewBox="0 0 560 220" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                {/* Zero baseline at Y = 145 */}
                <line x1="40" y1="145" x2="535" y2="145" stroke="#111827" strokeWidth="1.75" />
                <text x="32" y="148" fontSize="9.5" fill="#111827" fontWeight="bold" textAnchor="end" fontFamily="monospace">0.0%</text>

                {/* Grid lines */}
                <line x1="40" y1="35" x2="535" y2="35" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="32" y="38" fontSize="9.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="monospace">+12.0%</text>

                <line x1="40" y1="90" x2="535" y2="90" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="32" y="93" fontSize="9.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="monospace">+6.0%</text>

                <line x1="40" y1="190" x2="535" y2="190" stroke="#E5E0D8" strokeDasharray="3 3" />
                <text x="32" y="193" fontSize="9.5" fill="#DC2626" fontWeight="bold" textAnchor="end" fontFamily="monospace">-6.0%</text>

                {/* Bar 1: Q4 FY24 */}
                <rect x="55" y="28.9" width="38" height="116.1" rx="4" fill="#15803D" />
                <text x="74" y="21" fontSize="9.5" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+12.7%</text>
                <text x="74" y="162" fontSize="8.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q4 FY24</text>

                {/* Bar 2: Q1 FY25 */}
                <rect x="115" y="78.0" width="38" height="67.0" rx="4" fill="#15803D" opacity="0.85" />
                <text x="134" y="70" fontSize="9.5" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+7.3%</text>
                <text x="134" y="162" fontSize="8.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q1 FY25</text>

                {/* Bar 3: Q2 FY25 */}
                <rect x="175" y="85.5" width="38" height="59.5" rx="4" fill="#795900" opacity="0.8" />
                <text x="194" y="77" fontSize="9.5" fill="#795900" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+6.5%</text>
                <text x="194" y="162" fontSize="8.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q2 FY25</text>

                {/* Bar 4: Q3 FY25 */}
                <rect x="235" y="80.3" width="38" height="64.7" rx="4" fill="#795900" opacity="0.8" />
                <text x="254" y="72" fontSize="9.5" fill="#795900" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+7.1%</text>
                <text x="254" y="162" fontSize="8.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q3 FY25</text>

                {/* Bar 5: Q4 FY25 */}
                <rect x="295" y="137.6" width="38" height="7.4" rx="2" fill="#D97706" />
                <text x="314" y="131" fontSize="9.5" fill="#D97706" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+0.8%</text>
                <text x="314" y="162" fontSize="8.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q4 FY25</text>

                {/* Bar 6: Q1 FY26 */}
                <rect x="355" y="108.4" width="38" height="36.6" rx="4" fill="#795900" opacity="0.8" />
                <text x="374" y="100" fontSize="9.5" fill="#795900" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+4.0%</text>
                <text x="374" y="162" fontSize="8.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q1 FY26</text>

                {/* Bar 7: Q2 FY26 */}
                <rect x="415" y="145" width="38" height="36.6" rx="4" fill="#DC2626" />
                <text x="434" y="194" fontSize="9" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-4.0%</text>
                <text x="434" y="136" fontSize="8" fill="#DC2626" fontWeight="bold" textAnchor="middle">Q2 FY26</text>

                {/* Bar 8: Q3 FY26 Guidance */}
                <rect x="475" y="145" width="38" height="58" rx="4" fill="#DC2626" opacity="0.3" stroke="#DC2626" strokeDasharray="3 3" />
                <text x="494" y="214" fontSize="8.5" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-10.5% Est.</text>
                <text x="494" y="136" fontSize="8" fill="#DC2626" fontWeight="bold" textAnchor="middle">Q3 Guidance</text>
              </svg>
            </div>

            {/* Revenue Growth Progression Table */}
            <div className="lg:col-span-5 overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Reporting Period</th>
                    <th className="py-2.5 px-3 text-right">YoY Revenue Growth %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                  {revenuePeriods.map((item, idx) => {
                    const isNegative = item.revenueYoyPct < 0;
                    return (
                      <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">{item.period}</td>
                        <td className={`py-2.5 px-3 text-right font-bold ${
                          isNegative ? 'text-[#DC2626]' : item.revenueYoyPct >= 10 ? 'text-[#15803D]' : 'text-[#795900]'
                        }`}>
                          {item.revenueYoyPct > 0 ? `+${item.revenueYoyPct.toFixed(2)}%` : `${item.revenueYoyPct.toFixed(2)}%`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clean Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.revenueGrowthPersistence.summary}
            </p>
          </div>
        </div>
      </FlippableCard>

      {/* 4. VISUAL 3: INVENTORY-TO-SALES DIVERGENCE */}
      <FlippableCard
        title="Inventory-to-Sales Divergence"
        subtitle="Inventory growth vs revenue growth across reporting quarters"
        badgeText={`Score: ${metrics.inventoryToSalesDivergence.score.toFixed(1)} / 10 · Weight: ${metrics.inventoryToSalesDivergence.weightPct}%`}
        badgeType="positive"
        evidences={inventoryEvidences}
      >
        <div className="space-y-5">
          {/* Header & Legend */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E5E0D8]">
            <div>
              <span className="text-xs font-bold text-[#111827] font-heading">
                Inventory vs. Revenue Growth Rate (%)
              </span>
              <p className="text-[11px] text-[#505A63]">
                Tracking inventory growth outpacing revenue (+17.13% peak) to disciplined unit contraction (-3.00% spread).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-[#2563EB]" />
                <span className="text-[#111827] font-medium text-[11px]">Inventory Growth %</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-[#F59E0B]" />
                <span className="text-[#111827] font-medium text-[11px]">Revenue Growth %</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-0.5 bg-[#166534] relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full border border-[#166534] bg-white inline-block" />
                </span>
                <span className="text-[#166534] font-medium text-[11px]">Divergence Spread</span>
              </div>
            </div>
          </div>

          {/* Side-by-Side: Graph (Left - 58%) & Table (Right - 42%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Combo Chart (Grouped Bars + Divergence Line with Value Pills) */}
            <div className="lg:col-span-7 w-full bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-4 relative shadow-2xs overflow-hidden flex items-center justify-center">
              <div className="w-full h-80 sm:h-96 lg:h-[350px]">
                <svg viewBox="0 0 700 295" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                  {/* Y-Axis Label */}
                  <text x="16" y="145" fontSize="11" fill="#505A63" fontWeight="bold" textAnchor="middle" transform="rotate(-90 16 145)">
                    Growth %
                  </text>

                  {/* Horizontal Grid Lines & Ticks */}
                  {/* +30% */}
                  <line x1="50" y1="40" x2="675" y2="40" stroke="#F1EEE7" strokeDasharray="3 3" />
                  <text x="44" y="43" fontSize="9" fill="#8D969E" textAnchor="end" fontFamily="monospace">30%</text>

                  {/* +20% */}
                  <line x1="50" y1="75" x2="675" y2="75" stroke="#F1EEE7" strokeDasharray="3 3" />
                  <text x="44" y="78" fontSize="9" fill="#8D969E" textAnchor="end" fontFamily="monospace">20%</text>

                  {/* +10% */}
                  <line x1="50" y1="110" x2="675" y2="110" stroke="#F1EEE7" strokeDasharray="3 3" />
                  <text x="44" y="113" fontSize="9" fill="#8D969E" textAnchor="end" fontFamily="monospace">10%</text>

                  {/* 0% Baseline */}
                  <line x1="50" y1="145" x2="675" y2="145" stroke="#D1D5DB" strokeWidth="1.5" />
                  <text x="44" y="148" fontSize="9.5" fill="#374151" fontWeight="bold" textAnchor="end" fontFamily="monospace">0%</text>

                  {/* -10% */}
                  <line x1="50" y1="180" x2="675" y2="180" stroke="#F1EEE7" strokeDasharray="3 3" />
                  <text x="44" y="183" fontSize="9" fill="#8D969E" textAnchor="end" fontFamily="monospace">-10%</text>

                  {/* -20% */}
                  <line x1="50" y1="215" x2="675" y2="215" stroke="#F1EEE7" strokeDasharray="3 3" />
                  <text x="44" y="218" fontSize="9" fill="#8D969E" textAnchor="end" fontFamily="monospace">-20%</text>

                  {/* Vertical Segment Divider Lines */}
                  <line x1="182" y1="35" x2="182" y2="235" stroke="#F3F0EA" strokeDasharray="2 2" />
                  <line x1="307" y1="35" x2="307" y2="235" stroke="#F3F0EA" strokeDasharray="2 2" />
                  <line x1="432" y1="35" x2="432" y2="235" stroke="#F3F0EA" strokeDasharray="2 2" />
                  <line x1="557" y1="35" x2="557" y2="235" stroke="#F3F0EA" strokeDasharray="2 2" />

                  {/* Shaded Area under Divergence Line */}
                  <polygon
                    points="120,145 120,95.9 245,131.42 370,85.05 495,173.0 620,155.5 620,145"
                    fill="#15803D"
                    opacity="0.07"
                  />

                  {/* --- PERIOD 1: Q2 FY25 (Center = 120) --- */}
                  {/* Blue Bar: 20.53% */}
                  <rect x="83" y="73.15" width="34" height="71.85" rx="3" fill="#2563EB" />
                  <text x="100" y="65" fontSize="9.5" fill="#1D4ED8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">20.53%</text>
                  {/* Orange Bar: 6.50% */}
                  <rect x="123" y="122.25" width="34" height="22.75" rx="3" fill="#F59E0B" />
                  <text x="140" y="114" fontSize="9.5" fill="#D97706" fontWeight="bold" textAnchor="middle" fontFamily="monospace">6.50%</text>

                  {/* --- PERIOD 2: Q3 FY25 (Center = 245) --- */}
                  {/* Blue Bar: 10.94% */}
                  <rect x="208" y="106.71" width="34" height="38.29" rx="3" fill="#2563EB" />
                  <text x="225" y="98" fontSize="9.5" fill="#1D4ED8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">10.94%</text>
                  {/* Orange Bar: 7.06% */}
                  <rect x="248" y="120.29" width="34" height="24.71" rx="3" fill="#F59E0B" />
                  <text x="265" y="112" fontSize="9.5" fill="#D97706" fontWeight="bold" textAnchor="middle" fontFamily="monospace">7.06%</text>

                  {/* --- PERIOD 3: Q4 FY25 (Center = 370) --- */}
                  {/* Blue Bar: 17.94% */}
                  <rect x="333" y="82.21" width="34" height="62.79" rx="3" fill="#2563EB" />
                  <text x="350" y="74" fontSize="9.5" fill="#1D4ED8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">17.94%</text>
                  {/* Orange Bar: 0.81% */}
                  <rect x="373" y="141.5" width="34" height="3.5" rx="1.5" fill="#F59E0B" />
                  <text x="390" y="133" fontSize="9.5" fill="#D97706" fontWeight="bold" textAnchor="middle" fontFamily="monospace">0.81%</text>

                  {/* --- PERIOD 4: Q1 FY26 (Center = 495) --- */}
                  {/* Blue Bar: -4.00% (negative) */}
                  <rect x="458" y="145" width="34" height="14" rx="3" fill="#2563EB" />
                  <text x="475" y="173" fontSize="9.5" fill="#1D4ED8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-4.00%</text>
                  {/* Orange Bar: +4.00% (positive) */}
                  <rect x="498" y="131" width="34" height="14" rx="3" fill="#F59E0B" />
                  <text x="515" y="122" fontSize="9.5" fill="#D97706" fontWeight="bold" textAnchor="middle" fontFamily="monospace">4.00%</text>

                  {/* --- PERIOD 5: Q2 FY26 (Center = 620) --- */}
                  {/* Blue Bar: -7.00% (negative) */}
                  <rect x="583" y="145" width="34" height="24.5" rx="3" fill="#2563EB" />
                  <text x="600" y="184" fontSize="9.5" fill="#1D4ED8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-7.00%</text>
                  {/* Orange Bar: -4.00% (negative) */}
                  <rect x="623" y="145" width="34" height="14" rx="3" fill="#F59E0B" />
                  <text x="640" y="173" fontSize="9.5" fill="#D97706" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-4.00%</text>

                  {/* Divergence Line */}
                  <polyline
                    points="120,95.9 245,131.42 370,85.05 495,173.0 620,155.5"
                    stroke="#15803D"
                    strokeWidth="2.75"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Divergence Nodes (White circle with dark green border) */}
                  {/* Node 1: Q2 FY25 (120, 95.9) */}
                  <circle cx="120" cy="95.9" r="5" fill="#FFFFFF" stroke="#15803D" strokeWidth="2.5" />
                  <circle cx="120" cy="95.9" r="2" fill="#15803D" />
                  {/* Pill 1: 14.03% */}
                  <g transform="translate(130, 71)">
                    <rect x="0" y="0" width="50" height="18" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
                    <text x="25" y="12.5" fontSize="9" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">14.03%</text>
                  </g>

                  {/* Node 2: Q3 FY25 (245, 131.42) */}
                  <circle cx="245" cy="131.42" r="5" fill="#FFFFFF" stroke="#15803D" strokeWidth="2.5" />
                  <circle cx="245" cy="131.42" r="2" fill="#15803D" />
                  {/* Pill 2: 3.88% (below node) */}
                  <g transform="translate(224, 144)">
                    <rect x="0" y="0" width="44" height="18" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
                    <text x="22" y="12.5" fontSize="9" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">3.88%</text>
                  </g>

                  {/* Node 3: Q4 FY25 (370, 85.05) */}
                  <circle cx="370" cy="85.05" r="5" fill="#FFFFFF" stroke="#15803D" strokeWidth="2.5" />
                  <circle cx="370" cy="85.05" r="2" fill="#15803D" />
                  {/* Pill 3: 17.13% */}
                  <g transform="translate(378, 61)">
                    <rect x="0" y="0" width="50" height="18" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
                    <text x="25" y="12.5" fontSize="9" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="monospace">17.13%</text>
                  </g>

                  {/* Node 4: Q1 FY26 (495, 173.0) */}
                  <circle cx="495" cy="173.0" r="5" fill="#FFFFFF" stroke="#15803D" strokeWidth="2.5" />
                  <circle cx="495" cy="173.0" r="2" fill="#15803D" />
                  {/* Pill 4: -8.00% (below node) */}
                  <g transform="translate(472, 185)">
                    <rect x="0" y="0" width="48" height="18" rx="4" fill="#DCFCE7" stroke="#BBF7D0" strokeWidth="1" />
                    <text x="24" y="12.5" fontSize="9" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-8.00%</text>
                  </g>

                  {/* Node 5: Q2 FY26 (620, 155.5) */}
                  <circle cx="620" cy="155.5" r="5" fill="#FFFFFF" stroke="#15803D" strokeWidth="2.5" />
                  <circle cx="620" cy="155.5" r="2" fill="#15803D" />
                  {/* Pill 5: -3.00% (below/right of node) */}
                  <g transform="translate(606, 175)">
                    <rect x="0" y="0" width="48" height="18" rx="4" fill="#DCFCE7" stroke="#BBF7D0" strokeWidth="1" />
                    <text x="24" y="12.5" fontSize="9" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-3.00%</text>
                  </g>

                  {/* X-Axis Period Labels */}
                  <text x="120" y="258" fontSize="10.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q2 FY25</text>
                  <text x="120" y="272" fontSize="9" fill="#8D969E" textAnchor="middle" fontFamily="monospace">(2025-07-31)</text>

                  <text x="245" y="258" fontSize="10.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q3 FY25</text>
                  <text x="245" y="272" fontSize="9" fill="#8D969E" textAnchor="middle" fontFamily="monospace">(2025-10-31)</text>

                  <text x="370" y="258" fontSize="10.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q4 FY25</text>
                  <text x="370" y="272" fontSize="9" fill="#8D969E" textAnchor="middle" fontFamily="monospace">(2026-01-31)</text>

                  <text x="495" y="258" fontSize="10.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q1 FY26</text>
                  <text x="495" y="272" fontSize="9" fill="#8D969E" textAnchor="middle" fontFamily="monospace">(2026-04-30)</text>

                  <text x="620" y="258" fontSize="10.5" fill="#111827" fontWeight="bold" textAnchor="middle">Q2 FY26</text>
                  <text x="620" y="272" fontSize="9" fill="#8D969E" textAnchor="middle" fontFamily="monospace">(2026-07-31)</text>
                </svg>
              </div>
            </div>

            {/* Inventory Divergence Progression Table */}
            <div className="lg:col-span-5 overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Period</th>
                    <th className="py-2.5 px-3 text-right">Inventory %</th>
                    <th className="py-2.5 px-3 text-right">Revenue %</th>
                    <th className="py-2.5 px-3 text-right">Divergence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                  {divergencePeriods.map((dp, idx) => {
                    const isLean = dp.divergencePct < 0;
                    return (
                      <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">{dp.period}</td>
                        <td className={`py-2.5 px-3 text-right font-bold ${
                          dp.inventoryGrowthPct < 0 ? 'text-[#1D4ED8]' : 'text-[#111827]'
                        }`}>
                          {dp.inventoryGrowthPct > 0 ? `+${dp.inventoryGrowthPct}%` : `${dp.inventoryGrowthPct}%`}
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold text-[#D97706]">
                          {dp.revenueGrowthPct > 0 ? `+${dp.revenueGrowthPct}%` : `${dp.revenueGrowthPct}%`}
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                            isLean ? 'bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]' : 'bg-[#FEF2F2] text-[#DC2626] border border-[#FECACA]'
                          }`}>
                            {dp.divergencePct > 0 ? `+${dp.divergencePct}%` : `${dp.divergencePct}%`}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clean Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.inventoryToSalesDivergence.summary}
            </p>
          </div>
        </div>
      </FlippableCard>

      {/* 5. VISUAL 4: WEAKNESS BREADTH */}
      <FlippableCard
        title="Weakness Breadth"
        subtitle="Revenue growth comparison across geography and product categories"
        badgeText={`Score: ${metrics.weaknessBreadth.score.toFixed(1)} / 10 · Weight: ${metrics.weaknessBreadth.weightPct}%`}
        badgeType="danger"
        evidences={breadthEvidences}
        extraHeaderActions={
          <div className="flex items-center gap-1 bg-[#F1EEE7] p-0.5 rounded-full border border-[#E5E0D8]">
            {(['all', 'geography', 'product'] as const).map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setBreadthView(view)}
                className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full transition-colors cursor-pointer ${
                  breadthView === view
                    ? 'bg-[#1F242F] text-white shadow-xs'
                    : 'text-[#505A63] hover:text-[#111827]'
                }`}
              >
                {view === 'all' ? 'All' : view === 'geography' ? 'Geography' : 'Product'}
              </button>
            ))}
          </div>
        }
      >
        <div className="space-y-6">
          {/* Sub-view: Geography Chart */}
          {(breadthView === 'geography' || breadthView === 'all') && (
            <div className="bg-white border border-[#E5E0D8] rounded-xl p-4 sm:p-5 shadow-2xs space-y-4">
              {/* Header & Legend identical to reference */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E0D8]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#D97706]/30 bg-[#FFFBEB] flex items-center justify-center shrink-0">
                    <Globe className="w-4.5 h-4.5 text-[#854D0E]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight">
                      {metrics.weaknessBreadth.graphs.segmentWise.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#64748B]">
                      {metrics.weaknessBreadth.graphs.segmentWise.unit}
                    </p>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] inline-block" />
                    <span className="text-[#64748B] font-semibold text-xs">FY2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0F172A] inline-block" />
                    <span className="text-[#0F172A] font-bold text-xs">FY2026</span>
                  </div>
                </div>
              </div>

              {/* Side-by-Side: Graph (Left - 58%) & Table (Right - 42%) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* SVG Grouped Bar Chart (Exact Replica of Reference Design) */}
                <div className="lg:col-span-7 w-full h-80 sm:h-96 lg:h-[350px] overflow-hidden flex items-center justify-center bg-[#F8FAFC]/50 rounded-xl p-3 border border-[#F1F5F9]">
                  <svg viewBox="0 0 680 270" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                    {/* Horizontal Gridlines */}
                    {/* 200% */}
                    <line x1="55" y1="35" x2="655" y2="35" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="39" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">200%</text>

                    {/* 150% */}
                    <line x1="55" y1="72" x2="655" y2="72" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="76" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">150%</text>

                    {/* 100% */}
                    <line x1="55" y1="109" x2="655" y2="109" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="113" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">100%</text>

                    {/* 50% */}
                    <line x1="55" y1="146" x2="655" y2="146" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="150" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">50%</text>

                    {/* 0% Baseline */}
                    <line x1="55" y1="183" x2="655" y2="183" stroke="#94A3B8" strokeWidth="1.5" />
                    <text x="46" y="187" fontSize="10.5" fill="#0F172A" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">0%</text>

                    {/* -50% */}
                    <line x1="55" y1="220" x2="655" y2="220" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="224" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">-50%</text>

                    {/* Vertical Column Separators */}
                    <line x1="210" y1="30" x2="210" y2="230" stroke="#F1F5F9" strokeDasharray="2 2" />
                    <line x1="360" y1="30" x2="360" y2="230" stroke="#F1F5F9" strokeDasharray="2 2" />
                    <line x1="510" y1="30" x2="510" y2="230" stroke="#F1F5F9" strokeDasharray="2 2" />

                    {/* GROUP 1: United States (Center: 135) */}
                    {/* FY2025: -2.39% (soft pinkish-red) */}
                    <rect x="96" y="183" width="36" height="5" rx="2" fill="#FCA5A5" />
                    <text x="114" y="202" fontSize="11" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-2.39%</text>
                    {/* FY2026: -8% (solid red) */}
                    <rect x="138" y="183" width="36" height="10" rx="3" fill="#EF4444" />
                    <text x="156" y="210" fontSize="11" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-8%</text>
                    <text x="135" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">United States</text>

                    {/* GROUP 2: Canada (Center: 285) */}
                    {/* FY2025: +0.81% (soft light green) */}
                    <rect x="246" y="179" width="36" height="4" rx="2" fill="#86EFAC" />
                    <text x="264" y="172" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+0.81%</text>
                    {/* FY2026: -11% (solid red) */}
                    <rect x="288" y="183" width="36" height="13" rx="3" fill="#EF4444" />
                    <text x="306" y="213" fontSize="11" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-11%</text>
                    <text x="285" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Canada</text>

                    {/* GROUP 3: China Mainland (Center: 435) */}
                    {/* FY2025: +140.6% (tall vibrant green bar) */}
                    <rect x="396" y="79" width="36" height="104" rx="5" fill="#52B788" />
                    <text x="414" y="70" fontSize="11.5" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+140.6%</text>
                    {/* FY2026: +4% (solid green) */}
                    <rect x="438" y="177" width="36" height="6" rx="2" fill="#15803D" />
                    <text x="456" y="170" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+4%</text>
                    <text x="435" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">China Mainland</text>

                    {/* GROUP 4: Rest of World (Center: 585) */}
                    {/* FY2025: +16.37% (green bar) */}
                    <rect x="546" y="170.9" width="36" height="12.1" rx="3" fill="#52B788" />
                    <text x="564" y="163" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+16.37%</text>
                    {/* FY2026: +5% (solid green) */}
                    <rect x="588" y="177" width="36" height="6" rx="2" fill="#15803D" />
                    <text x="606" y="170" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+5%</text>
                    <text x="585" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Rest of World</text>
                  </svg>
                </div>

                {/* Geographic Performance Table */}
                <div className="lg:col-span-5 overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                        <th className="py-2.5 px-2.5">Region</th>
                        <th className="py-2.5 px-2.5 text-right">FY25 %</th>
                        <th className="py-2.5 px-2.5 text-right">FY26 %</th>
                        <th className="py-2.5 px-2.5 text-right">YoY Delta</th>
                        <th className="py-2.5 px-2.5 text-center">Trajectory</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                      {Object.entries(geoData).map(([region, values]: [string, any]) => {
                        const delta = values.FY2026 - values.FY2025;
                        const isNegative = values.FY2026 < 0;
                        return (
                          <tr key={region} className="hover:bg-[#FBF9F5] transition-colors">
                            <td className="py-2.5 px-2.5 font-semibold text-[#111827] font-sans text-xs">{region}</td>
                            <td className={`py-2.5 px-2.5 text-right font-bold ${values.FY2025 >= 0 ? 'text-[#15803D]' : 'text-[#DC2626]'}`}>
                              {values.FY2025 > 0 ? `+${values.FY2025}%` : `${values.FY2025}%`}
                            </td>
                            <td className={`py-2.5 px-2.5 text-right font-bold ${isNegative ? 'text-[#DC2626]' : 'text-[#15803D]'}`}>
                              {values.FY2026 > 0 ? `+${values.FY2026}%` : `${values.FY2026}%`}
                            </td>
                            <td className={`py-2.5 px-2.5 text-right font-bold ${delta >= 0 ? 'text-[#15803D]' : 'text-[#DC2626]'}`}>
                              {delta > 0 ? `+${delta.toFixed(2)}%` : `${delta.toFixed(2)}%`}
                            </td>
                            <td className="py-2.5 px-2.5 text-center font-sans">
                              {isNegative ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FEF2F2] text-[#DC2626] border border-[#FECACA]">
                                  Contraction
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
                                  Buffer
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Sub-view: Product Category Chart */}
          {(breadthView === 'product' || breadthView === 'all') && (
            <div className="bg-white border border-[#E5E0D8] rounded-xl p-4 sm:p-5 shadow-2xs space-y-4">
              {/* Header & Legend identical to reference */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E0D8]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#D97706]/30 bg-[#FFFBEB] flex items-center justify-center shrink-0">
                    <Package className="w-4.5 h-4.5 text-[#854D0E]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight">
                      {metrics.weaknessBreadth.graphs.productWise.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#64748B]">
                      {metrics.weaknessBreadth.graphs.productWise.unit}
                    </p>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#93C5FD] bg-[#EFF6FF] inline-block" />
                    <span className="text-[#64748B] font-semibold text-xs">FY2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0F172A] inline-block" />
                    <span className="text-[#0F172A] font-bold text-xs">FY2026</span>
                  </div>
                </div>
              </div>

              {/* Side-by-Side: Graph (Left - 58%) & Table (Right - 42%) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* SVG Grouped Bar Chart for Product Category */}
                <div className="lg:col-span-7 w-full h-80 sm:h-96 lg:h-[350px] overflow-hidden flex items-center justify-center bg-[#F8FAFC]/50 rounded-xl p-3 border border-[#F1F5F9]">
                  <svg viewBox="0 0 680 270" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                    {/* Horizontal Gridlines */}
                    {/* +15% */}
                    <line x1="55" y1="35" x2="655" y2="35" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="39" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">15%</text>

                    {/* +10% */}
                    <line x1="55" y1="67" x2="655" y2="67" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="71" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">10%</text>

                    {/* +5% */}
                    <line x1="55" y1="99" x2="655" y2="99" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="103" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">5%</text>

                    {/* 0% Baseline */}
                    <line x1="55" y1="131" x2="655" y2="131" stroke="#94A3B8" strokeWidth="1.5" />
                    <text x="46" y="135" fontSize="10.5" fill="#0F172A" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">0%</text>

                    {/* -5% */}
                    <line x1="55" y1="163" x2="655" y2="163" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="167" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">-5%</text>

                    {/* -10% */}
                    <line x1="55" y1="195" x2="655" y2="195" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="199" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">-10%</text>

                    {/* -15% */}
                    <line x1="55" y1="227" x2="655" y2="227" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <text x="46" y="231" fontSize="10.5" fill="#64748B" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">-15%</text>

                    {/* Vertical Column Separators */}
                    <line x1="256" y1="30" x2="256" y2="235" stroke="#F1F5F9" strokeDasharray="2 2" />
                    <line x1="458" y1="30" x2="458" y2="235" stroke="#F1F5F9" strokeDasharray="2 2" />

                    {/* GROUP 1: Mens (Center: 156) */}
                    {/* FY2025: +4.13% (green bar) */}
                    <rect x="110" y="104.6" width="42" height="26.4" rx="4" fill="#52B788" />
                    <text x="131" y="95" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+4.13%</text>
                    {/* FY2026: -1% (solid red) */}
                    <rect x="160" y="131" width="42" height="6.4" rx="2" fill="#EF4444" />
                    <text x="181" y="152" fontSize="11" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-1%</text>
                    <text x="156" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Mens</text>

                    {/* GROUP 2: Womens (Center: 357) */}
                    {/* FY2025: +4.52% (green bar) */}
                    <rect x="311" y="102.1" width="42" height="28.9" rx="4" fill="#52B788" />
                    <text x="332" y="93" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+4.52%</text>
                    {/* FY2026: -4% (solid red) */}
                    <rect x="361" y="131" width="42" height="25.6" rx="4" fill="#EF4444" />
                    <text x="382" y="172" fontSize="11" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-4%</text>
                    <text x="357" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Womens</text>

                    {/* GROUP 3: Accessories & Other (Center: 559) */}
                    {/* FY2025: +7.94% (green bar) */}
                    <rect x="513" y="80.2" width="42" height="50.8" rx="4" fill="#52B788" />
                    <text x="534" y="71" fontSize="11" fill="#15803D" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">+7.94%</text>
                    {/* FY2026: -13% (solid red) */}
                    <rect x="563" y="131" width="42" height="83.2" rx="4" fill="#EF4444" />
                    <text x="584" y="228" fontSize="11" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-13%</text>
                    <text x="559" y="254" fontSize="12" fill="#0F172A" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Accessories & Other</text>
                  </svg>
                </div>

                {/* Product Performance Table */}
                <div className="lg:col-span-5 overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                        <th className="py-2.5 px-2.5">Category</th>
                        <th className="py-2.5 px-2.5 text-right">FY25 %</th>
                        <th className="py-2.5 px-2.5 text-right">FY26 %</th>
                        <th className="py-2.5 px-2.5 text-right">YoY Delta</th>
                        <th className="py-2.5 px-2.5 text-center">Trajectory</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                      {Object.entries(productData).map(([cat, values]: [string, any]) => {
                        const delta = values.FY2026 - values.FY2025;
                        const isNegative = values.FY2026 < 0;
                        return (
                          <tr key={cat} className="hover:bg-[#FBF9F5] transition-colors">
                            <td className="py-2.5 px-2.5 font-semibold text-[#111827] font-sans text-xs">{cat}</td>
                            <td className="py-2.5 px-2.5 text-right font-bold text-[#15803D]">
                              +{values.FY2025}%
                            </td>
                            <td className="py-2.5 px-2.5 text-right font-bold text-[#DC2626]">
                              {values.FY2026}%
                            </td>
                            <td className={`py-2.5 px-2.5 text-right font-bold ${delta >= 0 ? 'text-[#15803D]' : 'text-[#DC2626]'}`}>
                              {delta > 0 ? `+${delta.toFixed(2)}%` : `${delta.toFixed(2)}%`}
                            </td>
                            <td className="py-2.5 px-2.5 text-center font-sans">
                              {isNegative ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FEF2F2] text-[#DC2626] border border-[#FECACA]">
                                  Contraction
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
                                  Expansion
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Clean Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.weaknessBreadth.summary}
            </p>
          </div>
        </div>
      </FlippableCard>
    </div>
  );
};
