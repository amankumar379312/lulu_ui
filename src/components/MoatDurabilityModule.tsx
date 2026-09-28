import React, { useState } from 'react';
import { LULU_RAW_DATA } from '../data/luluData.ts';
import { ScoreRing } from './ScoreRing.tsx';
import { ScoreBar } from './ScoreBar.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { FlippableCard } from './FlippableCard.tsx';
import { 
  ShieldCheck, AlertTriangle, Layers, Sparkles, 
  Store, ShoppingCart, Globe, HeartHandshake, CheckCircle2, TrendingUp,
  Zap, Clock, Target, ArrowRight, Quote, Info, ChevronDown, ChevronUp, Table as TableIcon
} from 'lucide-react';
import { WhyModalData } from './WhyModal.tsx';
import { TimeRangeFilter } from '../types/index.ts';

interface MoatDurabilityModuleProps {
  onOpenWhy?: (data: WhyModalData) => void;
}

type PillarFilter = 'ALL' | 'PRODUCT' | 'DISTRIBUTION' | 'COMMUNITY' | 'OPERATIONS';

export const MoatDurabilityModule: React.FC<MoatDurabilityModuleProps> = () => {
  const mData = LULU_RAW_DATA.modules.moatDurability;
  const dimensionScores = mData.pillarScores;
  const productAuth = mData.productAuthorityAndInnovation;
  const distribution = mData.distributionControlAndChannelDiscipline;
  const consumer = mData.consumerAndCommunityStrength;
  const competitive = mData.competitivePositionAndOperationalMoat;

  const [activePillar, setActivePillar] = useState<PillarFilter>('ALL');
  const [showMarketingTable, setShowMarketingTable] = useState(false);
  const [selectedGeoYear, setSelectedGeoYear] = useState<number>(2025);

  // Selected geographic revenue year from sourcingConcentration
  const selectedGeo = competitive.sourcingConcentration.geographicRevenue?.find(g => g.fiscalYear === selectedGeoYear) 
    || competitive.sourcingConcentration.geographicRevenue?.[0] 
    || null;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* MOAT DURABILITY HERO & 4-PILLAR FRAMEWORK */}
      <div className="p-6 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-6">
            <ScoreRing
              score={mData.moatDurabilityScore}
              max={10}
              size={110}
              strokeWidth={8}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#795900] font-mono">
                  Competitive Moat Evaluation · {mData.symbol}
                </span>
                <StatusBadge status="Tier 1-2: Narrow Moat with Wide Pockets" size="xs" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight font-heading">
                Moat Durability Score: {mData.moatDurabilityScore} / 10
              </h2>
              <p className="text-xs text-[#505A63] max-w-2xl mt-1 leading-relaxed">
                Comprehensive audit across 4 structural pillars: Science of Feel product IP, direct-to-consumer distribution discipline, authentic grassroots loyalty ecosystem, and fast-chase supply chain agility.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Strategic Pillars Scorecard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          <div 
            onClick={() => setActivePillar(activePillar === 'PRODUCT' ? 'ALL' : 'PRODUCT')}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activePillar === 'PRODUCT' ? 'bg-[#FBF3DC] border-[#795900]' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-[#111827] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#795900]" />
                1. Product Authority
              </span>
              <span className="font-mono text-[#111827] font-bold">{dimensionScores.productAuthorityAndInnovation} / 10</span>
            </div>
            <p className="text-[11px] text-[#505A63] mb-2 line-clamp-2">Newness engine (10.0) + durability feature audit (6.0, 66.7% durable).</p>
            <ScoreBar score={dimensionScores.productAuthorityAndInnovation} max={10} height={5} showScoreText={false} />
          </div>

          <div 
            onClick={() => setActivePillar(activePillar === 'DISTRIBUTION' ? 'ALL' : 'DISTRIBUTION')}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activePillar === 'DISTRIBUTION' ? 'bg-[#FBF3DC] border-[#795900]' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-[#111827] flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5 text-[#795900]" />
                2. Distribution Control
              </span>
              <span className="font-mono text-[#795900] font-bold">{dimensionScores.distributionControlAndChannelDiscipline} / 10</span>
            </div>
            <p className="text-[11px] text-[#505A63] mb-2 line-clamp-2">Direct DTC & store channel mix (6.0) + organic pull under 6% marketing (10.0).</p>
            <ScoreBar score={dimensionScores.distributionControlAndChannelDiscipline} max={10} height={5} showScoreText={false} />
          </div>

          <div 
            onClick={() => setActivePillar(activePillar === 'COMMUNITY' ? 'ALL' : 'COMMUNITY')}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activePillar === 'COMMUNITY' ? 'bg-[#FBF3DC] border-[#795900]' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-[#111827] flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#795900]" />
                3. Community Strength
              </span>
              <span className="font-mono text-[#111827] font-bold">{dimensionScores.consumerAndCommunityStrength} / 10</span>
            </div>
            <p className="text-[11px] text-[#505A63] mb-2 line-clamp-2">High engagement loyalty ecosystem (10.0) offsetting cyclical Americas comp (6.0).</p>
            <ScoreBar score={dimensionScores.consumerAndCommunityStrength} max={10} height={5} showScoreText={false} />
          </div>

          <div 
            onClick={() => setActivePillar(activePillar === 'OPERATIONS' ? 'ALL' : 'OPERATIONS')}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activePillar === 'OPERATIONS' ? 'bg-[#FBF3DC] border-[#795900]' : 'bg-[#FBF9F5] border-[#E5E0D8] hover:border-[#D8D2C5]'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-[#111827] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#15803D]" />
                4. Operational Moat
              </span>
              <span className="font-mono text-[#15803D] font-bold">{dimensionScores.competitivePositionAndOperationalMoat} / 10</span>
            </div>
            <p className="text-[11px] text-[#505A63] mb-2 line-clamp-2">Fast-chase 12-14 mo cycle (10.0), sourcing exposure (6.0), and competitive moat defense (6.0).</p>
            <ScoreBar score={dimensionScores.competitivePositionAndOperationalMoat} max={10} height={5} showScoreText={false} />
          </div>
        </div>

        {activePillar !== 'ALL' && (
          <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs text-[#505A63]">
            <span>Filtered view: showing only selected pillar.</span>
            <button
              type="button"
              onClick={() => setActivePillar('ALL')}
              className="text-[#795900] hover:underline font-semibold cursor-pointer"
            >
              Show all 4 pillars
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* PILLAR 1: PRODUCT AUTHORITY & INNOVATION (SCORE: 7.07 / 10)               */}
      {/* ========================================================================= */}
      {(activePillar === 'ALL' || activePillar === 'PRODUCT') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1F242F] text-white text-[11px] font-mono font-bold">
                PILLAR 1
              </span>
              <h3 className="text-lg font-bold text-[#111827] font-heading">
                Product Authority & Innovation (Score: {dimensionScores.productAuthorityAndInnovation} / 10)
              </h3>
            </div>
            <span className="text-xs text-[#505A63]">Science of Feel R&D · Moat Fade Audit · Category Retentive Scale</span>
          </div>

          {/* Submodule 1A: Newness Engine, Assortment Evolution & R&D Pipeline */}
          <FlippableCard
            title="Submodule 1A: Product Newness Engine & Assortment Trajectory"
            subtitle="Frequency of style launches, localization agility, and proprietary R&D technical pipeline"
            badgeText={`Score: ${productAuth.newnessAndInnovation.submoduleScore.toFixed(1)} / 10 (${productAuth.newnessAndInnovation.tier.split(':')[0]})`}
            badgeType="positive"
            evidences={productAuth.newnessAndInnovation.evidence}
          >
            <div className="space-y-5">
              {/* Strategic Summary Box */}
              <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Summary
                </div>
                <p className="text-xs font-medium text-[#111827] leading-relaxed">
                  {productAuth.newnessAndInnovation.strategicSummary}
                </p>
              </div>

              {/* Assortment Evolution Visual Track (2024 to 2026) */}
              <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-4 sm:p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-[#111827] font-heading">
                  <span>Assortment Mix Evolution: Core Franchises vs Seasonal Innovation</span>
                  <span className="text-[11px] font-mono text-[#8D969E] font-normal">Targeting 50/50 Equilibrium by 2026</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {/* FY2024 Pie Chart */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[260px] aspect-[1.2/1]">
                      <svg viewBox="0 0 240 200" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                        {/* Title */}
                        <text x="120" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                          FY2024
                        </text>
                        <text x="120" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                          60% Core / 40% Seasonal
                        </text>

                        {/* Pie Slices (cx=120, cy=115, r=58) */}
                        {/* Core (Blue 60%) */}
                        <path
                          d="M 120 115 L 120 57 A 58 58 0 1 1 85.91 161.92 Z"
                          fill="#1F77B4"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />
                        {/* Seasonal (Orange 40%) */}
                        <path
                          d="M 120 115 L 85.91 161.92 A 58 58 0 0 1 120 57 Z"
                          fill="#FF7F0E"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />

                        {/* Slice Value Labels */}
                        <text x="150" y="128" textAnchor="middle" fontSize="11" fill="#111827" fontWeight="500" fontFamily="system-ui, sans-serif">
                          60%
                        </text>
                        <text x="90" y="108" textAnchor="middle" fontSize="11" fill="#111827" fontWeight="500" fontFamily="system-ui, sans-serif">
                          40%
                        </text>

                        {/* Outer Labels */}
                        <text x="50" y="102" textAnchor="end" fontSize="11" fill="#111827" fontFamily="system-ui, sans-serif">
                          Seasonal
                        </text>
                        <text x="188" y="142" textAnchor="start" fontSize="11" fill="#111827" fontFamily="system-ui, sans-serif">
                          Core
                        </text>
                      </svg>
                    </div>
                    {productAuth.newnessAndInnovation.assortmentTrajectory[0]?.driver && (
                      <p className="text-[11px] text-[#505A63] text-center mt-2 px-2 leading-relaxed">
                        <strong className="text-[#111827]">Driver:</strong> {productAuth.newnessAndInnovation.assortmentTrajectory[0].driver}
                      </p>
                    )}
                  </div>

                  {/* FY2025 Pie Chart */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[260px] aspect-[1.2/1]">
                      <svg viewBox="0 0 240 200" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                        {/* Title */}
                        <text x="120" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                          FY2025
                        </text>
                        <text x="120" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                          55% Core / 45% Seasonal
                        </text>

                        {/* Pie Slices (cx=120, cy=115, r=58) */}
                        {/* Core (Blue 55%) */}
                        <path
                          d="M 120 115 L 120 57 A 58 58 0 1 1 102.08 170.16 Z"
                          fill="#1F77B4"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />
                        {/* Seasonal (Orange 45%) */}
                        <path
                          d="M 120 115 L 102.08 170.16 A 58 58 0 0 1 120 57 Z"
                          fill="#FF7F0E"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />

                        {/* Slice Value Labels */}
                        <text x="152" y="124" textAnchor="middle" fontSize="11" fill="#111827" fontWeight="500" fontFamily="system-ui, sans-serif">
                          55%
                        </text>
                        <text x="88" y="113" textAnchor="middle" fontSize="11" fill="#111827" fontWeight="500" fontFamily="system-ui, sans-serif">
                          45%
                        </text>

                        {/* Outer Labels */}
                        <text x="50" y="107" textAnchor="end" fontSize="11" fill="#111827" fontFamily="system-ui, sans-serif">
                          Seasonal
                        </text>
                        <text x="188" y="134" textAnchor="start" fontSize="11" fill="#111827" fontFamily="system-ui, sans-serif">
                          Core
                        </text>
                      </svg>
                    </div>
                    {productAuth.newnessAndInnovation.assortmentTrajectory[1]?.driver && (
                      <p className="text-[11px] text-[#505A63] text-center mt-2 px-2 leading-relaxed">
                        <strong className="text-[#111827]">Driver:</strong> {productAuth.newnessAndInnovation.assortmentTrajectory[1].driver}
                      </p>
                    )}
                  </div>

                  {/* FY2026 Pie Chart */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[260px] aspect-[1.2/1]">
                      <svg viewBox="0 0 240 200" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                        {/* Title */}
                        <text x="120" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                          FY2026
                        </text>
                        <text x="120" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                          50% Core / 50% Seasonal
                        </text>

                        {/* Pie Slices (cx=120, cy=115, r=58) */}
                        {/* Core (Blue 50%) */}
                        <path
                          d="M 120 115 L 120 57 A 58 58 0 0 1 120 173 Z"
                          fill="#1F77B4"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />
                        {/* Seasonal (Orange 50%) */}
                        <path
                          d="M 120 115 L 120 173 A 58 58 0 0 1 120 57 Z"
                          fill="#FF7F0E"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />

                        {/* Slice Value Labels */}
                        <text x="152" y="119" textAnchor="middle" fontSize="11" fill="#111827" fontWeight="500" fontFamily="system-ui, sans-serif">
                          50%
                        </text>
                        <text x="88" y="119" textAnchor="middle" fontSize="11" fill="#111827" fontWeight="500" fontFamily="system-ui, sans-serif">
                          50%
                        </text>

                        {/* Outer Labels */}
                        <text x="50" y="119" textAnchor="end" fontSize="11" fill="#111827" fontFamily="system-ui, sans-serif">
                          Seasonal
                        </text>
                        <text x="188" y="119" textAnchor="start" fontSize="11" fill="#111827" fontFamily="system-ui, sans-serif">
                          Core
                        </text>
                      </svg>
                    </div>
                    {productAuth.newnessAndInnovation.assortmentTrajectory[2]?.driver && (
                      <p className="text-[11px] text-[#505A63] text-center mt-2 px-2 leading-relaxed">
                        <strong className="text-[#111827]">Driver:</strong> {productAuth.newnessAndInnovation.assortmentTrajectory[2].driver}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Center Caption */}
                <div className="text-center text-xs text-[#111827] font-medium pt-2 pb-1 border-t border-[#F1EEE7]">
                  Targeting 50/50 equilibrium by FY2026
                </div>
              </div>

              {/* R&D Pipeline Table */}
              <div>
                <div className="text-xs font-bold text-[#111827] mb-2 font-heading">
                  Proprietary R&D Platform Pipeline & Commercial Impact:
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                        <th className="py-2.5 px-3">Fabric / Technology Platform</th>
                        <th className="py-2.5 px-3">Development Stage</th>
                        <th className="py-2.5 px-3">Commercial Moat Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D8] text-xs">
                      {productAuth.newnessAndInnovation.rdPipeline.map((rd: any, idx: number) => {
                        const platform = rd['fabric/platform'] || rd.fabricPlatform || 'Technical Platform';
                        const commercial = rd['commercial impact'] || rd.commercialImpact || '';
                        return (
                          <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-[#111827] font-mono">
                              {platform}
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                                {rd.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-[#505A63] text-[11px]">
                              {commercial}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </FlippableCard>

          {/* Submodule 1B: Product Durability Audit (6 Forensic Feature Assessments) */}
          <FlippableCard
            title="Submodule 1B: Product Durability Audit & Moat Fade Test"
            subtitle="Evaluates franchise staying power against fashion cycle obsolescence (4 Durable, 2 Fadeable Risks)"
            badgeText={`Score: ${productAuth.productDurability.submoduleScore.toFixed(1)} / 10 (${productAuth.productDurability.durabilityPercentage}% Durability)`}
            badgeType="warning"
            evidences={productAuth.productDurability.evidence}
          >
            <div className="space-y-4">
              {/* Scorecard Strip */}
              <div className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#111827] block text-xs">
                    Durability Scorecard: {productAuth.productDurability.totalDurabilityScore} / {productAuth.productDurability.maxPossibleScore} Features Classified Durable
                  </span>
                  <span className="text-[#505A63] text-[11px]">
                    4 Evergreen technical pillars remain durable; markdown posture and demographic extensibility show fadeable cyclical risks.
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F5E9] text-[#15803D] border border-[#C8E6C9]">
                    4 Durable (Score: 1)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FEF2F2] text-[#DC2626] border border-[#FECACA]">
                    2 Fadeable Risks (Score: 0)
                  </span>
                </div>
              </div>

              {/* 6 Features Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                      <th className="py-2.5 px-3">Feature Name</th>
                      <th className="py-2.5 px-3">Durable Characteristic</th>
                      <th className="py-2.5 px-3">Fadeable Counterpart Risk</th>
                      <th className="py-2.5 px-2 text-center">Audit Status</th>
                      <th className="py-2.5 px-3">Primary Evidence Citation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D8] text-xs">
                    {productAuth.productDurability.featureAssessments.map((feat) => {
                      const isDurable = feat.classificationLabel === 'Durable';
                      return (
                        <tr key={feat.featureId} className="hover:bg-[#FBF9F5] transition-colors">
                          <td className="py-3 px-3 font-semibold text-[#111827]">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-[10px] text-[#8D969E]">#{feat.featureId}</span>
                              <span>{feat.featureName}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-[#15803D] font-medium text-[11px]">
                            {feat.durableCharacteristic}
                          </td>
                          <td className="py-3 px-3 text-[#DC2626] text-[11px]">
                            {feat.fadeableRiskCounterpart}
                          </td>
                          <td className="py-3 px-2 text-center">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              isDurable 
                                ? 'bg-[#E8F5E9] text-[#15803D] border-[#C8E6C9]' 
                                : 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]'
                            }`}>
                              {feat.classificationLabel} ({feat.classificationScore})
                            </span>
                          </td>
                          <td className="py-3 px-3 text-[11px] text-[#505A63] max-w-xs italic">
                            "{feat.verbatimEvidenceQuotes?.[0] || feat.evidenceSynthesis}"
                            <span className="text-[10px] text-[#8D969E] block not-italic mt-0.5 font-mono">
                              — {feat.primarySources?.[0]}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </FlippableCard>

          {/* Submodule 1C: Category Expansion Margin Retention & Historical Scale */}
          <FlippableCard
            title="Submodule 1C: Category Expansion Margin Retention & Historical Scale"
            subtitle="Multi-segment revenue disaggregation, margin retention across Women's/Men's, and HHI trajectory"
            badgeText={`Score: ${productAuth.categoryExpansionMarginRetention.submoduleScore.toFixed(1)} / 10 (${productAuth.categoryExpansionMarginRetention.tier.split(':')[0]})`}
            badgeType="info"
            evidences={productAuth.categoryExpansionMarginRetention.evidence}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* GRAPH 1: CATEGORY REVENUE SHARE EVOLUTION */}
                <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-xs">
                  <div className="w-full h-80 sm:h-96 md:h-[400px]">
                    <svg viewBox="0 0 500 310" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                      {/* Title */}
                      <text x="15" y="22" fontSize="13" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                        Category Revenue Share Evolution
                      </text>

                      {/* Legend */}
                      <g transform="translate(15, 38)">
                        {/* Women's Product */}
                        <line x1="0" y1="6" x2="18" y2="6" stroke="#1D70B8" strokeWidth="2.5" />
                        <circle cx="9" cy="6" r="3.5" fill="#1D70B8" />
                        <text x="24" y="9.5" fontSize="9.5" fill="#111827" fontWeight="500">Women's Product</text>

                        {/* Men's Product */}
                        <line x1="130" y1="6" x2="148" y2="6" stroke="#F97316" strokeWidth="2.5" />
                        <circle cx="139" cy="6" r="3.5" fill="#F97316" />
                        <text x="154" y="9.5" fontSize="9.5" fill="#111827" fontWeight="500">Men's Product</text>

                        {/* Other Segments */}
                        <line x1="250" y1="6" x2="268" y2="6" stroke="#16A34A" strokeWidth="2.5" />
                        <circle cx="259" cy="6" r="3.5" fill="#16A34A" />
                        <text x="274" y="9.5" fontSize="9.5" fill="#111827" fontWeight="500">Other Segments</text>
                      </g>

                      {/* Y-Axis Label */}
                      <text 
                        x="-165" 
                        y="14" 
                        transform="rotate(-90)" 
                        fontSize="9.5" 
                        fill="#505A63" 
                        textAnchor="middle" 
                        fontFamily="system-ui, sans-serif"
                      >
                        Revenue share
                      </text>

                      {/* Y-Axis Horizontal Grid Lines and Labels (0 to 70) */}
                      {[
                        { val: 70, y: 70 },
                        { val: 60, y: 97.1 },
                        { val: 50, y: 124.3 },
                        { val: 40, y: 151.4 },
                        { val: 30, y: 178.6 },
                        { val: 20, y: 205.7 },
                        { val: 10, y: 232.9 },
                        { val: 0, y: 260 }
                      ].map((g, i) => (
                        <g key={i}>
                          <text x="40" y={g.y + 3} fontSize="8.5" fill="#8D969E" textAnchor="end" fontFamily="monospace">
                            {g.val}
                          </text>
                          {g.val > 0 ? (
                            <line x1="46" y1={g.y} x2="475" y2={g.y} stroke="#F1EEE7" strokeDasharray="3 3" />
                          ) : null}
                        </g>
                      ))}

                      {/* X-Axis Baseline & Left Axis Line */}
                      <line x1="46" y1="70" x2="46" y2="260" stroke="#E5E0D8" strokeWidth="1" />
                      <line x1="46" y1="260" x2="475" y2="260" stroke="#111827" strokeWidth="1.25" />

                      {/* X-Axis Year Labels */}
                      {[
                        { year: 'FY21', x: 70 },
                        { year: 'FY22', x: 170 },
                        { year: 'FY23', x: 270 },
                        { year: 'FY24', x: 370 },
                        { year: 'FY25', x: 470 }
                      ].map((item, i) => (
                        <g key={i}>
                          <line x1={item.x} y1="260" x2={item.x} y2="264" stroke="#111827" strokeWidth="1" />
                          <text x={item.x} y="278" fontSize="9.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            {item.year}
                          </text>
                        </g>
                      ))}

                      {/* Line 1: Women's Product (#1D70B8) */}
                      <polyline
                        fill="none"
                        stroke="#1D70B8"
                        strokeWidth="2.5"
                        points="70,78.9 170,83.8 270,86.5 370,88.5 470,89.0"
                      />
                      {[
                        { val: '66.7%', x: 70, y: 78.9 },
                        { val: '64.9%', x: 170, y: 83.8 },
                        { val: '63.9%', x: 270, y: 86.5 },
                        { val: '63.2%', x: 370, y: 88.5 },
                        { val: '63.0%', x: 470, y: 89.0 }
                      ].map((pt, i) => (
                        <g key={i}>
                          <circle cx={pt.x} cy={pt.y} r="3.75" fill="#1D70B8" />
                          <text x={pt.x} y={pt.y - 8} fontSize="8.5" fill="#111827" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            {pt.val}
                          </text>
                        </g>
                      ))}

                      {/* Line 2: Men's Product (#F97316) */}
                      <polyline
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="2.5"
                        points="70,193.5 170,194.6 270,196.5 370,194.3 470,194.9"
                      />
                      {[
                        { val: '24.5%', x: 70, y: 193.5 },
                        { val: '24.1%', x: 170, y: 194.6 },
                        { val: '23.4%', x: 270, y: 196.5 },
                        { val: '24.2%', x: 370, y: 194.3 },
                        { val: '24.0%', x: 470, y: 194.9 }
                      ].map((pt, i) => (
                        <g key={i}>
                          <circle cx={pt.x} cy={pt.y} r="3.75" fill="#F97316" />
                          <text x={pt.x} y={pt.y - 8} fontSize="8.5" fill="#111827" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            {pt.val}
                          </text>
                        </g>
                      ))}

                      {/* Line 3: Other Segments (#16A34A) */}
                      <polyline
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="2.5"
                        points="70,236.1 170,230.1 270,225.5 370,225.8 470,224.7"
                      />
                      {[
                        { val: '8.8%', x: 70, y: 236.1 },
                        { val: '11.0%', x: 170, y: 230.1 },
                        { val: '12.7%', x: 270, y: 225.5 },
                        { val: '12.6%', x: 370, y: 225.8 },
                        { val: '13.0%', x: 470, y: 224.7 }
                      ].map((pt, i) => (
                        <g key={i}>
                          <circle cx={pt.x} cy={pt.y} r="3.75" fill="#16A34A" />
                          <text x={pt.x} y={pt.y - 8} fontSize="8.5" fill="#111827" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            {pt.val}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* GRAPH 2: TOTAL REVENUE SCALE & YOY GROWTH */}
                <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-xs">
                  <div className="w-full h-80 sm:h-96 md:h-[400px]">
                    <svg viewBox="0 0 500 310" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                      {/* Title */}
                      <text x="15" y="22" fontSize="13" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                        Total Revenue Scale & YoY Growth
                      </text>

                      {/* Legend */}
                      <g transform="translate(15, 38)">
                        {/* Total revenue */}
                        <line x1="0" y1="6" x2="18" y2="6" stroke="#1D70B8" strokeWidth="2.5" />
                        <circle cx="9" cy="6" r="3.5" fill="#1D70B8" />
                        <text x="24" y="9.5" fontSize="9.5" fill="#111827" fontWeight="500">Total revenue</text>

                        {/* YoY growth */}
                        <line x1="120" y1="6" x2="138" y2="6" stroke="#1D70B8" strokeWidth="2" strokeDasharray="4 2" />
                        <rect x="126" y="3" width="6" height="6" fill="#1D70B8" />
                        <text x="144" y="9.5" fontSize="9.5" fill="#111827" fontWeight="500">YoY growth</text>
                      </g>

                      {/* Left Y-Axis Label */}
                      <text 
                        x="-165" 
                        y="14" 
                        transform="rotate(-90)" 
                        fontSize="9.5" 
                        fill="#505A63" 
                        textAnchor="middle" 
                        fontFamily="system-ui, sans-serif"
                      >
                        Revenue ($M)
                      </text>

                      {/* Right Y-Axis Label */}
                      <text 
                        x="165" 
                        y="-488" 
                        transform="rotate(90)" 
                        fontSize="9.5" 
                        fill="#505A63" 
                        textAnchor="middle" 
                        fontFamily="system-ui, sans-serif"
                      >
                        YoY revenue growth
                      </text>

                      {/* Left Y-Axis Grid Lines and Numbers (6000 to 11000) */}
                      {[
                        { val: 11000, y: 70 },
                        { val: 10000, y: 108 },
                        { val: 9000, y: 146 },
                        { val: 8000, y: 184 },
                        { val: 7000, y: 222 },
                        { val: 6000, y: 260 }
                      ].map((g, i) => (
                        <g key={i}>
                          <text x="40" y={g.y + 3} fontSize="8.5" fill="#8D969E" textAnchor="end" fontFamily="monospace">
                            {g.val}
                          </text>
                          {g.val > 6000 ? (
                            <line x1="46" y1={g.y} x2="455" y2={g.y} stroke="#F1EEE7" strokeDasharray="3 3" />
                          ) : null}
                        </g>
                      ))}

                      {/* Right Y-Axis Numbers (0 to 35) */}
                      {[
                        { val: 35, y: 70 },
                        { val: 30, y: 97.1 },
                        { val: 25, y: 124.3 },
                        { val: 20, y: 151.4 },
                        { val: 15, y: 178.6 },
                        { val: 10, y: 205.7 },
                        { val: 5, y: 232.9 },
                        { val: 0, y: 260 }
                      ].map((g, i) => (
                        <g key={i}>
                          <text x="460" y={g.y + 3} fontSize="8.5" fill="#8D969E" textAnchor="start" fontFamily="monospace">
                            {g.val}
                          </text>
                        </g>
                      ))}

                      {/* Axes Lines */}
                      <line x1="46" y1="70" x2="46" y2="260" stroke="#E5E0D8" strokeWidth="1" />
                      <line x1="455" y1="70" x2="455" y2="260" stroke="#E5E0D8" strokeWidth="1" />
                      <line x1="46" y1="260" x2="455" y2="260" stroke="#111827" strokeWidth="1.25" />

                      {/* X-Axis Year Labels */}
                      {[
                        { year: 'FY21', x: 75 },
                        { year: 'FY22', x: 170 },
                        { year: 'FY23', x: 265 },
                        { year: 'FY24', x: 360 },
                        { year: 'FY25', x: 455 }
                      ].map((item, i) => (
                        <g key={i}>
                          <line x1={item.x} y1="260" x2={item.x} y2="264" stroke="#111827" strokeWidth="1" />
                          <text x={item.x} y="278" fontSize="9.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            {item.year}
                          </text>
                        </g>
                      ))}

                      {/* Total Revenue Line (Solid #1D70B8 with circles) */}
                      <polyline
                        fill="none"
                        stroke="#1D70B8"
                        strokeWidth="2.5"
                        points="75,250.2 170,179.8 265,122.5 360,85.4 455,66.2"
                      />
                      {[
                        { val: '$6.3B', x: 75, y: 250.2 },
                        { val: '$8.1B', x: 170, y: 179.8 },
                        { val: '$9.6B', x: 265, y: 122.5 },
                        { val: '$10.6B', x: 360, y: 85.4 },
                        { val: '$11.1B', x: 455, y: 66.2 }
                      ].map((pt, i) => (
                        <g key={i}>
                          <circle cx={pt.x} cy={pt.y} r="3.75" fill="#1D70B8" />
                          <text x={pt.x} y={pt.y - 8} fontSize="8.5" fill="#111827" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            {pt.val}
                          </text>
                        </g>
                      ))}

                      {/* YoY Revenue Growth Line (Dashed #1D70B8 with square markers) */}
                      <polyline
                        fill="none"
                        stroke="#1D70B8"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        points="170,99.3 265,159.0 360,205.2 455,233.4"
                      />
                      {[
                        { val: '29.6%', x: 170, y: 99.3 },
                        { val: '18.6%', x: 265, y: 159.0 },
                        { val: '10.1%', x: 360, y: 205.2 },
                        { val: '4.9%', x: 455, y: 233.4 }
                      ].map((pt, i) => (
                        <g key={i}>
                          <rect x={pt.x - 3} y={pt.y - 3} width="6" height="6" fill="#1D70B8" />
                          <text 
                            x={pt.x} 
                            y={i === 0 ? pt.y - 8 : pt.y + 14} 
                            fontSize="8.5" 
                            fill="#111827" 
                            fontWeight="600" 
                            textAnchor="middle" 
                            fontFamily="system-ui, sans-serif"
                          >
                            {pt.val}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* HHI & Concentration De-concentration Note */}
              <div className="p-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs text-[#505A63] leading-relaxed flex items-center justify-between">
                <span>
                  <strong className="text-[#111827]">Summary:</strong> Herfindahl-Hirschman Index declined from <strong>6,840.6</strong> (FY2011) to <strong>4,714.8</strong> (FY2025), reflecting consistent, healthy diversification into Men's (+24% share) and digital channels.
                </span>
              </div>
            </div>
          </FlippableCard>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PILLAR 2: DISTRIBUTION CONTROL & CHANNEL DISCIPLINE (SCORE: 6.65 / 10)    */}
      {/* ========================================================================= */}
      {(activePillar === 'ALL' || activePillar === 'DISTRIBUTION') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1F242F] text-white text-[11px] font-mono font-bold">
                PILLAR 2
              </span>
              <h3 className="text-lg font-bold text-[#111827] font-heading">
                Distribution Control & Channel Discipline (Score: {dimensionScores.distributionControlAndChannelDiscipline} / 10)
              </h3>
            </div>
            <span className="text-xs text-[#505A63]">Channel Quality Mix · Organic Demand Pull · Minimal Off-Price</span>
          </div>

          <div className="space-y-6">
            {/* Channel Quality Mix Card */}
            <FlippableCard
              title="Distribution Channel Quality & Control"
              subtitle="Assessment of channel mix, distribution control, and DTC ownership across retail, digital, wholesale, and temporary channels"
              badgeText={`Score: ${distribution.channelQualityMix.submoduleScore.toFixed(1)} / 10 (${distribution.channelQualityMix.tier.split(':')[0]})`}
              badgeType="info"
              evidences={distribution.channelQualityMix.evidence}
            >
              <div className="space-y-4">
                {/* Strategic Summary Box */}
                <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Summary
                  </div>
                  <p className="text-xs font-medium text-[#111827] leading-relaxed">
                    {distribution.channelQualityMix.strategicSummary}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                        <th className="py-2.5 px-3 whitespace-nowrap">Channel Name</th>
                        <th className="py-2.5 px-3 text-right whitespace-nowrap">Share %</th>
                        <th className="py-2.5 px-3 whitespace-nowrap">Control Level</th>
                        <th className="py-2.5 px-3 min-w-[220px]">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D8] text-xs">
                      {distribution.channelQualityMix.channelBreakdown.map((ch, idx) => (
                        <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                          <td className="py-2.5 px-3 font-semibold text-[#111827] whitespace-nowrap">
                            <div>{ch.channelName}</div>
                            <div className="text-[10px] text-[#8D969E] font-normal">{ch.channelType}</div>
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-[#111827] whitespace-nowrap">
                            {ch.sharePct ? `${ch.sharePct}%` : 'Direct Store Fleet'}
                          </td>
                          <td className="py-2.5 px-3 whitespace-nowrap">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              ch.controlLevel === 'High'
                                ? 'bg-[#E8F5E9] text-[#15803D] border-[#C8E6C9]'
                                : 'bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5]'
                            }`}>
                              {ch.controlLevel}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-[#505A63] text-xs leading-relaxed">
                            {ch.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FlippableCard>

            {/* Marketing Intensity vs Organic Growth Card */}
            <FlippableCard
              title="Organic Demand Pull & Marketing Intensity"
              subtitle="Marketing spend held strictly below 6% of revenue with double-digit brand pull"
              badgeText={`Score: ${distribution.marketingIntensityVsGrowth.submoduleScore.toFixed(1)} / 10 (${distribution.marketingIntensityVsGrowth.tier.split(':')[0]})`}
              badgeType="positive"
              evidences={distribution.marketingIntensityVsGrowth.evidence}
            >
              <div className="space-y-4">
                {/* Strategic Summary Box */}
                <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Summary
                  </div>
                  <p className="text-xs font-medium text-[#111827] leading-relaxed">
                    {distribution.marketingIntensityVsGrowth.strategicSummary}
                  </p>
                </div>

                {/* Visual Charts Dashboard */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* LEFT CHART: Revenue Growth vs Marketing Intensity (7 cols) */}
                    <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-xs">
                      <div className="w-full h-[420px] sm:h-[480px] md:h-[500px]">
                        <svg viewBox="0 0 580 400" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                          {/* Title */}
                          <text x="15" y="26" fontSize="13.5" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                            Revenue Growth vs Marketing Intensity
                          </text>

                          {/* Legend */}
                          <g transform="translate(340, 16)">
                            {/* Net Revenue Bar */}
                            <rect x="0" y="2" width="12" height="10" fill="#DACFC0" stroke="#C8BFB0" rx="1" />
                            <text x="17" y="11" fontSize="9.5" fill="#505A63" fontWeight="500">Net Revenue ($B)</text>

                            {/* Marketing Intensity Line */}
                            <line x1="125" y1="7" x2="143" y2="7" stroke="#92400E" strokeWidth="2.5" />
                            <circle cx="134" cy="7" r="3.5" fill="#92400E" />
                            <text x="149" y="11" fontSize="9.5" fill="#92400E" fontWeight="600">Marketing %</text>
                          </g>

                          {/* Left Y Axis Label */}
                          <text x="-197" y="14" transform="rotate(-90)" fontSize="9.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            Net Revenue ($B)
                          </text>

                          {/* Right Y Axis Label */}
                          <text x="197" y="-568" transform="rotate(90)" fontSize="9.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            Marketing / Revenue
                          </text>

                          {/* Left Y-Axis Grid Lines & Numbers (0 to 12) */}
                          {[
                            { val: 12, y: 65 },
                            { val: 10, y: 109.2 },
                            { val: 8, y: 153.3 },
                            { val: 6, y: 197.5 },
                            { val: 4, y: 241.7 },
                            { val: 2, y: 285.8 },
                            { val: 0, y: 330 }
                          ].map((g, i) => (
                            <g key={i}>
                              <text x="38" y={g.y + 3} fontSize="8.5" fill="#8D969E" textAnchor="end" fontFamily="monospace">
                                {g.val}
                              </text>
                              {g.val > 0 && (
                                <line x1="45" y1={g.y} x2="535" y2={g.y} stroke="#F1EEE7" strokeDasharray="3 3" />
                              )}
                            </g>
                          ))}

                          {/* Right Y-Axis Numbers (0 to 8) */}
                          {[
                            { val: 8, y: 65 },
                            { val: 7, y: 98.1 },
                            { val: 6, y: 131.3 },
                            { val: 5, y: 164.4 },
                            { val: 4, y: 197.5 },
                            { val: 3, y: 230.6 },
                            { val: 2, y: 263.8 },
                            { val: 1, y: 296.9 },
                            { val: 0, y: 330 }
                          ].map((g, i) => (
                            <text key={i} x="542" y={g.y + 3} fontSize="8.5" fill="#8D969E" textAnchor="start" fontFamily="monospace">
                              {g.val}
                            </text>
                          ))}

                          {/* Axis lines */}
                          <line x1="45" y1="65" x2="45" y2="330" stroke="#E5E0D8" strokeWidth="1" />
                          <line x1="535" y1="65" x2="535" y2="330" stroke="#E5E0D8" strokeWidth="1" />
                          <line x1="45" y1="330" x2="535" y2="330" stroke="#111827" strokeWidth="1.25" />

                          {/* Year X labels and ticks */}
                          {[
                            { year: 'FY2021', x: 95 },
                            { year: 'FY2022', x: 195 },
                            { year: 'FY2023', x: 295 },
                            { year: 'FY2024', x: 395 },
                            { year: 'FY2025', x: 495 }
                          ].map((item, i) => (
                            <g key={i}>
                              <line x1={item.x} y1="330" x2={item.x} y2="334" stroke="#111827" strokeWidth="1" />
                              <text x={item.x} y="350" fontSize="9.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                {item.year}
                              </text>
                            </g>
                          ))}

                          {/* Bars for Net Revenue ($B) */}
                          {[
                            { x: 95, y: 191.8, h: 138.2, val: '$6.26B', yoy: '' },
                            { x: 195, y: 150.9, h: 179.1, val: '$8.11B', yoy: '+29.6% YoY' },
                            { x: 295, y: 117.6, h: 212.4, val: '$9.62B', yoy: '+18.6% YoY' },
                            { x: 395, y: 96.2, h: 233.8, val: '$10.59B', yoy: '+10.1% YoY' },
                            { x: 495, y: 84.8, h: 245.2, val: '$11.10B', yoy: '+4.9% YoY' }
                          ].map((bar, i) => (
                            <g key={i}>
                              <rect
                                x={bar.x - 27}
                                y={bar.y}
                                width="54"
                                height={bar.h}
                                fill="#DACFC0"
                                stroke="#C8BFB0"
                                strokeWidth="1"
                                rx="2"
                                className="transition-colors hover:fill-[#CFC3B0]"
                              />
                              {/* Value on top of bar */}
                              <text x={bar.x} y={bar.y - 8} fontSize="9.5" fontWeight="bold" fill="#111827" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                {bar.val}
                              </text>
                              {/* YoY Growth inside bar */}
                              {bar.yoy && (
                                <text x={bar.x} y={bar.y + (bar.h > 180 ? 95 : 70)} fontSize="8.5" fontWeight="bold" fill="#111827" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                  {bar.yoy}
                                </text>
                              )}
                            </g>
                          ))}

                          {/* Marketing Intensity Line (Right axis) */}
                          <polyline
                            fill="none"
                            stroke="#92400E"
                            strokeWidth="3"
                            points="95,153.4 195,161.1 295,154.4 395,153.4 495,148.1"
                          />
                          {[
                            { x: 95, y: 153.4, val: '5.33%' },
                            { x: 195, y: 161.1, val: '5.10%' },
                            { x: 295, y: 154.4, val: '5.30%' },
                            { x: 395, y: 153.4, val: '5.33%' },
                            { x: 495, y: 148.1, val: '5.49%' }
                          ].map((pt, i) => (
                            <g key={i}>
                              <circle cx={pt.x} cy={pt.y} r="4.5" fill="#92400E" stroke="#FFFFFF" strokeWidth="1.5" />
                              <text
                                x={pt.x}
                                y={pt.y - 9}
                                fontSize="9"
                                fontWeight="bold"
                                fill="#92400E"
                                textAnchor="middle"
                                fontFamily="system-ui, sans-serif"
                              >
                                {pt.val}
                              </text>
                            </g>
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: 2 Stacked Cards (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                      {/* Top Chart: Marketing Efficiency */}
                      <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-3 sm:p-4 flex-1 shadow-xs">
                        <div className="w-full h-52 sm:h-60 md:h-[240px]">
                          <svg viewBox="0 0 320 185" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                            <text x="15" y="20" fontSize="12" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                              Marketing Efficiency
                            </text>
                            <text x="-95" y="11" transform="rotate(-90)" fontSize="8.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                              Efficiency
                            </text>

                            {/* Y axis numbers and grid */}
                            {[
                              { val: 7, y: 35 },
                              { val: 6, y: 52.1 },
                              { val: 5, y: 69.3 },
                              { val: 4, y: 86.4 },
                              { val: 3, y: 103.6 },
                              { val: 2, y: 120.7 },
                              { val: 1, y: 137.9 },
                              { val: 0, y: 155 }
                            ].map((g, i) => (
                              <g key={i}>
                                <text x="28" y={g.y + 3} fontSize="8" fill="#8D969E" textAnchor="end" fontFamily="monospace">
                                  {g.val}
                                </text>
                                {g.val > 0 && (
                                  <line x1="33" y1={g.y} x2="305" y2={g.y} stroke="#F1EEE7" strokeDasharray="2 2" />
                                )}
                              </g>
                            ))}

                            <line x1="33" y1="35" x2="33" y2="155" stroke="#E5E0D8" strokeWidth="1" />
                            <line x1="33" y1="155" x2="305" y2="155" stroke="#111827" strokeWidth="1" />

                            {/* X Labels */}
                            {[
                              { year: 'FY2021', x: 45 },
                              { year: 'FY2022', x: 105 },
                              { year: 'FY2023', x: 165 },
                              { year: 'FY2024', x: 225 },
                              { year: 'FY2025', x: 285 }
                            ].map((item, i) => (
                              <g key={i}>
                                <line x1={item.x} y1="155" x2={item.x} y2="158" stroke="#111827" strokeWidth="1" />
                                <text x={item.x} y="172" fontSize="8.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                  {item.year}
                                </text>
                              </g>
                            ))}

                            {/* Efficiency Polyline */}
                            <polyline
                              fill="none"
                              stroke="#3B5270"
                              strokeWidth="2.5"
                              points="45,155 105,55.4 165,94.8 225,122.6 285,139.9"
                            />
                            {[
                              { x: 45, y: 155, val: '0.00x' },
                              { x: 105, y: 55.4, val: '5.81x' },
                              { x: 165, y: 94.8, val: '3.51x' },
                              { x: 225, y: 122.6, val: '1.89x' },
                              { x: 285, y: 139.9, val: '0.88x' }
                            ].map((pt, i) => (
                              <g key={i}>
                                <circle cx={pt.x} cy={pt.y} r="3.5" fill="#3B5270" stroke="#FFFFFF" strokeWidth="1" />
                                <text x={pt.x} y={pt.y - 7} fontSize="8" fontWeight="bold" fill="#111827" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                  {pt.val}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Chart: SG&A Intensity */}
                      <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl p-3 sm:p-4 flex-1 shadow-xs">
                        <div className="w-full h-52 sm:h-60 md:h-[240px]">
                          <svg viewBox="0 0 320 185" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                            <text x="15" y="20" fontSize="12" fontWeight="bold" fill="#111827" fontFamily="system-ui, sans-serif">
                              SG&A Intensity
                            </text>
                            <text x="-95" y="11" transform="rotate(-90)" fontSize="8.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                              SG&A / Revenue
                            </text>

                            {/* Y axis numbers and grid (30 to 38) */}
                            {[
                              { val: 38, y: 35 },
                              { val: 36, y: 65 },
                              { val: 34, y: 95 },
                              { val: 32, y: 125 },
                              { val: 30, y: 155 }
                            ].map((g, i) => (
                              <g key={i}>
                                <text x="28" y={g.y + 3} fontSize="8" fill="#8D969E" textAnchor="end" fontFamily="monospace">
                                  {g.val}
                                </text>
                                {g.val > 30 && (
                                  <line x1="33" y1={g.y} x2="305" y2={g.y} stroke="#F1EEE7" strokeDasharray="2 2" />
                                )}
                              </g>
                            ))}

                            <line x1="33" y1="35" x2="33" y2="155" stroke="#E5E0D8" strokeWidth="1" />
                            <line x1="33" y1="155" x2="305" y2="155" stroke="#111827" strokeWidth="1" />

                            {/* X Labels */}
                            {[
                              { year: 'FY2021', x: 45 },
                              { year: 'FY2022', x: 105 },
                              { year: 'FY2023', x: 165 },
                              { year: 'FY2024', x: 225 },
                              { year: 'FY2025', x: 285 }
                            ].map((item, i) => (
                              <g key={i}>
                                <line x1={item.x} y1="155" x2={item.x} y2="158" stroke="#111827" strokeWidth="1" />
                                <text x={item.x} y="172" fontSize="8.5" fill="#505A63" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                  {item.year}
                                </text>
                              </g>
                            ))}

                            {/* SG&A Polyline */}
                            <polyline
                              fill="none"
                              stroke="#9A3412"
                              strokeWidth="2.5"
                              points="45,71.6 105,95.0 165,75.2 225,72.0 285,55.6"
                            />
                            {[
                              { x: 45, y: 71.6, val: '35.56%' },
                              { x: 105, y: 95.0, val: '34.00%' },
                              { x: 165, y: 75.2, val: '35.32%' },
                              { x: 225, y: 72.0, val: '35.53%' },
                              { x: 285, y: 55.6, val: '36.63%' }
                            ].map((pt, i) => (
                              <g key={i}>
                                <circle cx={pt.x} cy={pt.y} r="3.5" fill="#9A3412" stroke="#FFFFFF" strokeWidth="1" />
                                <text x={pt.x} y={pt.y - 7} fontSize="8" fontWeight="bold" fill="#111827" textAnchor="middle" fontFamily="system-ui, sans-serif">
                                  {pt.val}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAKEAWAY BAR */}
                  <div className="p-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs text-[#505A63] leading-relaxed flex items-center gap-2">
                    <span className="font-mono font-bold text-[10px] text-[#795900] tracking-wider uppercase shrink-0 bg-[#FBF3DC] px-2 py-0.5 rounded border border-[#F1DEC0]">
                      Takeaway
                    </span>
                    <span>
                      Revenue rose <strong>77.5%</strong> from FY2021 ($6.26B) to FY2025 ($11.10B), while marketing intensity stayed strictly disciplined near <strong>5.1%–5.5%</strong>. Efficiency peaked at <strong>5.81x</strong> in FY2022 and stabilized as scale matured.
                    </span>
                  </div>

                  {/* Organic Moat Rule */}
                  <div className="p-2.5 bg-[#E8F5E9] border border-[#C8E6C9] rounded-lg text-[11px] text-[#15803D] flex items-center justify-between">
                    <span><strong>Organic Moat Rule:</strong> Elite athletic apparel brands spend 10-12% on marketing; Lululemon sustains growth at just <strong>5.1% - 5.5%</strong>.</span>
                    <button
                      onClick={() => setShowMarketingTable(!showMarketingTable)}
                      className="text-[11px] font-semibold text-[#15803D] hover:underline flex items-center gap-1 cursor-pointer ml-3 shrink-0"
                    >
                      <TableIcon className="w-3.5 h-3.5" />
                      <span>{showMarketingTable ? 'Hide Financial Table' : 'Show Financial Table'}</span>
                      {showMarketingTable ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Detailed Financial Records Table (Collapsible) */}
                  {showMarketingTable && (
                    <div className="overflow-x-auto border border-[#E5E0D8] rounded-lg">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[11px] font-semibold text-[#505A63] uppercase tracking-wider">
                            <th className="py-2.5 px-3">Fiscal Year</th>
                            <th className="py-2.5 px-3 text-right">Net Rev ($M)</th>
                            <th className="py-2.5 px-3 text-right">Rev YoY %</th>
                            <th className="py-2.5 px-3 text-right">Marketing ($M)</th>
                            <th className="py-2.5 px-3 text-right">Intensity %</th>
                            <th className="py-2.5 px-3 text-right">SG&A ($M)</th>
                            <th className="py-2.5 px-3 text-right">SG&A %</th>
                            <th className="py-2.5 px-3 text-right">Efficiency Ratio</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                          {distribution.marketingIntensityVsGrowth.financialRecords.map((rec, idx) => (
                            <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                              <td className="py-2.5 px-3 font-bold text-[#111827] font-sans">FY{rec.fiscalYear}</td>
                              <td className="py-2.5 px-3 text-right font-bold text-[#111827]">${rec.netRevenueMillions.toFixed(1)}M</td>
                              <td className="py-2.5 px-3 text-right font-bold text-[#1D70B8]">{rec.revenueGrowthPct > 0 ? `+${rec.revenueGrowthPct.toFixed(2)}%` : 'Base Year'}</td>
                              <td className="py-2.5 px-3 text-right text-[#505A63]">${rec.marketingExpenseMillions.toFixed(1)}M</td>
                              <td className="py-2.5 px-3 text-right font-bold text-[#92400E]">{rec.marketingIntensityPct.toFixed(2)}%</td>
                              <td className="py-2.5 px-3 text-right text-[#505A63]">${rec.sgaExpenseMillions?.toFixed(1) || '—'}M</td>
                              <td className="py-2.5 px-3 text-right font-bold text-[#9A3412]">{rec.sgaRatioPct?.toFixed(2) || '—'}%</td>
                              <td className="py-2.5 px-3 text-right text-[#111827] font-bold">
                                {rec.marketingEfficiencyRatio > 0 ? `${rec.marketingEfficiencyRatio.toFixed(2)}x` : 'Base Year'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </FlippableCard>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PILLAR 3: CONSUMER & COMMUNITY STRENGTH (SCORE: 7.28 / 10)               */}
      {/* ========================================================================= */}
      {(activePillar === 'ALL' || activePillar === 'COMMUNITY') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1F242F] text-white text-[11px] font-mono font-bold">
                PILLAR 3
              </span>
              <h3 className="text-lg font-bold text-[#111827] font-heading">
                Consumer & Community Strength (Score: {dimensionScores.consumerAndCommunityStrength} / 10)
              </h3>
            </div>
            <span className="text-xs text-[#505A63]">Loyalty Ecosystem (&gt;20M Members) · Comp Consistency · Traffic vs Ticket</span>
          </div>

          <div className="space-y-6">
            {/* 3 Submodules Stacked Vertically with Individual Flippable Evidence Cards */}
            <div className="space-y-6">
              {/* Submodule 3A: Loyalty Membership */}
              <FlippableCard
                title="Loyalty Membership & High-LTV Ecosystem"
                subtitle="Membership engagement, app downloads, and tier retention (>20M Members)"
                badgeText={`Score: ${consumer.loyaltyMembership.submoduleScore.toFixed(1)} / 10 (${consumer.loyaltyMembership.tier.split(':')[0]})`}
                badgeType="positive"
                evidences={consumer.loyaltyMembership.evidence}
              >
                <div className="space-y-4">
                  {/* Strategic Summary Box */}
                  <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Summary
                    </div>
                    <p className="text-xs font-medium text-[#111827] leading-relaxed">
                      {consumer.loyaltyMembership.strategicSummary}
                    </p>
                  </div>
                </div>
              </FlippableCard>

              {/* Submodule 3B: Comp Growth Consistency */}
              <FlippableCard
                title="Comparable Store Sales Growth Consistency"
                subtitle="Global comparable sales trajectory, regional momentum, and channel resilience"
                badgeText={`Score: ${consumer.compGrowthConsistency.submoduleScore.toFixed(1)} / 10 (${consumer.compGrowthConsistency.tier.split(':')[0]})`}
                badgeType="info"
                evidences={consumer.compGrowthConsistency.evidence}
              >
                <div className="space-y-4">
                  {/* Strategic Summary Box */}
                  <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Summary
                    </div>
                    <p className="text-xs font-medium text-[#111827] leading-relaxed">
                      {consumer.compGrowthConsistency.strategicSummary}
                    </p>
                  </div>
                </div>
              </FlippableCard>

              {/* Submodule 3C: Traffic vs Ticket Model */}
              <FlippableCard
                title="Traffic vs Ticket Dynamics"
                subtitle="Foot traffic trends, conversion rates, and basket size elasticity"
                badgeText={`Score: ${consumer.trafficVsTicket.submoduleScore.toFixed(1)} / 10 (${consumer.trafficVsTicket.tier.split(':')[0]})`}
                badgeType="negative"
                evidences={consumer.trafficVsTicket.evidence}
              >
                <div className="space-y-4">
                  {/* Strategic Summary Box */}
                  <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Summary
                    </div>
                    <p className="text-xs font-medium text-[#111827] leading-relaxed">
                      {consumer.trafficVsTicket.strategicSummary}
                    </p>
                  </div>
                </div>
              </FlippableCard>
            </div>

            {/* Analytical Synthesis Banner */}
            <div className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl text-xs text-[#505A63] leading-relaxed flex items-center gap-2">
              <span className="font-mono font-bold text-[10px] text-[#795900] tracking-wider uppercase shrink-0 bg-[#FBF3DC] px-2 py-0.5 rounded border border-[#F1DEC0]">
                Summary
              </span>
              <span>
                While foot traffic and conversion in North American physical retail have decelerated (comparable sales -3%), Lululemon’s proprietary mobile app and tiered loyalty programs sustain strong repeat purchasing and insulate against pure apparel commoditization.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PILLAR 4: COMPETITIVE POSITION & OPERATIONAL MOAT (SCORE: 7.44 / 10)     */}
      {/* ========================================================================= */}
      {(activePillar === 'ALL' || activePillar === 'OPERATIONS') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1F242F] text-white text-[11px] font-mono font-bold">
                PILLAR 4
              </span>
              <h3 className="text-lg font-bold text-[#111827] font-heading">
                Competitive Position & Operational Moat (Score: {dimensionScores.competitivePositionAndOperationalMoat} / 10)
              </h3>
            </div>
            <span className="text-xs text-[#505A63]">Competitive Risk Trend · Regional Diversification · Supply Chain Agility</span>
          </div>

          <div className="space-y-6">
            {/* 3 Submodules Stacked Vertically with Individual Flippable Evidence Cards */}
            <div className="space-y-6">
              {/* Submodule 4A: Competitive Risk Factor Trend */}
              <FlippableCard
                title="Competitive Risk Factor Trend"
                subtitle="Athletic apparel saturation, global conglomerates vs. niche entrants"
                badgeText={`Score: ${competitive.competitiveRiskFactorTrend.submoduleScore.toFixed(1)} / 10 (${competitive.competitiveRiskFactorTrend.tier.split(':')[0]})`}
                badgeType="info"
                evidences={competitive.competitiveRiskFactorTrend.evidence}
              >
                <div className="space-y-4">
                  {/* Strategic Summary Box */}
                  <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Summary
                    </div>
                    <p className="text-xs font-medium text-[#111827] leading-relaxed">
                      {competitive.competitiveRiskFactorTrend.strategicSummary}
                    </p>
                  </div>

                  {/* Key Competitive Pressure Vectors - Horizontal 3-Col Layout */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#8D969E] block font-bold">Key Competitive Pressures</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#111827] text-[11px]">Global Athletic Giants</span>
                          <span className="text-[10px] font-mono font-bold text-[#8D969E]">Scale Pressure</span>
                        </div>
                        <p className="text-[10.5px] text-[#505A63] leading-snug">
                          Vast capital, global retail footprint, and massive marketing budgets creating market share friction.
                        </p>
                      </div>

                      <div className="p-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#111827] text-[11px]">Niche Athleisure Entrants</span>
                          <span className="text-[10px] font-mono font-bold text-[#C05621]">Niche Erosion</span>
                        </div>
                        <p className="text-[10.5px] text-[#505A63] leading-snug">
                          Specialized women’s athletic apparel brands directly targeting core yoga, studio, and run franchises.
                        </p>
                      </div>

                      <div className="p-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#111827] text-[11px]">Tariff & De Minimis Friction</span>
                          <span className="text-[10px] font-mono font-bold text-[#C05621]">Cost Friction</span>
                        </div>
                        <p className="text-[10.5px] text-[#505A63] leading-snug">
                          Removal of customs exemptions increases order fulfillment duties, taxes, and import compliance costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FlippableCard>

              {/* Submodule 4B: Geographic Revenue & Sourcing Concentration */}
              <FlippableCard
                title="Geographic Revenue & Sourcing Concentration"
                subtitle="5-Year regional revenue distribution across United States, China, Canada, and global markets"
                badgeText={`Score: ${competitive.sourcingConcentration.submoduleScore.toFixed(1)} / 10 (${competitive.sourcingConcentration.tier.split(':')[0]})`}
                badgeType="info"
                evidences={competitive.sourcingConcentration.evidence}
              >
                <div className="space-y-4">
                  {/* Strategic Summary Box */}
                  <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Summary
                    </div>
                    <p className="text-xs font-medium text-[#111827] leading-relaxed">
                      {competitive.sourcingConcentration.strategicSummary}
                    </p>
                  </div>

                  {/* 5-Year Regional Revenue Selector & Full-Width Table */}
                  <div className="space-y-3 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#111827] font-heading">
                          5-Year Regional Revenue Breakdown
                        </span>
                        {selectedGeo && (
                          <span className="text-[11px] font-mono text-[#795900] bg-[#FBF3DC] px-2 py-0.5 rounded border border-[#F1DEC0] font-bold">
                            FY{selectedGeo.fiscalYear}: ${(selectedGeo.totalRevenueM / 1e3).toFixed(2)}B Total
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#8D969E] uppercase font-bold mr-1">Fiscal Year:</span>
                        {competitive.sourcingConcentration.geographicRevenue?.map((geo) => (
                          <button
                            key={geo.fiscalYear}
                            type="button"
                            onClick={() => setSelectedGeoYear(geo.fiscalYear)}
                            className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                              selectedGeoYear === geo.fiscalYear
                                ? 'bg-[#1F242F] text-white shadow-xs'
                                : 'bg-[#F1EEE7] text-[#505A63] hover:bg-[#E5E0D8]'
                            }`}
                          >
                            FY{geo.fiscalYear}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedGeo && (
                      <div className="overflow-x-auto border border-[#E5E0D8] rounded-xl bg-white shadow-2xs">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-[#E5E0D8] bg-[#F1EEE7]/70 text-[10px] font-semibold text-[#505A63] uppercase tracking-wider">
                              <th className="py-2.5 px-4">Geographic Region</th>
                              <th className="py-2.5 px-4 text-right">Net Revenue ($M)</th>
                              <th className="py-2.5 px-4 text-right">Revenue Share (%)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E5E0D8] text-xs font-mono tabular-nums">
                            {selectedGeo.segments.map((seg: any, idx: number) => (
                              <tr key={idx} className="hover:bg-[#FBF9F5] transition-colors">
                                <td className="py-2.5 px-4 font-semibold text-[#111827] font-sans">
                                  {seg.region}
                                </td>
                                <td className="py-2.5 px-4 text-right font-bold text-[#111827]">
                                  ${seg.revenueM >= 1000 ? `${(seg.revenueM / 1e3).toFixed(2)}B` : `${seg.revenueM.toFixed(1)}M`}
                                </td>
                                <td className="py-2.5 px-4 text-right font-bold text-[#795900]">
                                  {seg.sharePercent.toFixed(1)}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </FlippableCard>

              {/* Submodule 4C: Supply Chain Speed & Fast-Chase Moat */}
              <FlippableCard
                title="Supply Chain Speed & Fast-Chase Moat"
                subtitle="Product development lead time compression and dynamic in-season replenishment"
                badgeText={`Score: ${competitive.supplyChainSpeedAndChase.submoduleScore.toFixed(1)} / 10 (${competitive.supplyChainSpeedAndChase.tier.split(':')[0]})`}
                badgeType="positive"
                evidences={competitive.supplyChainSpeedAndChase.evidence}
              >
                <div className="space-y-4">
                  {/* Strategic Summary Box */}
                  <div className="p-3.5 bg-[#FBF3DC] border border-[#F1DEC0] rounded-xl text-xs text-[#795900] leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] font-mono mb-1 text-[#795900]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Summary
                    </div>
                    <p className="text-xs font-medium text-[#111827] leading-relaxed">
                      {competitive.supplyChainSpeedAndChase.strategicSummary}
                    </p>
                  </div>
                </div>
              </FlippableCard>
            </div>

            {/* Analytical Synthesis Banner */}
            <div className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl text-xs text-[#505A63] leading-relaxed flex items-center gap-2">
              <span className="font-mono font-bold text-[10px] text-[#795900] tracking-wider uppercase shrink-0 bg-[#FBF3DC] px-2 py-0.5 rounded border border-[#F1DEC0]">
                Summary
              </span>
              <span>
                Lululemon pairs industry-leading supply chain agility (10.0 score, 12–14 month dev cycle, +20% in-season chase volume) with accelerating international diversification (China revenue reaching 28.4% in FY25). This operational speed significantly cushions domestic traffic softness and vendor/fabric concentration risks in Taiwan.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
