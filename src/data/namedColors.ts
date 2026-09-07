export type NamedColor = {
  name: string;
  slug: string;
  hex: string;
};

export const NAMED_COLORS: NamedColor[] = [
  { name: 'Rouge', slug: 'rouge', hex: '#E53935' },
  { name: 'Bleu', slug: 'bleu', hex: '#1E88E5' },
  { name: 'Vert', slug: 'vert', hex: '#43A047' },
  { name: 'Jaune', slug: 'jaune', hex: '#FDD835' },
  { name: 'Orange', slug: 'orange', hex: '#FB8C00' },
  { name: 'Violet', slug: 'violet', hex: '#8E24AA' },
  { name: 'Rose', slug: 'rose', hex: '#EC407A' },
  { name: 'Noir', slug: 'noir', hex: '#111111' },
  { name: 'Blanc', slug: 'blanc', hex: '#FFFFFF' },
  { name: 'Gris', slug: 'gris', hex: '#757575' },
  { name: 'Marron', slug: 'marron', hex: '#6D4C41' },
];

export const IDLE_BACKGROUND = '#E2E8F0';

export function pickNamedColor(excludeSlug?: string): NamedColor {
  const pool = excludeSlug
    ? NAMED_COLORS.filter((color) => color.slug !== excludeSlug)
    : NAMED_COLORS;
  const color = pool[Math.floor(Math.random() * pool.length)];

  if (!color) {
    throw new Error('No named colours available');
  }

  return color;
}
