export type Currency = 'INR' | 'USD' | 'AED' | 'GBP' | 'EUR';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  AED: 'AED ',
  GBP: '£',
  EUR: '€',
};

// Approximate exchange rates relative to INR base
const RATES: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,
  AED: 0.044,
  GBP: 0.0095,
  EUR: 0.011,
};

export function convertPrice(inrPrice: number, currency: Currency): string {
  const converted = inrPrice * RATES[currency];
  const symbol    = CURRENCY_SYMBOLS[currency];
  if (currency === 'INR') {
    return `${symbol}${converted.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
}

export async function detectCurrency(): Promise<Currency> {
  try {
    const res  = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    const data = await res.json() as { country_code?: string };
    const map: Record<string, Currency> = {
      IN: 'INR',
      US: 'USD',
      AE: 'AED',
      SA: 'AED',
      GB: 'GBP',
      DE: 'EUR',
      FR: 'EUR',
      NL: 'EUR',
      IT: 'EUR',
      ES: 'EUR',
    };
    return map[data.country_code ?? ''] ?? 'USD';
  } catch {
    return 'USD';
  }
}
