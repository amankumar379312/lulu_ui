import React, { useState, useMemo } from 'react';
import { ALL_EVIDENCE, EvidenceItem } from '../data/luluData.ts';
import { StatusBadge } from './StatusBadge.tsx';
import { Search, Filter, FileText, Quote, ChevronDown, ChevronUp, ShieldCheck, Database } from 'lucide-react';

interface EvidenceExplorerProps {
  initialSearchQuery?: string;
}

export const EvidenceExplorer: React.FC<EvidenceExplorerProps> = ({ initialSearchQuery = '' }) => {
  const [search, setSearch] = useState(initialSearchQuery);
  const [selectedModule, setSelectedModule] = useState<string>('All');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('All');
  const [expandedQuotes, setExpandedQuotes] = useState<Record<number, boolean>>({});

  // Sync external search query
  React.useEffect(() => {
    if (initialSearchQuery) {
      setSearch(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const toggleQuote = (index: number) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const modulesList = ['All', 'Pricing Power', 'Catalyst', 'Moat Durability', 'Structural vs Cyclical', 'Downside Floor'];
  const sourceTypes = ['All', '10-K', '10-Q', 'Transcript'];

  const filteredEvidence = useMemo(() => {
    return ALL_EVIDENCE.filter(item => {
      // Module filter
      if (selectedModule !== 'All' && item.module !== selectedModule) {
        return false;
      }
      // Source filter
      if (selectedSourceType !== 'All') {
        if (!item.source.toLowerCase().includes(selectedSourceType.toLowerCase())) {
          return false;
        }
      }
      // Text search
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesQuote = item.quote.toLowerCase().includes(q);
        const matchesSource = item.source.toLowerCase().includes(q);
        const matchesSubmodule = item.submodule ? item.submodule.toLowerCase().includes(q) : false;
        const matchesModule = item.module ? item.module.toLowerCase().includes(q) : false;
        if (!matchesQuote && !matchesSource && !matchesSubmodule && !matchesModule) {
          return false;
        }
      }
      return true;
    });
  }, [search, selectedModule, selectedSourceType]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Evidence Explorer Hero */}
      <div className="p-6 bg-white border border-[#dee1e6] rounded-xl shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#eef0f3]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052ff]">
                Traceability Repository
              </span>
              <StatusBadge status="SEC Audited" size="xs" />
            </div>
            <h2 className="text-xl font-bold text-[#0a0b0d] tracking-tight">
              Forensic Evidence Explorer & Verification Ledger
            </h2>
            <p className="text-xs text-[#5b616e] max-w-2xl mt-1 leading-relaxed">
              Verbatim disclosures, management transcripts, and audited financial statements underpinning every quantitative score and diagnostic tier.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#f7f7f7] border border-[#eef0f3] rounded-lg text-center">
              <div className="text-[10px] text-[#7c828a] uppercase font-semibold">Indexed Citations</div>
              <div className="font-mono text-lg font-bold text-[#0a0b0d]">{ALL_EVIDENCE.length}</div>
            </div>
            <div className="p-3 bg-[#f7f7f7] border border-[#eef0f3] rounded-lg text-center">
              <div className="text-[10px] text-[#7c828a] uppercase font-semibold">Filtered Matches</div>
              <div className="font-mono text-lg font-bold text-[#0052ff]">{filteredEvidence.length}</div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Module Selector Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-[#7c828a] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Module:
            </span>
            {modulesList.map(mod => (
              <button
                key={mod}
                onClick={() => setSelectedModule(mod)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedModule === mod
                    ? 'bg-[#0052ff] text-white shadow-xs'
                    : 'bg-[#f7f7f7] text-[#5b616e] hover:text-[#0a0b0d] hover:bg-[#eef0f3]'
                }`}
              >
                {mod}
              </button>
            ))}
          </div>

          {/* Source & Search */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-[#5b616e]">
              <span className="text-[#7c828a]">Source:</span>
              <select
                value={selectedSourceType}
                onChange={(e) => setSelectedSourceType(e.target.value)}
                className="bg-[#f7f7f7] text-[#0a0b0d] text-xs py-1 px-2 rounded border border-[#dee1e6] focus:outline-hidden"
              >
                {sourceTypes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-[#7c828a]" />
              <input
                type="text"
                placeholder="Search quotes, metrics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1 text-xs bg-[#f7f7f7] text-[#0a0b0d] placeholder-[#7c828a] rounded border border-[#dee1e6] focus:border-[#0052ff] focus:outline-hidden"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2 top-1.5 text-[10px] text-[#7c828a] hover:text-[#0a0b0d]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Table */}
      <div className="border border-[#dee1e6] bg-white rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#dee1e6] bg-[#f7f7f7]/70 text-[11px] font-semibold text-[#7c828a] uppercase tracking-wider">
                <th className="py-3 px-4 w-44">Module & Submodule</th>
                <th className="py-3 px-4 w-48">Source Filing / Call</th>
                <th className="py-3 px-6">Verbatim Disclosure / Metric Evidence</th>
                <th className="py-3 px-3 w-28 text-right">Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eef0f3] text-xs">
              {filteredEvidence.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-[#7c828a]">
                    No evidence disclosures match your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredEvidence.map((item, idx) => {
                  const isExpanded = expandedQuotes[idx] || false;
                  const isLong = item.quote.length > 150;
                  const displayQuote = isLong && !isExpanded 
                    ? `${item.quote.slice(0, 150)}...` 
                    : item.quote;

                  return (
                    <tr key={idx} className="hover:bg-[#f7f7f7]/60 transition-colors">
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-[#0a0b0d]">{item.module}</div>
                        {item.submodule && (
                          <div className="text-[11px] text-[#5b616e] mt-0.5">{item.submodule}</div>
                        )}
                      </td>

                      <td className="py-4 px-4 align-top">
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#0052ff] bg-[#eff6ff] px-2 py-0.5 rounded border border-[#bfdbfe]">
                          <FileText className="w-3 h-3 shrink-0" />
                          {item.source}
                        </span>
                      </td>

                      <td className="py-4 px-6 align-top">
                        <blockquote className="text-xs text-[#0a0b0d] italic leading-relaxed border-l-2 border-[#0052ff]/40 pl-3">
                          "{displayQuote}"
                        </blockquote>
                        {isLong && (
                          <button
                            onClick={() => toggleQuote(idx)}
                            className="text-[11px] text-[#0052ff] font-semibold hover:underline mt-1.5 flex items-center gap-1"
                          >
                            {isExpanded ? (
                              <>Show Less <ChevronUp className="w-3 h-3" /></>
                            ) : (
                              <>Read Full Disclosure <ChevronDown className="w-3 h-3" /></>
                            )}
                          </button>
                        )}
                      </td>

                      <td className="py-4 px-3 align-top text-right">
                        <span className="text-[10px] text-[#05b169] font-medium bg-[#f0fdf4] border border-[#bbf7d0] px-2 py-0.5 rounded">
                          Verified
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
