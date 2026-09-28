import React, { useState } from 'react';
import { FileText, ArrowRightLeft, ShieldCheck, Quote, ChevronRight } from 'lucide-react';

export interface EvidenceItem {
  source?: string;
  filingDate?: string;
  quote?: string;
  context?: string;
  text?: string;
  title?: string;
  excerpt?: string;
}

interface FlippableCardProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  badgeType?: 'positive' | 'warning' | 'neutral' | 'info' | 'danger';
  evidences?: EvidenceItem[];
  children: React.ReactNode; // The front analysis content
  className?: string;
  extraHeaderActions?: React.ReactNode;
}

export const FlippableCard: React.FC<FlippableCardProps> = ({
  title,
  subtitle,
  badgeText,
  badgeType = 'neutral',
  evidences = [],
  children,
  className = '',
  extraHeaderActions,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getBadgeClass = () => {
    switch (badgeType) {
      case 'positive':
        return 'bg-[#E8F5E9] text-[#15803D] border-[#C8E6C9]';
      case 'danger':
        return 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]';
      case 'warning':
        return 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]';
      case 'info':
        return 'bg-[#FBF3DC] text-[#795900] border-[#F1DEC0]';
      default:
        return 'bg-[#F1EEE7] text-[#1F242F] border-[#E5E0D8]';
    }
  };

  return (
    <div className={`bg-[#FFFFFF] border border-[#E5E0D8] rounded-xl shadow-xs transition-all duration-300 overflow-hidden ${className}`}>
      {/* Card Header */}
      <div className="p-4 sm:p-5 border-b border-[#E5E0D8] bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight font-heading">
              {title}
            </h3>
            {badgeText && (
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getBadgeClass()}`}>
                {badgeText}
              </span>
            )}
            {isFlipped && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FBF3DC] text-[#795900] border border-[#F1DEC0]">
                <ShieldCheck className="w-3 h-3 text-[#795900]" />
                Evidence View
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-[#505A63]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
          {extraHeaderActions}
          
          {/* Flip / Show Evidence Toggle Button */}
          {evidences && evidences.length > 0 && (
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                isFlipped
                  ? 'bg-[#1F242F] text-white hover:bg-[#111827] shadow-xs'
                  : 'bg-[#FBF3DC] hover:bg-[#F3E5C3] text-[#795900] border border-[#E8D7AA] shadow-xs'
              }`}
              title={isFlipped ? "Return to Analysis View" : "Flip card to view evidence"}
            >
              <ArrowRightLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${isFlipped ? 'rotate-180' : ''}`} />
              <span>{isFlipped ? 'View Chart' : 'Show Evidence'}</span>
              <span className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                isFlipped ? 'bg-white/20 text-white' : 'bg-[#795900]/10 text-[#795900]'
              }`}>
                {evidences.length}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Card Body - Dual Mode with Smooth Fade/Flip */}
      <div className="p-4 sm:p-6 transition-all duration-300">
        {!isFlipped ? (
          <div className="animate-in fade-in duration-200">
            {children}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-top-1 duration-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#795900]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#795900]">
                  Supporting Evidence ({evidences.length} Points)
                </span>
              </div>
              <span className="text-[11px] text-[#505A63]">
                Reported qualitative and quantitative indicators
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {evidences.map((ev, idx) => {
                const title = ev.source || ev.title || `Evidence Point ${idx + 1}`;
                const quote = ev.quote || ev.text || ev.excerpt || '';

                return (
                  <div 
                    key={idx} 
                    className="p-3.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg hover:border-[#D8D2C5] transition-colors relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-[#E5E0D8]">
                        <span className="text-[11px] font-bold text-[#111827] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#795900]" />
                          {title}
                        </span>
                        {ev.filingDate && (
                          <span className="text-[10px] font-mono text-[#8D969E]">{ev.filingDate}</span>
                        )}
                      </div>

                      <div className="relative pl-3 text-xs text-[#1F242F] leading-relaxed italic border-l-2 border-[#C2A45C]">
                        <Quote className="w-3 h-3 text-[#A17A16]/40 absolute -top-1 -left-2 fill-current" />
                        "{quote}"
                      </div>
                    </div>

                    {ev.context && (
                      <div className="mt-2.5 pt-2 border-t border-[#E5E0D8] text-[11px] text-[#505A63]">
                        {ev.context}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick return footer bar */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1F242F] bg-[#F1EEE7] hover:bg-[#E5E2DB] rounded-full transition-colors cursor-pointer border border-[#E5E0D8]"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                Return to Analysis View
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
