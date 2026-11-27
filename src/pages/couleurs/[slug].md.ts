import type { APIRoute } from 'astro';
import {
  ALL_COLOR_PAGES,
  capitalize,
  colorBySlug,
  colorHref,
  familyOf,
  isFamily,
  listNames,
  ofColor,
  shadesOf,
} from '../../data/couleurs';
import { hexToCmyk, hexToHsl, hexToRgb } from '../../utils/color';

const origin = 'https://generateurdecouleur.com';

export function getStaticPaths() {
  return ALL_COLOR_PAGES.map((color) => ({ params: { slug: color.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const color = colorBySlug(params.slug as string);
  const family = familyOf(color);
  const shades = shadesOf(family.slug).filter((shade) => shade.slug !== color.slug);
  const pairs = color.pairsWith.map(colorBySlug);
  const heading = isFamily(color) ? `Couleur ${color.adjective}` : color.name;

  const lines = [
    `# ${heading}`,
    '',
    `Page : ${origin}${colorHref(color)}`,
    '',
    color.description,
    '',
    `## Codes couleur ${ofColor(color.withArticle)}`,
    '',
    `- HEX : ${color.hex}`,
    `- RGB : ${hexToRgb(color.hex)}`,
    `- HSL : ${hexToHsl(color.hex)}`,
    `- CMYK : ${hexToCmyk(color.hex)}`,
    '',
    `Les noms de couleur ne sont pas normalisés : ces codes sont des valeurs de référence courantes.`,
    '',
    `## Couleurs qui vont avec ${color.withArticle}`,
    '',
    ...pairs.map((pair) => `- [${pair.name}](${origin}${colorHref(pair)}.md) : ${pair.hex}`),
    '',
    `Palette à partir ${ofColor(color.withArticle)} : ${origin}/outils/palette-couleurs?c=${color.hex.replace('#', '')}`,
  ];

  if (!isFamily(color)) {
    lines.push('', `Famille : [${family.name}](${origin}${colorHref(family)}.md)`);
  }
  if (shades.length > 0) {
    lines.push(
      '',
      `## ${isFamily(color) ? 'Nuances' : 'Autres nuances'} de ${family.name.toLowerCase()}`,
      '',
      `${capitalize(listNames(shades))}.`,
      '',
      ...shades.map((shade) => `- [${shade.name}](${origin}${colorHref(shade)}.md) : ${shade.hex}`),
    );
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
