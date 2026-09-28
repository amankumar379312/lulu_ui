import React from 'react';
import { LULU_RAW_DATA } from '../data/luluData.ts';
import { ScoreRing } from './ScoreRing.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { FlippableCard } from './FlippableCard.tsx';
import { 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { WhyModalData } from './WhyModal.tsx';

interface CatalystModuleProps {
  onOpenWhy: (data: WhyModalData) => void;
}

export const CatalystModule: React.FC<CatalystModuleProps> = () => {
  const cData = LULU_RAW_DATA.modules.catalyst;
  const execution = cData.catalystExecution;
  const newCategory = cData.newCategoryImpact;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* CATALYST HERO & COMPARISON */}
      <div className="p-6 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-6">
            <ScoreRing
              score={cData.catalystScore}
              max={10}
              size={110}
              strokeWidth={8}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] font-mono">
                  High Conviction Execution
                </span>
                <StatusBadge status="Tier 1: 9.4 / 10" size="xs" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight font-heading">
                Catalyst Score: {cData.catalystScore} / 10
              </h2>
              <p className="text-xs text-[#505A63] max-w-2xl mt-1 leading-relaxed">
                Evaluates corporate strategy execution, market resets, international scale in China, and new category accretiveness (Men's, Outerwear).
              </p>
            </div>
          </div>

          <div className="w-full lg:w-80 p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#505A63] mb-1 font-heading">
              Submodule Scores
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#111827]">Catalyst Execution</span>
                <span className="font-mono text-[#111827] font-bold">{cData.submoduleScores.catalystExecution} / 10</span>
              </div>
              <div className="w-full h-2 bg-[#E5E0D8] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#1F242F] rounded-full"
                  style={{ width: `${(cData.submoduleScores.catalystExecution / 10) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#111827]">New Category Impact</span>
                <span className="font-mono text-[#15803D] font-bold">{cData.submoduleScores.newCategoryImpact} / 10</span>
              </div>
              <div className="w-full h-2 bg-[#E5E0D8] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#15803D] rounded-full"
                  style={{ width: `${(cData.submoduleScores.newCategoryImpact / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#505A63] max-w-2xl">
            <strong className="text-[#111827]">Summary:</strong> {execution.strategicSummary}
          </p>
        </div>
      </div>

      {/* SUBMODULE 1: CATALYST EXECUTION SCORECARD (FLIPPABLE CARD) */}
      <FlippableCard
        title="Submodule 1: Strategic Catalyst Execution Scorecard"
        subtitle="Multi-cycle tracking of revenue growth, margin accretion, and guidance reliability across corporate resets"
        badgeText="Score: 9.5 / 10 (Tier 1)"
        badgeType="positive"
        evidences={execution.evidence}
      >
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Event</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-2 text-center">Score</th>
                  <th className="py-2.5 px-3 text-right">Rev Delta</th>
                  <th className="py-2.5 px-3 text-right">Margin Delta</th>
                  <th className="py-2.5 px-3 text-center">Guidance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8] text-xs">
                {execution.scorecard.map((ev, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-[#FBF9F5] transition-colors"
                  >
                    <td className="py-3 px-3 font-semibold text-[#111827]">
                      {ev.eventName}
                    </td>
                    <td className="py-3 px-3 text-[#505A63] text-[11px]">{ev.category}</td>
                    <td className="py-3 px-2 text-center font-mono font-bold text-[#15803D]">
                      {ev.score.toFixed(1)}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-semibold text-[#15803D]">
                      +{ev.growth.growthDelta}%
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-[#15803D]">
                      +{ev.margin.marginDeltaBps} bps
                    </td>
                    <td className="py-3 px-3 text-center">
                      <StatusBadge status={`${ev.guidance.quartersBeaten}/${ev.guidance.quartersEvaluated} Beats`} size="xs" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Guidance Track Record Callout */}
          <div className="p-3.5 bg-[#E8F5E9] border border-[#C8E6C9] rounded-lg flex items-center justify-between text-xs text-[#15803D]">
            <span className="font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Guidance Reliability Track Record: 8 Quarters Evaluated, 7 Beaten, 1 In-Line, 0 Missed
            </span>
            <span className="font-mono font-bold text-sm">100% Reliability</span>
          </div>
        </div>
      </FlippableCard>

      {/* SUBMODULE 2: NEW CATEGORY IMPACT & CHANNEL EXPANSION (FLIPPABLE CARD) */}
      <FlippableCard
        title="Submodule 2: New Category Impact & Global Geographic Scaling"
        subtitle="Evaluates category accretiveness, market segmentation, and margin profile across strategic product line launches"
        badgeText={`Score: ${newCategory.submoduleScore} / 10 (${newCategory.tier.split(':')[0]})`}
        badgeType="positive"
        evidences={newCategory.evidence}
      >
        <div className="space-y-4">
          {/* Strategic Summary Box */}
          <div className="p-4 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
              <Sparkles className="w-3.5 h-3.5 text-[#795900]" />
              Summary
            </div>
            <p className="text-sm font-medium text-[#111827] leading-relaxed">
              {newCategory.strategicSummary}
            </p>
          </div>

          {/* Quick Metrics KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#FBF9F5] rounded-lg border border-[#E5E0D8]">
              <span className="text-[10px] text-[#8D969E] uppercase font-mono block">Categories & Channels</span>
              <span className="text-base font-bold text-[#111827] font-mono mt-0.5 block">{newCategory.totalCategoriesAnalyzed} Analyzed</span>
              <span className="text-[10px] text-[#505A63]">Men's · Outerwear · China</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] rounded-lg border border-[#E5E0D8]">
              <span className="text-[10px] text-[#8D969E] uppercase font-mono block">Submodule Accretion Score</span>
              <span className="text-base font-bold text-[#15803D] font-mono mt-0.5 block">{newCategory.submoduleScore.toFixed(2)} / 10</span>
              <span className="text-[10px] text-[#15803D] font-medium">{newCategory.tier}</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] rounded-lg border border-[#E5E0D8]">
              <span className="text-[10px] text-[#8D969E] uppercase font-mono block">Cannibalization Risk</span>
              <span className="text-base font-bold text-[#111827] mt-0.5 block">Zero Dilution</span>
              <span className="text-[10px] text-[#15803D] font-medium">Parity or better with core</span>
            </div>
          </div>

          {/* Structured Category Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Category / Channel</th>
                  <th className="py-2.5 px-3">Launch Period</th>
                  <th className="py-2.5 px-3 text-right">Growth Trajectory</th>
                  <th className="py-2.5 px-3 text-right">Margin Profile</th>
                  <th className="py-2.5 px-2 text-center">Score</th>
                  <th className="py-2.5 px-3">Summary Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8] text-xs">
                {newCategory.categories.map((cat, idx) => (
                  <tr key={cat.categoryId || idx} className="hover:bg-[#FBF9F5] transition-colors">
                    <td className="py-3 px-3 font-semibold text-[#111827]">
                      <div>{cat.categoryOrChannelName}</div>
                      <div className="text-[10px] text-[#8D969E] font-normal leading-snug mt-0.5 max-w-xs">
                        {cat.parentCatalyst}
                      </div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E5E0D8] text-[#111827] font-semibold">
                        {cat.launchPeriod}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="font-mono font-bold text-[#15803D]">
                        +{cat.growthDeltaPct.toFixed(1)}%
                      </span>
                      <div className="text-[10px] text-[#505A63]">
                        {cat.growthTrajectory}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className={`font-mono font-bold ${cat.marginDeltaBps >= 0 ? 'text-[#15803D]' : 'text-[#DC2626]'}`}>
                        {cat.marginDeltaBps >= 0 ? `+${cat.marginDeltaBps.toFixed(1)} bps` : `${cat.marginDeltaBps.toFixed(1)} bps`}
                      </span>
                      <div className="text-[10px] text-[#505A63]">
                        {cat.marginRelativeToCore}
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className="font-mono font-bold text-[#15803D]">
                        {cat.score.toFixed(1)}
                      </span>
                      <div className="text-[9px] font-semibold text-[#15803D]">
                        Tier 1
                      </div>
                    </td>
                    <td className="py-3 px-3 text-[11px] text-[#505A63] leading-relaxed max-w-sm">
                      {cat.summaryVerdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analytical Takeaway Callout */}
          <div className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs text-[#505A63] leading-relaxed">
            <strong>Analytical Takeaway:</strong> High accretion scores in Men's (+4.3%, +10 bps), Outerwear (+12.5%, +15 bps), and China Mainland (+30.0%) affirm that Lululemon's brand equity and product development successfully cross demographics and geography without core gross margin dilution.
          </div>
        </div>
      </FlippableCard>
    </div>
  );
};
