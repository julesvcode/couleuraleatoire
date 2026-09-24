import type { APIRoute } from 'astro';
import { COLOR_FAMILIES, colorHref, shadesOf } from '../data/couleurs';

const origin = 'https://generateurdecouleur.com';

export const GET: APIRoute = () => {
  const lines = [
    '# Couleurs : codes, nuances et palettes',
    '',
    `Page : ${origin}/couleurs`,
    '',
    'Codes HEX, RGB, HSL et CMYK de couleurs nommées en français, avec les couleurs qui vont avec. Les noms de couleur ne sont pas normalisés : les codes sont des valeurs de référence courantes.',
  ];

  for (const family of COLOR_FAMILIES) {
    lines.push(
      '',
      `## [Couleur ${family.adjective}](${origin}${colorHref(family)}.md) : ${family.hex}`,
      '',
      ...shadesOf(family.slug).map((shade) => `- [${shade.name}](${origin}${colorHref(shade)}.md) : ${shade.hex}`),
    );
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
