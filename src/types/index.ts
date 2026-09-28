export type TabType = 
  | 'overview' 
  | 'pricingPower' 
  | 'catalyst' 
  | 'moat' 
  | 'structuralCyclical' 
  | 'downsideFloor';

export type TimeRangeFilter = '5Y' | '10Y' | 'MAX';

export interface ScoreMeta {
  score: number;
  max?: number;
  tier?: string;
  classification?: string;
  summary?: string;
  status?: string;
}
