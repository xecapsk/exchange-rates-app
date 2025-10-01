export interface ExchangeRate {
  id: number;
  base_currency: string;
  target_currency: string;
  rate: number;
  recorded_at: string;
}

export interface HistoricalRate {
  recorded_at: string;
  rate: number;
}
