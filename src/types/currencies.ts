export interface CurrencyInfo {
  code: string;
  name: string;
}

export const currencyNames: Record<string, string> = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound Sterling",
  JPY: "Japanese Yen",
  //... add more currencies as needed
};
