// Sampled from src/assets/imgs/ies_logo_notext.webp — see CLAUDE.md § Theming.
export const IES_NAVY = '#125484';
export const IES_BLUE = '#366BAF';
export const IES_SKY = '#36A1D2';
export const IES_ORANGE = '#F3762D';

// Editorial display stack for the News & Events section headings — system
// fonts only (no webfont load). Keeps the "masthead" feel from the design
// mockup without affecting typography anywhere else in the app.

// IES_NAVY is too dark to read as text/icon color on a dark card surface —
// swap it for IES_SKY there instead of accenting every color individually.
export const accentForSurface = (color: string, dark?: boolean) =>
  dark && color === IES_NAVY ? IES_SKY : color;

// Shared "floating card" elevation used across the redesigned sections.
export const IES_SHADOW_LIGHT = '0 18px 40px -22px rgba(32,30,43,0.35)';
export const IES_SHADOW_DARK = '0 18px 44px -20px rgba(0,0,0,0.55)';
