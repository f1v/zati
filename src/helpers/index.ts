export enum SPACINGOLD {
  xxs = 2,
  xs = 4,
  sm = 8,
  md = 16,
  lg = 24,
  xl = 48,
  xxl = 64,
}

const DEFAULT_SPACING: number = 16;

export enum SPACING {
  xxs = DEFAULT_SPACING / 8,
  xs = DEFAULT_SPACING / 4,
  sm = DEFAULT_SPACING / 2,
  md = DEFAULT_SPACING,
  lg = DEFAULT_SPACING * 2,
  xl = DEFAULT_SPACING * 3,
  xxl = DEFAULT_SPACING * 4,
}
