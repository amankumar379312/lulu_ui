import React from 'react';
import { LULU_RAW_DATA } from '../data/luluData.ts';
import { ScoreRing } from './ScoreRing.tsx';
import { ScoreBar } from './ScoreBar.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { FlippableCard } from './FlippableCard.tsx';
import { 
  ShieldCheck, HelpCircle, Activity, Wallet, BarChart3,
  TrendingDown, DollarSign, Layers, Clock, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { WhyModalData } from './WhyModal.tsx';

interface DownsideFloorModuleProps {
  onOpenWhy: (data: WhyModalData) => void;
}

export const DownsideFloorModule: React.FC<DownsideFloorModuleProps> = ({ onOpenWhy }) => {
  const dData = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.ratio.investmentDebates.downSideFloor;
  const metrics = dData.metrics;
  const valuation = metrics.valuationSupport;
  const earnings = metrics.earningsResilience;
  const bs = metrics.balanceSheetLiquidityCapitalAllocation;
  const historical = metrics.historicalDownsideBehavior;
  const insights = LULU_RAW_DATA.modules.structuralVsCyclicalDownside.insights.investmentDebates.downSideFloor;

  // Evidence items for flip cards (derived strictly from SEC disclosures and official notes)
  const valuationEvidences = [
    {
      source: 'FY2025 Form 10-K & FY2026 Guidance',
      quote: 'Diluted EPS was $13.26 in FY25. Guidance EPS for FY26 is $9.45 to $9.61. Anchoring against LULU\'s historical trough P/E multiple of 14.5x implies a fundamental valuation floor of $137.46 based on low-end guidance.',
      context: 'Valuation Multiple Floor & Support'
    },
    {
      source: 'SEC Filing Multiple Benchmarks',
      quote: 'Forward earnings multiple of 17.17x and reported P/E of 12.44x trade at a 46% to 61% discount against the 10-year historical median of 32.0x. EV/EBITDA of 11.4x compares to a 19.5x benchmark median.',
      context: 'Historical Median Multiple Compression'
    }
  ];

  const earningsEvidences = [
    {
      source: 'Q2 FY26 Earnings Release & 10-Q',
      quote: 'Net revenue declined 4.0% YoY in Q2 FY26 while gross margins retained 92.65% of baseline levels (54.2% trough vs 58.5% baseline). Forward EPS retention remains high at 71.5%.',
      context: 'Revenue & Gross Margin Retention'
    },
    {
      source: 'Gross Margin Reconciliation Note',
      quote: 'Reported gross margin of 60.5% in Q2 FY26 benefited from one-time IEEPA tariff refunds. Excluding the non-recurring tariff benefit, underlying operational GM recovery was 16.28% from the trough.',
      context: 'Operational Margin Resilience'
    }
  ];

  const balanceSheetEvidences = [
    {
      source: 'FY2025 Form 10-K Balance Sheet & Note 8 (Leases)',
      quote: 'Cash and cash equivalents were $1,389.7M with zero funded borrowings. Operating lease liabilities under ASC 842 total $2.141B, resulting in a net lease obligation of -$751M.',
      context: 'Unlevered Funded Position & Lease Profile'
    },
    {
      source: 'Liquidity & Working Capital Disclosure',
      quote: 'Current ratio stands at 2.19x ($3,945.6M current assets vs $1,801.7M current liabilities), with quick ratio at 0.87x and lease coverage ratio at 7.02x.',
      context: 'Short-Term Liquidity & Solvency'
    }
  ];

  const historicalEvidences = [
    {
      source: 'Historical Stress Cycle Analysis',
      quote: 'Historical market drawdowns averaged -66.53% across completed stress cycles, taking 18 to 20 months to recover. Underlying EPS drawdowns were contained at -28.51%, confirming price volatility was far more severe than actual business erosion.',
      context: 'Historical Rebound Horizons'
    },
    {
      source: 'Current Cycle Drawdown Tracking',
      quote: 'Maximum stock drawdown in the ongoing cycle is -68.05% ($516.39 peak to $165.00 current). Valuation recovery post-trough historically completed in 16.5 months.',
      context: 'Peak-to-Trough Cycle Magnitude'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. DOWNSIDE FLOOR HERO BANNER */}
      <div className="p-6 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-6">
            <ScoreRing
              score={dData.finalScore}
              max={10}
              size={110}
              strokeWidth={8}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#795900] font-mono">
                  Downside Protection Assessment
                </span>
                <StatusBadge status={`${dData.category}: ${dData.finalScore.toFixed(1)} / 10`} size="xs" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight font-heading">
                Downside Floor Score: {dData.finalScore.toFixed(1)} / 10
              </h2>
              <p className="text-xs text-[#505A63] max-w-3xl mt-1 leading-relaxed">
                {insights.overallSummary}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenWhy({
              title: 'Downside Floor Assessment',
              score: dData.finalScore,
              maxScore: 10,
              tier: dData.category,
              classification: `Score: ${dData.finalScore.toFixed(1)} / 10 · ${dData.category}`,
              keySignal: 'Valuation multiple cushion (17.17x vs 32.0x) + $1.39B net cash balance sheet',
              strategicSummary: insights.overallSummary,
              evidence: [
                ...valuationEvidences,
                ...earningsEvidences,
                ...balanceSheetEvidences,
                ...historicalEvidences
              ].map(e => ({
                module: 'Downside Floor',
                submodule: e.context,
                quote: e.quote
              }))
            })}
            className="self-start lg:self-center px-4 py-2 text-xs font-semibold text-[#795900] hover:text-[#111827] bg-[#FBF3DC] hover:bg-[#F3E5C3] border border-[#E8D7AA] rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs shrink-0 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Why Downside Floor?</span>
          </button>
        </div>

        {/* 4 Evaluated Downside Subscore Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {/* Card 1: Valuation Support */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-[#111827]">Valuation Support</span>
                <span className="font-mono text-[#15803D] font-bold">{valuation.score.toFixed(2)} / 10</span>
              </div>
              <p className="text-[11px] text-[#505A63] mb-3 leading-snug">
                Forward P/E 17.17x vs 32.0x median (53.7% ratio), with $137.46 fundamental trough floor.
              </p>
            </div>
            <ScoreBar score={valuation.score} max={10} height={5} showScoreText={false} />
          </div>

          {/* Card 2: Earnings Resilience */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-[#111827]">Earnings Resilience</span>
                <span className="font-mono text-[#111827] font-bold">{earnings.score.toFixed(2)} / 10</span>
              </div>
              <p className="text-[11px] text-[#505A63] mb-3 leading-snug">
                Gross margin retains 92.65% of baseline (54.2% trough); forward EPS retention is 71.5%.
              </p>
            </div>
            <ScoreBar score={earnings.score} max={10} height={5} showScoreText={false} />
          </div>

          {/* Card 3: Balance Sheet & Liquidity */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-[#111827]">Balance Sheet & Liquidity</span>
                <span className="font-mono text-[#15803D] font-bold">{bs.score.toFixed(2)} / 10</span>
              </div>
              <p className="text-[11px] text-[#505A63] mb-3 leading-snug">
                $1.39B cash cushion, zero funded borrowings, 2.19x current ratio, 7.02x lease coverage.
              </p>
            </div>
            <ScoreBar score={bs.score} max={10} height={5} showScoreText={false} />
          </div>

          {/* Card 4: Historical Downside Behavior */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-[#111827]">Historical Behavior (15%)</span>
                <span className="font-mono text-[#795900] font-bold">{historical.score.toFixed(2)} / 10</span>
              </div>
              <p className="text-[11px] text-[#505A63] mb-3 leading-snug">
                Avg completed drawdown of -66.53%, with 18-20 month full post-trough equity recoveries.
              </p>
            </div>
            <ScoreBar score={historical.score} max={10} height={5} showScoreText={false} />
          </div>
        </div>
      </div>

      {/* 2. SUBMODULE 1: VALUATION SUPPORT */}
      <FlippableCard
        title="Submodule 1: Valuation Support & Implied Multiple Floor"
        subtitle="Multiple compression analysis vs 10-year medians, EV/EBITDA, and fundamental trough price floor"
        badgeText={`Score: ${valuation.score.toFixed(2)} / 10`}
        badgeType="positive"
        evidences={valuationEvidences}
      >
        <div className="space-y-5">
          {/* Valuation Multiples Table */}
          <div className="overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Multiple Metric</th>
                  <th className="py-2.5 px-3">Period / Basis</th>
                  <th className="py-2.5 px-3 text-right">Current Value</th>
                  <th className="py-2.5 px-3 text-right">Benchmark Median</th>
                  <th className="py-2.5 px-3 text-right">Ratio % / Discount</th>
                  <th className="py-2.5 px-3 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                {/* 1. Forward P/E */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Forward P/E Multiple</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{valuation.metrics.forwardEarningsMultiple.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{valuation.metrics.forwardEarningsMultiple.value}x</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{valuation.metrics.forwardEarningsMultiple.benchmarkMedian}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">
                    {valuation.metrics.forwardEarningsMultiple.ratioPct}% (-{(100 - valuation.metrics.forwardEarningsMultiple.ratioPct).toFixed(1)}%)
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{valuation.metrics.forwardEarningsMultiple.score}/10</td>
                </tr>

                {/* 2. Historical P/E */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">
                    Historical P/E Multiple
                    <span className="block text-[10px] text-[#8D969E] font-normal">FY25 EPS: ${valuation.metrics.historicalEarningsMultiple.fy25Eps}</span>
                  </td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{valuation.metrics.historicalEarningsMultiple.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{valuation.metrics.historicalEarningsMultiple.value}x</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{valuation.metrics.historicalEarningsMultiple.benchmarkMedian}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">
                    {valuation.metrics.historicalEarningsMultiple.ratioPct}% (-{(100 - valuation.metrics.historicalEarningsMultiple.ratioPct).toFixed(1)}%)
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{valuation.metrics.historicalEarningsMultiple.score}/10</td>
                </tr>

                {/* 3. EV / TTM EBITDA */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">
                    EV / TTM EBITDA
                    <span className="block text-[10px] text-[#8D969E] font-normal">
                      EV: ${valuation.metrics.enterpriseValueEbitda.enterpriseValueB}B (MCap ${valuation.metrics.enterpriseValueEbitda.marketCapB}B - Cash ${valuation.metrics.enterpriseValueEbitda.cashB}B + Leases ${valuation.metrics.enterpriseValueEbitda.leaseLiabilitiesB}B) · EBITDA: ${valuation.metrics.enterpriseValueEbitda.ttmEbitdaB}B
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{valuation.metrics.enterpriseValueEbitda.formula}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{valuation.metrics.enterpriseValueEbitda.value}x</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{valuation.metrics.enterpriseValueEbitda.benchmarkMedian}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">
                    {valuation.metrics.enterpriseValueEbitda.ratioPct}% (-{(100 - valuation.metrics.enterpriseValueEbitda.ratioPct).toFixed(1)}%)
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{valuation.metrics.enterpriseValueEbitda.score}/10</td>
                </tr>

                {/* 4. Historical Trough Valuation */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Historical Trough Multiple</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Current / Trough Ratio: {valuation.metrics.historicalTroughValuation.currentToTroughRatio}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{valuation.metrics.historicalTroughValuation.value}x</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">—</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">Trough Baseline</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{valuation.metrics.historicalTroughValuation.score}/10</td>
                </tr>

                {/* 5. Distance to Trough */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Distance to Valuation Trough</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Spread to 14.5x Trough Multiple</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{valuation.metrics.distanceToValuationTrough.distancePct}%</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">—</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">Buffer Above Trough</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{valuation.metrics.distanceToValuationTrough.score}/10</td>
                </tr>

                {/* 6. P / Free Cash Flow */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">
                    P / Free Cash Flow
                    <span className="block text-[10px] text-[#8D969E] font-normal">MCap: ${valuation.metrics.priceFreeCashFlow.marketCapB}B · FY25 FCF: ${valuation.metrics.priceFreeCashFlow.fy25FcfM}M</span>
                  </td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{valuation.metrics.priceFreeCashFlow.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{valuation.metrics.priceFreeCashFlow.value}x</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{valuation.metrics.priceFreeCashFlow.benchmarkMedian}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">
                    {valuation.metrics.priceFreeCashFlow.ratioPct}% (-{(100 - valuation.metrics.priceFreeCashFlow.ratioPct).toFixed(1)}%)
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{valuation.metrics.priceFreeCashFlow.score}/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Implied Downside Floor Callout */}
          <div className="p-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#15803D]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] font-mono">
                  Implied Fundamental Downside Floor
                </span>
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
                  Score: {valuation.metrics.impliedDownsideFloor.score}/10
                </span>
              </div>
              <div className="flex items-baseline gap-3 mt-1.5">
                <span className="font-mono text-2xl font-bold text-[#0F172A]">
                  ${valuation.metrics.impliedDownsideFloor.floorPrice.toFixed(2)}
                </span>
                <span className="text-xs text-[#64748B]">
                  vs ${valuation.metrics.impliedDownsideFloor.currentPrice.toFixed(2)} Current Price · Floor Ratio: {valuation.metrics.impliedDownsideFloor.floorRatioPct}%
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#15803D] bg-[#DCFCE7] border border-[#BBF7D0] px-3.5 py-1.5 rounded-full">
                -{valuation.metrics.impliedDownsideFloor.downsidePct}% Downside Cushion
              </span>
            </div>
          </div>

          {/* Strategic Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.valuationSupport.summary}
            </p>
          </div>
        </div>
      </FlippableCard>

      {/* 3. SUBMODULE 2: EARNINGS RESILIENCE */}
      <FlippableCard
        title="Submodule 2: Earnings Resilience & Margin Retention"
        subtitle="Evaluating top-line, gross margin, operating margin, and cash flow durability during slowdowns"
        badgeText={`Score: ${earnings.score.toFixed(2)} / 10`}
        badgeType="warning"
        evidences={earningsEvidences}
      >
        <div className="space-y-5">
          {/* Earnings Resilience Metrics Table */}
          <div className="overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Resilience Dimension</th>
                  <th className="py-2.5 px-3">Period / Detail Note</th>
                  <th className="py-2.5 px-3 text-right">Trough / Drawdown</th>
                  <th className="py-2.5 px-3 text-right">Normal Baseline</th>
                  <th className="py-2.5 px-3 text-right">Retention / Recovery</th>
                  <th className="py-2.5 px-3 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                {/* 1. Revenue Resilience */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Revenue Resilience</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{earnings.metrics.revenueResilience.note}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{earnings.metrics.revenueResilience.maxDrawdownPct}%</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">Prior Expansion</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">Contained Slowdown</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{earnings.metrics.revenueResilience.score}/10</td>
                </tr>

                {/* 2. Gross Margin Resilience */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Gross Margin Resilience</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Peak-to-trough cycle retention</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{earnings.metrics.grossMarginResilience.troughMarginPct}%</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{earnings.metrics.grossMarginResilience.normalMarginPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{earnings.metrics.grossMarginResilience.troughToNormalPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{earnings.metrics.grossMarginResilience.score}/10</td>
                </tr>

                {/* 3. Operating Margin Resilience */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Operating Margin Resilience</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Fixed-cost deleverage & tariff costs</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{earnings.metrics.operatingMarginResilience.troughMarginPct}%</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{earnings.metrics.operatingMarginResilience.normalMarginPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{earnings.metrics.operatingMarginResilience.troughToNormalPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{earnings.metrics.operatingMarginResilience.score}/10</td>
                </tr>

                {/* 4. EBITDA Margin Resilience */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">EBITDA Margin Resilience</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Cash operating profit retention</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{earnings.metrics.ebitdaMarginResilience.troughMarginPct}%</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">{earnings.metrics.ebitdaMarginResilience.normalMarginPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{earnings.metrics.ebitdaMarginResilience.troughToNormalPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{earnings.metrics.ebitdaMarginResilience.score}/10</td>
                </tr>

                {/* 5. Forward Earnings Guidance Retention */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Earnings Retention (Forward EPS)</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{earnings.metrics.earningsResilience.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">$9.48 guidance</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">$13.26 FY25</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{earnings.metrics.earningsResilience.retainedPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{earnings.metrics.earningsResilience.score}/10</td>
                </tr>

                {/* 6. Free Cash Flow Retention */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Free Cash Flow Retention</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{earnings.metrics.freeCashFlowResilience.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">$650M FCF</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">Peak Cash Flow</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{earnings.metrics.freeCashFlowResilience.retainedPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{earnings.metrics.freeCashFlowResilience.score}/10</td>
                </tr>

                {/* 7. Gross Margin Recovery */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Gross Margin Recovery</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{earnings.metrics.grossMarginRecovery.note}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">54.2% Trough</td>
                  <td className="py-2.5 px-3 text-right text-[#505A63]">54.9% Underlying</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{earnings.metrics.grossMarginRecovery.recoveryPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{earnings.metrics.grossMarginRecovery.score}/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Strategic Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Earnings Resilience Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.earningsResilience.summary}
            </p>
          </div>
        </div>
      </FlippableCard>

      {/* 4. SUBMODULE 3: BALANCE SHEET, LIQUIDITY & CAPITAL ALLOCATION */}
      <FlippableCard
        title="Submodule 3: Balance Sheet, Liquidity & Capital Allocation"
        subtitle="Unlevered funded balance sheet, cash reserves, lease debt reconciliation, and coverage ratios"
        badgeText={`Score: ${bs.score.toFixed(2)} / 10`}
        badgeType="positive"
        evidences={balanceSheetEvidences}
      >
        <div className="space-y-5">
          {/* Top 4 KPI Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl">
              <span className="text-[10px] text-[#15803D] font-bold uppercase tracking-wider font-mono block">
                Funded Net Cash
              </span>
              <div className="font-mono text-xl font-bold text-[#0F172A] mt-1">
                {bs.metrics.leaseAdjustedNetLeverage.fundedDebtPosition}
              </div>
              <p className="text-[11px] text-[#505A63] mt-0.5">
                $0 funded debt borrowings
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl">
              <span className="text-[10px] text-[#795900] font-bold uppercase tracking-wider font-mono block">
                ASC 842 Store Leases
              </span>
              <div className="font-mono text-xl font-bold text-[#0F172A] mt-1">
                {bs.metrics.leaseAdjustedNetLeverage.totalLeaseLiabilities}
              </div>
              <p className="text-[11px] text-[#505A63] mt-0.5">
                {bs.metrics.leaseAdjustedNetLeverage.leaseInclusivePosition}
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl">
              <span className="text-[10px] text-[#15803D] font-bold uppercase tracking-wider font-mono block">
                Current Liquidity Ratio
              </span>
              <div className="font-mono text-xl font-bold text-[#0F172A] mt-1">
                {bs.metrics.currentLiquidityRatio.value}x
              </div>
              <p className="text-[11px] text-[#505A63] mt-0.5">
                ${bs.metrics.currentLiquidityRatio.currentAssetsM.toFixed(1)}M / ${bs.metrics.currentLiquidityRatio.currentLiabilitiesM.toFixed(1)}M
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl">
              <span className="text-[10px] text-[#15803D] font-bold uppercase tracking-wider font-mono block">
                Lease Coverage Ratio
              </span>
              <div className="font-mono text-xl font-bold text-[#0F172A] mt-1">
                {bs.metrics.leaseCoverageRatio.coverageX}x
              </div>
              <p className="text-[11px] text-[#505A63] mt-0.5">
                {bs.metrics.leaseCoverageRatio.status}
              </p>
            </div>
          </div>

          {/* Full Balance Sheet Metrics Table */}
          <div className="overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Balance Sheet Metric</th>
                  <th className="py-2.5 px-3">Underlying Values / Basis</th>
                  <th className="py-2.5 px-3 text-right">Reported Ratio / Value</th>
                  <th className="py-2.5 px-3 text-right">Solvency Assessment</th>
                  <th className="py-2.5 px-3 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                {/* 1. Lease-Adjusted Net Leverage */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Lease-Adjusted Net Leverage</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">
                    Funded: {bs.metrics.leaseAdjustedNetLeverage.fundedDebtPosition} · Leases: {bs.metrics.leaseAdjustedNetLeverage.totalLeaseLiabilities}
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.leaseAdjustedNetLeverage.leaseInclusivePosition}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">High Protection</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.leaseAdjustedNetLeverage.score}/10</td>
                </tr>

                {/* 2. Net Cash to Market Cap */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Net Cash to Market Cap</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">${bs.metrics.netCashToMarketCapitalization.cashB}B Cash / ${bs.metrics.netCashToMarketCapitalization.marketCapB}B MCap</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{bs.metrics.netCashToMarketCapitalization.ratioPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">Solid Liquidity Cushion</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{bs.metrics.netCashToMarketCapitalization.score}/10</td>
                </tr>

                {/* 3. Cash to Revenue (TTM) */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">
                    Cash to Revenue (TTM)
                    <span className="block text-[10px] text-[#8D969E] font-normal">
                      {bs.metrics.cashToRevenue.ttmPeriodQuarters.join(' · ')}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">
                    ${bs.metrics.cashToRevenue.cashM.toFixed(1)}M Cash / ${bs.metrics.cashToRevenue.ttmRevenueM.toFixed(1)}M TTM Rev
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{bs.metrics.cashToRevenue.ratioPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">Self-Funding Operations</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{bs.metrics.cashToRevenue.score}/10</td>
                </tr>

                {/* 4. Current Ratio */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Current Ratio</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">
                    ${bs.metrics.currentLiquidityRatio.currentAssetsM.toFixed(1)}M CA / ${bs.metrics.currentLiquidityRatio.currentLiabilitiesM.toFixed(1)}M CL
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.currentLiquidityRatio.value}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">Robust Short-Term Coverage</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.currentLiquidityRatio.score}/10</td>
                </tr>

                {/* 5. Quick Ratio */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Quick Ratio</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">
                    ${bs.metrics.quickLiquidityRatio.quickAssetsM.toFixed(1)}M QA / ${bs.metrics.quickLiquidityRatio.currentLiabilitiesM.toFixed(1)}M CL
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{bs.metrics.quickLiquidityRatio.value}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">Standard Retail Liquid Buffer</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{bs.metrics.quickLiquidityRatio.score}/10</td>
                </tr>

                {/* 6. Free Cash Flow to Debt */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Free Cash Flow to Debt</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Funded borrowing obligations</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.freeCashFlowToDebt.ratioPct}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">Zero Debt Burden</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.freeCashFlowToDebt.score}/10</td>
                </tr>

                {/* 7. Short-Term Debt to Cash */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Short-Term Debt to Cash</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Zero near-term maturities</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.shortTermDebtToCash.ratioPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">Zero Refinancing Risk</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{bs.metrics.shortTermDebtToCash.score}/10</td>
                </tr>

                {/* 8. Share Repurchase Coverage */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Share Repurchase Coverage</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Buyback coverage ratio</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{bs.metrics.shareRepurchaseCoverage.buybackCoverageX}x</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">Constrained Capital Return</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{bs.metrics.shareRepurchaseCoverage.score}/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Strategic Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Balance Sheet & Liquidity Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.balanceSheetLiquidityCapitalAllocation.summary}
            </p>
          </div>
        </div>
      </FlippableCard>

      {/* 5. SUBMODULE 4: HISTORICAL DOWNSIDE BEHAVIOR */}
      <FlippableCard
        title="Submodule 4: Historical Downside Behavior & Crisis Horizons"
        subtitle="Empirical stock drawdowns, earnings drawdowns, and recovery duration across prior retail stress cycles"
        badgeText={`Score: ${historical.score.toFixed(2)} / 10 · Weight: ${(historical.weight * 100).toFixed(0)}%`}
        badgeType="warning"
        evidences={historicalEvidences}
      >
        <div className="space-y-5">
          {/* Historical Drawdowns & Recoveries Table */}
          <div className="overflow-x-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl p-3">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Historical Cycle Metric</th>
                  <th className="py-2.5 px-3">Methodology / Stress Episode Context</th>
                  <th className="py-2.5 px-3 text-right">Value / Duration</th>
                  <th className="py-2.5 px-3 text-right">Institutional Significance</th>
                  <th className="py-2.5 px-3 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                {/* 1. Maximum Stock Drawdown */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Maximum Stock Drawdown</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{historical.metrics.maximumStockDrawdown.status}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{historical.metrics.maximumStockDrawdown.drawdownPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">Severe Price Volatility</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{historical.metrics.maximumStockDrawdown.score}/10</td>
                </tr>

                {/* 2. Average Major Drawdown */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Average Major Drawdown</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{historical.metrics.averageMajorDrawdown.methodology}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#DC2626]">{historical.metrics.averageMajorDrawdown.drawdownPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">Typical Stress Magnitude</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{historical.metrics.averageMajorDrawdown.score}/10</td>
                </tr>

                {/* 3. Maximum EPS Drawdown */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Maximum EPS Drawdown</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">Peak-to-trough actual earnings drop</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{historical.metrics.maximumEpsDrawdown.drawdownPct}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">Earnings Resilient vs Price</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{historical.metrics.maximumEpsDrawdown.score}/10</td>
                </tr>

                {/* 4. Stock Recovery Time */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Stock Recovery Time</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{historical.metrics.stockRecoveryTime.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{historical.metrics.stockRecoveryTime.value}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">1.5 to 1.7 Years</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{historical.metrics.stockRecoveryTime.score}/10</td>
                </tr>

                {/* 5. Earnings Recovery Time */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Earnings Recovery Time</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{historical.metrics.earningsRecoveryTime.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#111827]">{historical.metrics.earningsRecoveryTime.value}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">1.5 Years Fundamental Rebound</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#795900]">{historical.metrics.earningsRecoveryTime.score}/10</td>
                </tr>

                {/* 6. Valuation Recovery Time */}
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#111827] font-sans">Valuation Recovery Time</td>
                  <td className="py-2.5 px-3 text-[#505A63] font-sans text-xs">{historical.metrics.valuationRecoveryTime.period}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{historical.metrics.valuationRecoveryTime.value}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">Multiple Expansion Horizon</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#15803D]">{historical.metrics.valuationRecoveryTime.score}/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Strategic Summary Box */}
          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900] font-mono block">
              Historical Downside Behavior Summary
            </span>
            <p className="text-xs text-[#505A63] leading-relaxed">
              {insights.historicalDownsideBehavior.summary}
            </p>
          </div>
        </div>
      </FlippableCard>
    </div>
  );
};
