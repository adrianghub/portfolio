export const DONATION_VALUE = parseInt(
  process.env.NEXT_PUBLIC_DONATION_VALUE || '300',
  10
);

export const MAX_DONATION_VALUE = parseInt(
  process.env.NEXT_PUBLIC_DONATION_VALUE || '30000',
  10
);

export const MIN_INPUT_VALUE = 1;

export const PRESETS = [1, 3, 5];
