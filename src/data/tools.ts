export type Tool = {
  href: string;
  label: string;
  match: string;
  description: string;
};

export const TOOLS: Tool[] = [
  {
    href: '/',
    label: 'Générateur de couleur aléatoire',
    match: '/',
    description: 'Générez une couleur HEX au hasard et copiez son code HEX, RGB ou HSL.',
  },
  {
    href: '/outils/choisir-une-couleur-au-hasard',
    label: 'Choisir une couleur au hasard',
    match: '/outils/choisir-une-couleur-au-hasard',
    description: 'Laissez le hasard choisir une couleur nommée : rouge, bleu, vert, jaune…',
  },
  {
    href: '/outils/tirage-au-sort-couleur',
    label: 'Tirage au sort de couleur',
    match: '/outils/tirage-au-sort-couleur',
    description: 'Piochez une couleur dans votre liste, pour la classe, un jeu ou un atelier.',
  },
  {
    href: '/outils/palette-couleurs',
    label: 'Générateur de palette de couleurs',
    match: '/outils/palette-couleurs',
    description: 'Générez une palette de 5 couleurs et copiez-la en HEX, RGB, HSL ou CMYK.',
  },
  {
    href: '/outils/convertisseur-couleur',
    label: 'Convertisseur de couleur',
    match: '/outils/convertisseur-couleur',
    description: 'Convertissez une couleur entre HEX, RGB, HSL et CMYK, puis copiez le format dont vous avez besoin.',
  },
];

export function currentPath(pathname: string): string {
  return pathname.replace(/\/$/, '') || '/';
}
