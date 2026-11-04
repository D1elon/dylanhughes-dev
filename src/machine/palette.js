// The machine's palette, shared with the site: royal blue on black and white. Strings for the canvases, numbers for
// materials and lights.
export const PALETTE = {
  royal: '#2B59FF', // the accent
  light: '#6E8CFF', // a lighter tint, for glows and small lit text
  deep: '#1F46E0',
  ice: '#A9BFFF', // a lit display dot
  black: '#06070A',
  black1: '#0B0C0F',
  black2: '#14161A',
  black3: '#262A31',
  white: '#FFFFFF',
  paper: '#F5F6F8',
  paper2: '#F4F5F7',
  grey: '#9AA1AB',
};

export const hex = name => parseInt(PALETTE[name].slice(1), 16);
// An rgba() helper for a palette colour: ROYAL(0.5) and so on.
export const rgba = name => {
  const n = hex(name), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return a => `rgba(${r}, ${g}, ${b}, ${a})`;
};
