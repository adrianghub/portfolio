export const DONATION_VALUE = parseInt(
  process.env.NEXT_PUBLIC_DONATION_VALUE || '100',
  10
);

export const MAX_DONATION_VALUE = parseInt(
  process.env.NEXT_PUBLIC_DONATION_VALUE || '100',
  10
);

export const MIN_INPUT_VALUE = 0;

export const PRESETS = [1, 3, 5];

export const STRIPE_API_KEY = process.env.STRIPE_API_KEY as string;
