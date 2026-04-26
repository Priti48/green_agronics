export interface Market {
  country: string;
  code: string;
  name: string;
}

export const markets: Market[] = [
  { country: "us", code: "US", name: "United States" },
  { country: "uk", code: "UK", name: "United Kingdom" },
  { country: "uae", code: "AE", name: "United Arab Emirates" },
  { country: "india", code: "IN", name: "India" },
];

export function getMarketByCountry(country: string): Market | undefined {
  return markets.find((m) => m.country === country);
}

export function getAllMarketCountries(): string[] {
  return markets.map((m) => m.country);
}
