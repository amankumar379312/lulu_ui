import React from 'react';
import { X, ExternalLink, Quote, FileText, CheckCircle2 } from 'lucide-react';
import { ScoreRing } from './ScoreRing.tsx';
import { StatusBadge } from './StatusBadge.tsx';
import { ALL_EVIDENCE, EvidenceItem } from '../data/luluData.ts';

export interface WhyModalData {
  title: string;
  score: number;
  maxScore?: number;
  tier?: string;
  classification?: string;
  keySignal?: string;
  strategicSummary?: string;
  submoduleScores?: { name: string; score: number; tier?: string }[];
  evidence?: EvidenceItem[];
  evidenceModuleFilter?: string;
}

interface WhyModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WhyModalData | null;
  onNavigateToModule?: (tab: string) => void;
}

export const WhyModal: React.FC<WhyModalProps> = ({
  isOpen,
  onClose,
  data,
  onNavigateToModule,
}) => {
  if (!isOpen || !data) return null;

  // Find relevant evidence if not provided directly
  const displayEvidence = data.evidence || (
    data.evidenceModuleFilter 
      ? ALL_EVIDENCE.filter(e => e.module === data.evidenceModuleFilter || e.submodule?.toLowerCase().includes(data.title.toLowerCase()))
      : []
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5E0D8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E0D8] bg-[#FBF9F5]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#795900]" />
            <div>
              <h3 className="text-base font-bold text-[#111827] tracking-tight font-heading">
                Forensic Diagnostic: {data.title}
              </h3>
              <p className="text-xs text-[#505A63]">
                Score Methodology, Weighted Drivers & Audited Footnote Evidence
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8D969E] hover:text-[#111827] hover:bg-[#F1EEE7] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top Score Summary Banner */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-4 rounded-xl bg-[#FBF9F5] border border-[#E5E0D8]">
            <ScoreRing
              score={data.score}
              max={data.maxScore || 10}
              size={90}
              strokeWidth={7}
            />
            <div className="flex-1 space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-lg font-bold text-[#111827] font-heading">
                  {data.title}
                </span>
                <StatusBadge status={data.classification || data.tier || "Evaluated"} />
              </div>
              {data.keySignal && (
                <div className="text-xs font-semibold text-[#795900] font-mono">
                  Key Signal: {data.keySignal}
                </div>
              )}
              {data.strategicSummary && (
                <p className="text-xs text-[#505A63] leading-relaxed">
                  {data.strategicSummary}
                </p>
              )}
            </div>
          </div>

          {/* Submodule Breakdown if available */}
          {data.submoduleScores && data.submoduleScores.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#505A63] mb-2.5 flex items-center gap-1.5 font-heading">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                Contributing Submodule Diagnostic Breakdown
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {data.submoduleScores.map((sub, idx) => (
                  <div key={idx} className="p-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg flex items-center justify-between">
                    <div className="pr-2">
                      <div className="text-xs font-semibold text-[#111827]">{sub.name}</div>
                      {sub.tier && <div className="text-[11px] text-[#8D969E] truncate">{sub.tier}</div>}
                    </div>
                    <div className="font-mono text-sm font-bold text-[#111827] tabular-nums shrink-0">
                      {sub.score.toFixed(1)} <span className="text-[10px] text-[#8D969E] font-normal">/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Traceable Evidence Quotes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#505A63] mb-2.5 flex items-center gap-1.5 font-heading">
              <Quote className="w-3.5 h-3.5 text-[#795900]" />
              Supporting Filings & Transcripts Evidence ({displayEvidence.length} Citations)
            </h4>
            {displayEvidence.length === 0 ? (
              <div className="p-4 rounded-lg bg-[#FBF9F5] text-xs text-[#8D969E] border border-[#E5E0D8]">
                No explicit quotes indexed for this submodule.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {displayEvidence.map((ev, i) => (
                  <div key={i} className="p-3.5 bg-[#FBF9F5] hover:bg-[#F1EEE7]/80 transition-colors border border-[#E5E0D8] rounded-xl">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#795900]">
                        <FileText className="w-3.5 h-3.5 text-[#795900]" />
                        {ev.source}
                      </span>
                      {ev.submodule && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E5E0D8] text-[#505A63]">
                          {ev.submodule}
                        </span>
                      )}
                    </div>
                    <blockquote className="text-xs text-[#111827] italic border-l-2 border-[#795900]/40 pl-3 leading-relaxed">
                      "{ev.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#E5E0D8] bg-[#FBF9F5]">
          <span className="text-[11px] text-[#8D969E] font-mono">
            Audited SEC 10-K, 10-Q & Transcripts
          </span>
          <div className="flex items-center gap-2">
            {onNavigateToModule && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToModule(data.title);
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#795900] hover:bg-[#F1EEE7] rounded-full transition-colors cursor-pointer"
              >
                Deep-Dive Module <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#111827] hover:bg-[#1F242F] rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
