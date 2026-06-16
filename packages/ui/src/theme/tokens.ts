// ─── Primitive Color Palette ────────────────────────────────────────────────
export const palette = {
  // Dark base
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate700: '#334155',
  slate600: '#475569',
  slate500: '#64748b',
  slate400: '#94a3b8',
  slate300: '#cbd5e1',
  slate100: '#f1f5f9',

  // Accent
  mint500: '#10b981',
  mint400: '#34d399',
  mint300: '#6ee7b7',

  amber500: '#f59e0b',
  amber400: '#fbbf24',

  rose500: '#f43f5e',

  // Neutral "Ick" reskin spectrum (low-threat)
  neutral800: '#292524',
  neutral700: '#44403c',
  neutral600: '#57534e',
  neutral400: '#a8a29e',
} as const;

// ─── Semantic Color Tokens ───────────────────────────────────────────────────
export const colors = {
  bgPrimary: palette.slate900,
  bgCard: palette.slate800,
  bgCardMuted: palette.slate700,      // Soft-Muted state (opacity applied separately)
  bgIckCard: palette.neutral800,      // "Ick" filter low-threat reskin

  textPrimary: palette.slate100,
  textSecondary: palette.slate400,
  textMuted: palette.slate500,

  accentSuccess: palette.mint500,
  accentWarning: palette.amber500,

  badgeLow: palette.slate600,
  badgeMedium: palette.amber500,
  badgeHigh: palette.rose500,

  border: palette.slate700,
} as const;

// ─── Primitive Spring Configs ────────────────────────────────────────────────
export const springs = {
  // Button3D press — snappy 80ms collapse
  buttonPress: {
    mass: 1,
    damping: 20,
    stiffness: 400,
  },

  // TactileCheckbox — spec: mass 1, stiffness 300, damping 15
  checkboxToggle: {
    mass: 1,
    stiffness: 300,
    damping: 15,
  },

  // ProgressBar overshoot — elastic with deliberate overshoot
  progressBar: {
    mass: 1,
    stiffness: 180,
    damping: 12,
  },

  // Card expand/collapse — smooth morph
  cardExpand: {
    mass: 1,
    stiffness: 250,
    damping: 22,
  },

  // ActionChainDeck horizontal wipe
  deckTransition: {
    mass: 1,
    stiffness: 350,
    damping: 30,
  },
} as const;

// ─── Spacing & Layout ────────────────────────────────────────────────────────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radii = {
  sm: 6,
  md: 12,
  lg: 18,
  full: 999,
} as const;

export const typography = {
  sizeSm: 13,
  sizeMd: 16,
  sizeLg: 20,
  sizeXl: 24,
  weightRegular: '400' as const,
  weightMedium: '500' as const,
  weightBold: '700' as const,
} as const;
