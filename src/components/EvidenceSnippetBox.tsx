import React from 'react';
import { Quote, FileText, CheckCircle2 } from 'lucide-react';

export interface EvidenceItem {
  source: string;
  quote: string;
  context?: string;
  verificationStatus?: string;
}

interface EvidenceSnippetBoxProps {
  title?: string;
  evidences: EvidenceItem[];
  compact?: boolean;
}

export const EvidenceSnippetBox: React.FC<EvidenceSnippetBoxProps> = ({
  title = 'Verified SEC Filing Evidence',
  evidences,
  compact = false,
}) => {
  if (!evidences || evidences.length === 0) return null;

  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 flex flex-col justify-between space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-[#e2e8f0]">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0052ff]">
          <Quote className="w-3.5 h-3.5" />
          <span>{title}</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#16a34a] bg-[#f0fdf4] px-2 py-0.5 rounded border border-[#bbf7d0]">
          <CheckCircle2 className="w-3 h-3" />
          Verified Source
        </span>
      </div>

      <div className={`space-y-2.5 overflow-y-auto ${compact ? 'max-h-48' : 'max-h-72'} pr-1 scrollbar-thin`}>
        {evidences.map((ev, idx) => (
          <div
            key={idx}
            className="p-3 bg-white border border-[#e2e8f0] rounded-lg shadow-2xs space-y-1.5 transition-all hover:border-[#cbd5e1]"
          >
            <div className="flex items-center justify-between text-[11px]">
              <span className="inline-flex items-center gap-1 font-mono font-semibold text-[#0f172a] bg-[#f1f5f9] px-2 py-0.5 rounded">
                <FileText className="w-3 h-3 text-[#64748b]" />
                {ev.source}
              </span>
              {ev.context && (
                <span className="text-[10px] text-[#64748b] truncate max-w-[160px]" title={ev.context}>
                  {ev.context}
                </span>
              )}
            </div>
            <p className="text-xs text-[#334155] italic leading-relaxed pl-2 border-l-2 border-[#0052ff]/40">
              "{ev.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
