export type ColorPage = {
  slug: string;
  name: string;
  withArticle: string;
  hex: string;
  family: string;
  description: string;
  pairsWith: string[];
};

export type ColorFamily = ColorPage & {
  adjective: string;
};

export const COLOR_FAMILIES: ColorFamily[] = [
  {
    slug: 'bleu',
    name: 'Bleu',
    adjective: 'bleue',
    withArticle: 'le bleu',
    hex: '#0000FF',
    family: 'bleu',
    description: "Le bleu arrive en tête de la plupart des sondages sur les couleurs préférées des Français. Il évoque le calme, la confiance et la mer, ce qui explique sa présence dans tant de logos, d'uniformes et de chambres. Ses nuances vont du bleu ciel, presque blanc, au bleu nuit, presque noir.",
    pairsWith: ['blanc', 'orange', 'beige-sable', 'gris-perle'],
  },
  {
    slug: 'rouge',
    name: 'Rouge',
    adjective: 'rouge',
    withArticle: 'le rouge',
    hex: '#FF0000',
    family: 'rouge',
    description: "Couleur de l'énergie, de la passion et de l'alerte, le rouge attire l'œil avant toute autre couleur. On l'utilise pour les boutons importants, les panneaux et les accents en décoration. Plus sombre, il devient bordeaux ; plus orangé, il tire vers le rouge brique.",
    pairsWith: ['blanc', 'noir', 'gris-anthracite', 'bleu-marine'],
  },
  {
    slug: 'vert',
    name: 'Vert',
    adjective: 'verte',
    withArticle: 'le vert',
    hex: '#008000',
    family: 'vert',
    description: "Le vert est la couleur de la nature, du végétal et, en design, de la validation. C'est aussi l'une des couleurs les plus présentes en décoration depuis quelques années, surtout dans ses versions douces comme le vert sauge ou le vert d'eau.",
    pairsWith: ['blanc', 'beige-sable', 'terracotta', 'rose-poudre'],
  },
  {
    slug: 'jaune',
    name: 'Jaune',
    adjective: 'jaune',
    withArticle: 'le jaune',
    hex: '#FFFF00',
    family: 'jaune',
    description: "Le jaune est la couleur la plus lumineuse du cercle chromatique. Gai et chaleureux, il se voit de loin, d'où son usage pour la signalisation. En petite touche, il réveille un intérieur ou une affiche ; en grande surface, on lui préfère souvent le jaune moutarde ou le jaune pastel.",
    pairsWith: ['gris-anthracite', 'bleu-marine', 'blanc', 'gris'],
  },
  {
    slug: 'orange',
    name: 'Orange',
    adjective: 'orange',
    withArticle: "l'orange",
    hex: '#FFA500',
    family: 'orange',
    description: "À mi-chemin entre le rouge et le jaune, l'orange évoque la chaleur, l'automne et la convivialité. Vif, il sert à attirer l'attention ; adouci, il donne le corail, l'abricot ou le terracotta, très utilisés en décoration.",
    pairsWith: ['bleu-marine', 'bleu-canard', 'blanc', 'beige-sable'],
  },
  {
    slug: 'violet',
    name: 'Violet',
    adjective: 'violette',
    withArticle: 'le violet',
    hex: '#7F00FF',
    family: 'violet',
    description: "Le violet mélange le bleu et le rouge. Longtemps rare et coûteux à produire, il reste associé au luxe, au mystère et à la créativité. Ses nuances claires, comme la lavande ou le lilas, sont douces ; les plus foncées, comme la prune ou l'aubergine, sont profondes et élégantes.",
    pairsWith: ['jaune', 'gris-perle', 'blanc', 'vert-sauge'],
  },
  {
    slug: 'rose',
    name: 'Rose',
    adjective: 'rose',
    withArticle: 'le rose',
    hex: '#FD6C9E',
    family: 'rose',
    description: "Le rose est un rouge éclairci de blanc. Selon la nuance, il peut être très doux, comme le rose poudré, ou très vif, comme le fuchsia. En décoration, les roses pâles réchauffent une pièce sans la surcharger.",
    pairsWith: ['gris-anthracite', 'vert-sauge', 'blanc', 'bleu-marine'],
  },
  {
    slug: 'marron',
    name: 'Marron',
    adjective: 'marron',
    withArticle: 'le marron',
    hex: '#582900',
    family: 'marron',
    description: "Le marron est une couleur de terre, de bois et de cuir. Rassurant et chaleureux, il sert de base aux intérieurs naturels et aux palettes d'automne. Il se décline du camel, clair et doré, au chocolat très foncé.",
    pairsWith: ['beige-sable', 'bleu-canard', 'vert-olive', 'creme'],
  },
  {
    slug: 'beige',
    name: 'Beige',
    adjective: 'beige',
    withArticle: 'le beige',
    hex: '#F5F5DC',
    family: 'beige',
    description: "Le beige est un blanc réchauffé d'une pointe de jaune et de brun. C'est la couleur neutre par excellence en décoration et en mode : il met les autres teintes en valeur sans prendre le dessus.",
    pairsWith: ['blanc', 'marron', 'vert-sauge', 'bleu-marine'],
  },
  {
    slug: 'gris',
    name: 'Gris',
    adjective: 'grise',
    withArticle: 'le gris',
    hex: '#808080',
    family: 'gris',
    description: "Le gris se situe entre le noir et le blanc. Neutre, il sert de fond ou de base à presque toutes les palettes. Clair, il apporte de la douceur ; foncé, comme le gris anthracite, il donne un aspect moderne et structuré.",
    pairsWith: ['jaune', 'rose-poudre', 'blanc', 'bleu-canard'],
  },
  {
    slug: 'noir',
    name: 'Noir',
    adjective: 'noire',
    withArticle: 'le noir',
    hex: '#000000',
    family: 'noir',
    description: "Le noir correspond à l'absence de lumière. Élégant et sobre, il crée un fort contraste avec toutes les autres couleurs. En design web, on lui préfère souvent un gris très foncé, plus doux pour les yeux.",
    pairsWith: ['blanc', 'or', 'rouge', 'beige'],
  },
  {
    slug: 'blanc',
    name: 'Blanc',
    adjective: 'blanche',
    withArticle: 'le blanc',
    hex: '#FFFFFF',
    family: 'blanc',
    description: "Le blanc réfléchit toute la lumière. Il agrandit visuellement un espace, laisse respirer une mise en page et s'associe à toutes les couleurs. Ses variantes, comme l'ivoire ou le blanc cassé, sont plus chaleureuses qu'un blanc pur.",
    pairsWith: ['bleu-marine', 'noir', 'vert-sauge', 'terracotta'],
  },
];

export const COLOR_SHADES: ColorPage[] = [
  {
    slug: 'bleu-marine',
    name: 'Bleu marine',
    withArticle: 'le bleu marine',
    hex: '#03224C',
    family: 'bleu',
    description: "Le bleu marine tire son nom des uniformes de la Marine. Très foncé mais moins dur que le noir, c'est un classique de la mode et de la décoration, qui s'accorde avec presque tout.",
    pairsWith: ['blanc', 'beige-sable', 'or', 'rouge'],
  },
  {
    slug: 'bleu-nuit',
    name: 'Bleu nuit',
    withArticle: 'le bleu nuit',
    hex: '#0F056B',
    family: 'bleu',
    description: "Le bleu nuit est un bleu très profond, légèrement violacé, qui rappelle le ciel juste après le coucher du soleil. Il donne une ambiance feutrée à une chambre ou un salon et met en valeur les touches dorées.",
    pairsWith: ['dore', 'blanc-casse', 'gris-perle', 'rose-poudre'],
  },
  {
    slug: 'bleu-roi',
    name: 'Bleu roi',
    withArticle: 'le bleu roi',
    hex: '#318CE7',
    family: 'bleu',
    description: "Le bleu roi est un bleu vif et lumineux, associé historiquement aux rois de France. Franc et énergique, il fonctionne très bien en accent sur du blanc ou du gris clair.",
    pairsWith: ['blanc', 'jaune', 'gris-perle', 'orange'],
  },
  {
    slug: 'bleu-ciel',
    name: 'Bleu ciel',
    withArticle: 'le bleu ciel',
    hex: '#77B5FE',
    family: 'bleu',
    description: "Le bleu ciel est un bleu clair et frais, comme un ciel dégagé en pleine journée. On le choisit pour des chambres d'enfant, des salles de bain ou des interfaces qui doivent rester apaisantes.",
    pairsWith: ['blanc', 'jaune-pastel', 'gris-perle', 'corail'],
  },
  {
    slug: 'bleu-canard',
    name: 'Bleu canard',
    withArticle: 'le bleu canard',
    hex: '#048B9A',
    family: 'bleu',
    description: "Le bleu canard est un bleu-vert profond, inspiré des reflets des plumes du canard colvert. Très présent en décoration, il donne du caractère à un mur, un canapé ou une porte d'entrée.",
    pairsWith: ['jaune-moutarde', 'terracotta', 'beige-sable', 'rose-poudre'],
  },
  {
    slug: 'bleu-turquoise',
    name: 'Bleu turquoise',
    withArticle: 'le bleu turquoise',
    hex: '#25FDE9',
    family: 'bleu',
    description: "Le turquoise doit son nom à la pierre fine du même nom. Entre bleu et vert, il évoque les lagons et les pays chauds. Très lumineux, il s'utilise plutôt par petites touches.",
    pairsWith: ['corail', 'blanc', 'beige-sable', 'orange'],
  },
  {
    slug: 'bleu-petrole',
    name: 'Bleu pétrole',
    withArticle: 'le bleu pétrole',
    hex: '#1D4851',
    family: 'bleu',
    description: "Le bleu pétrole est un bleu-vert sombre et légèrement grisé, plus sobre que le bleu canard. Il donne un aspect chic et profond aux murs comme aux textiles.",
    pairsWith: ['dore', 'rose-poudre', 'blanc-casse', 'camel'],
  },
  {
    slug: 'bleu-pastel',
    name: 'Bleu pastel',
    withArticle: 'le bleu pastel',
    hex: '#AEC6CF',
    family: 'bleu',
    description: "Le bleu pastel est un bleu très adouci, presque grisé. Doux et discret, il convient aux faire-part, aux chambres de bébé et aux designs qui cherchent le calme.",
    pairsWith: ['rose-pastel', 'jaune-pastel', 'blanc', 'gris-perle'],
  },
  {
    slug: 'bleu-electrique',
    name: 'Bleu électrique',
    withArticle: 'le bleu électrique',
    hex: '#2C75FF',
    family: 'bleu',
    description: "Le bleu électrique est un bleu saturé et vibrant, qui semble presque briller à l'écran. Il attire immédiatement l'œil sur un bouton, un titre ou une affiche.",
    pairsWith: ['blanc', 'noir', 'jaune', 'gris-anthracite'],
  },
  {
    slug: 'bleu-klein',
    name: 'Bleu Klein',
    withArticle: 'le bleu Klein',
    hex: '#002FA7',
    family: 'bleu',
    description: "Le bleu Klein, ou International Klein Blue, a été mis au point par l'artiste Yves Klein, qui en a déposé la formule en 1960. C'est un outremer intense, devenu une référence en art et en design.",
    pairsWith: ['blanc', 'orange', 'jaune', 'beige-sable'],
  },
  {
    slug: 'vert-sauge',
    name: 'Vert sauge',
    withArticle: 'le vert sauge',
    hex: '#9CAF88',
    family: 'vert',
    description: "Le vert sauge reprend la couleur grisée des feuilles de sauge. Doux et naturel, c'est l'une des couleurs les plus utilisées en décoration intérieure ces dernières années.",
    pairsWith: ['beige-sable', 'terracotta', 'blanc-casse', 'rose-poudre'],
  },
  {
    slug: 'vert-olive',
    name: 'Vert olive',
    withArticle: 'le vert olive',
    hex: '#808000',
    family: 'vert',
    description: "Le vert olive est un vert tirant sur le jaune et le brun, comme une olive encore verte. Chaud et terreux, il se marie bien avec les matières naturelles et les tons d'automne.",
    pairsWith: ['creme', 'camel', 'terracotta', 'bordeaux'],
  },
  {
    slug: 'vert-emeraude',
    name: 'Vert émeraude',
    withArticle: 'le vert émeraude',
    hex: '#50C878',
    family: 'vert',
    description: "Le vert émeraude tient son nom de la pierre précieuse. C'est un vert franc et lumineux, légèrement bleuté, qui donne une impression de luxe, surtout sur du velours.",
    pairsWith: ['dore', 'rose-poudre', 'blanc', 'noir'],
  },
  {
    slug: 'vert-d-eau',
    name: "Vert d'eau",
    withArticle: "le vert d'eau",
    hex: '#B0F2B6',
    family: 'vert',
    description: "Le vert d'eau est un vert très pâle, légèrement bleuté, qui rappelle la couleur d'une eau claire. Il apporte de la fraîcheur à une cuisine ou une salle de bain.",
    pairsWith: ['blanc', 'gris-perle', 'corail', 'rose-pastel'],
  },
  {
    slug: 'vert-kaki',
    name: 'Vert kaki',
    withArticle: 'le vert kaki',
    hex: '#94812B',
    family: 'vert',
    description: "Le mot kaki vient de l'hindi et signifie « couleur de poussière ». Associé aux uniformes militaires, ce vert brun est devenu un basique de la mode, facile à porter avec des tons neutres.",
    pairsWith: ['beige-sable', 'blanc', 'camel', 'bleu-marine'],
  },
  {
    slug: 'vert-sapin',
    name: 'Vert sapin',
    withArticle: 'le vert sapin',
    hex: '#095228',
    family: 'vert',
    description: "Le vert sapin est un vert foncé et profond, comme les aiguilles des conifères. Il évoque la forêt et les fêtes de fin d'année, et habille très bien les pièces à vivre.",
    pairsWith: ['dore', 'blanc-casse', 'bordeaux', 'camel'],
  },
  {
    slug: 'vert-celadon',
    name: 'Vert céladon',
    withArticle: 'le vert céladon',
    hex: '#83A697',
    family: 'vert',
    description: "Le céladon est un vert pâle et grisé, qui doit son nom à une céramique chinoise. Plus froid que le vert sauge, il reste très doux et raffiné.",
    pairsWith: ['blanc', 'gris-perle', 'rose-poudre', 'lin'],
  },
  {
    slug: 'vert-menthe',
    name: 'Vert menthe',
    withArticle: 'le vert menthe',
    hex: '#3EB489',
    family: 'vert',
    description: "Le vert menthe est un vert frais, légèrement bleuté. Très utilisé dans le design rétro des années 1950, il apporte une touche légère et gaie.",
    pairsWith: ['blanc', 'rose-pastel', 'gris-anthracite', 'corail'],
  },
  {
    slug: 'vert-pomme',
    name: 'Vert pomme',
    withArticle: 'le vert pomme',
    hex: '#34C924',
    family: 'vert',
    description: "Le vert pomme est un vert vif et acidulé, comme la peau d'une pomme granny. Très tonique, il s'emploie plutôt en petite touche.",
    pairsWith: ['blanc', 'gris-anthracite', 'bleu-marine', 'jaune'],
  },
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
    withArticle: 'le bordeaux',
    hex: '#6D071A',
    family: 'rouge',
    description: "Le bordeaux doit son nom au vin de la région. C'est un rouge sombre, légèrement violacé, élégant et chaleureux, très apprécié en automne et en hiver.",
    pairsWith: ['beige-sable', 'rose-poudre', 'vert-sapin', 'dore'],
  },
  {
    slug: 'rouge-brique',
    name: 'Rouge brique',
    withArticle: 'le rouge brique',
    hex: '#842E1B',
    family: 'rouge',
    description: "Le rouge brique reprend la couleur de la terre cuite des briques. Chaud et un peu terreux, il donne un aspect authentique aux intérieurs et aux palettes vintage.",
    pairsWith: ['creme', 'bleu-petrole', 'vert-olive', 'gris-anthracite'],
  },
  {
    slug: 'rouge-carmin',
    name: 'Rouge carmin',
    withArticle: 'le rouge carmin',
    hex: '#960018',
    family: 'rouge',
    description: "Le carmin est un rouge profond, tiré à l'origine d'un pigment produit par la cochenille. Intense et légèrement bleuté, il évoque le rouge à lèvres et les velours de théâtre.",
    pairsWith: ['noir', 'blanc', 'dore', 'gris-perle'],
  },
  {
    slug: 'rouge-cerise',
    name: 'Rouge cerise',
    withArticle: 'le rouge cerise',
    hex: '#BB0B0B',
    family: 'rouge',
    description: "Le rouge cerise est un rouge franc et gourmand, comme une cerise bien mûre. Plus lumineux que le bordeaux, il donne du peps à une tenue ou une affiche.",
    pairsWith: ['blanc', 'bleu-marine', 'rose-pastel', 'noir'],
  },
  {
    slug: 'rouge-framboise',
    name: 'Rouge framboise',
    withArticle: 'le rouge framboise',
    hex: '#C72C48',
    family: 'rouge',
    description: "Le rouge framboise est un rouge qui tire sur le rose, vif et fruité. Il se situe entre le rouge cerise et le fuchsia.",
    pairsWith: ['blanc', 'vert-menthe', 'gris-perle', 'bleu-marine'],
  },
  {
    slug: 'corail',
    name: 'Corail',
    withArticle: 'le corail',
    hex: '#FF7F50',
    family: 'orange',
    description: "Le corail est un orange rosé, inspiré des récifs coralliens. Chaleureux sans être agressif, il est très apprécié dans la mode d'été et en décoration.",
    pairsWith: ['bleu-turquoise', 'bleu-marine', 'blanc', 'vert-menthe'],
  },
  {
    slug: 'terracotta',
    name: 'Terracotta',
    withArticle: 'le terracotta',
    hex: '#E2725B',
    family: 'orange',
    description: "Terracotta signifie « terre cuite » en italien. Cet orange brun et chaleureux est une couleur phare de la décoration naturelle, souvent associée au vert sauge et au beige.",
    pairsWith: ['vert-sauge', 'beige-sable', 'bleu-canard', 'blanc-casse'],
  },
  {
    slug: 'abricot',
    name: 'Abricot',
    withArticle: "l'abricot",
    hex: '#E67E30',
    family: 'orange',
    description: "L'abricot est un orange doux et doré, comme le fruit bien mûr. Il réchauffe une pièce ou une palette tout en restant lumineux.",
    pairsWith: ['bleu-petrole', 'creme', 'vert-olive', 'blanc'],
  },
  {
    slug: 'rose-poudre',
    name: 'Rose poudré',
    withArticle: 'le rose poudré',
    hex: '#EEC4C9',
    family: 'rose',
    description: "Le rose poudré est un rose très pâle et légèrement grisé, comme une poudre de maquillage. Délicat, il est très utilisé pour les mariages, les chambres et les identités visuelles douces.",
    pairsWith: ['vert-sauge', 'gris-anthracite', 'dore', 'bleu-nuit'],
  },
  {
    slug: 'rose-pastel',
    name: 'Rose pastel',
    withArticle: 'le rose pastel',
    hex: '#FFD1DC',
    family: 'rose',
    description: "Le rose pastel est un rose clair et lumineux, plus frais que le rose poudré. C'est un classique des chambres d'enfant et des illustrations douces.",
    pairsWith: ['bleu-pastel', 'jaune-pastel', 'vert-menthe', 'blanc'],
  },
  {
    slug: 'fuchsia',
    name: 'Fuchsia',
    withArticle: 'le fuchsia',
    hex: '#FD3F92',
    family: 'rose',
    description: "Le fuchsia doit son nom à une fleur. C'est un rose très vif, qui tire sur le violet et ne passe jamais inaperçu.",
    pairsWith: ['noir', 'blanc', 'vert-emeraude', 'orange'],
  },
  {
    slug: 'rose-saumon',
    name: 'Rose saumon',
    withArticle: 'le rose saumon',
    hex: '#FA8072',
    family: 'rose',
    description: "Le rose saumon est un rose orangé, comme la chair du saumon. Plus chaud que le rose classique, il est doux et facile à associer.",
    pairsWith: ['bleu-marine', 'gris-perle', 'vert-sauge', 'blanc'],
  },
  {
    slug: 'vieux-rose',
    name: 'Vieux rose',
    withArticle: 'le vieux rose',
    hex: '#C08081',
    family: 'rose',
    description: "Le vieux rose est un rose éteint, légèrement brun, qui rappelle les tissus anciens. Il apporte une touche romantique et rétro.",
    pairsWith: ['vert-sauge', 'creme', 'bordeaux', 'gris-anthracite'],
  },
  {
    slug: 'rose-bonbon',
    name: 'Rose bonbon',
    withArticle: 'le rose bonbon',
    hex: '#F9429E',
    family: 'rose',
    description: "Le rose bonbon est un rose vif et sucré, comme une confiserie. Joyeux et un peu régressif, il est parfait pour des visuels ludiques.",
    pairsWith: ['blanc', 'bleu-ciel', 'jaune', 'noir'],
  },
  {
    slug: 'lavande',
    name: 'Lavande',
    withArticle: 'la lavande',
    hex: '#9683EC',
    family: 'violet',
    description: "La couleur lavande reprend le mauve bleuté des fleurs de lavande. Douce et apaisante, elle évoque la Provence et convient aux chambres comme aux salles de bain.",
    pairsWith: ['blanc', 'vert-sauge', 'gris-perle', 'jaune-pastel'],
  },
  {
    slug: 'lilas',
    name: 'Lilas',
    withArticle: 'le lilas',
    hex: '#B666D2',
    family: 'violet',
    description: "Le lilas est un violet clair et rosé, comme les fleurs du lilas au printemps. Plus chaud que la lavande, il reste léger et romantique.",
    pairsWith: ['vert-menthe', 'blanc', 'gris-perle', 'jaune-pastel'],
  },
  {
    slug: 'prune',
    name: 'Prune',
    withArticle: 'la prune',
    hex: '#811453',
    family: 'violet',
    description: "La prune est un violet foncé qui tire sur le rouge. Riche et élégante, elle convient aux ambiances cosy et aux tenues d'automne.",
    pairsWith: ['dore', 'beige-sable', 'rose-poudre', 'gris-anthracite'],
  },
  {
    slug: 'mauve',
    name: 'Mauve',
    withArticle: 'le mauve',
    hex: '#D473D4',
    family: 'violet',
    description: "Le mauve doit son nom à une fleur, la mauve. La mauvéine, découverte par William Perkin en 1856, a été le premier colorant de synthèse. C'est un violet pâle et rosé.",
    pairsWith: ['gris-perle', 'vert-sauge', 'blanc', 'bleu-nuit'],
  },
  {
    slug: 'aubergine',
    name: 'Aubergine',
    withArticle: "l'aubergine",
    hex: '#370028',
    family: 'violet',
    description: "L'aubergine est un violet très sombre, presque noir, comme la peau du légume. Profonde et chic, elle remplace volontiers le noir.",
    pairsWith: ['dore', 'rose-poudre', 'vert-sauge', 'creme'],
  },
  {
    slug: 'jaune-moutarde',
    name: 'Jaune moutarde',
    withArticle: 'le jaune moutarde',
    hex: '#E1AD01',
    family: 'jaune',
    description: "Le jaune moutarde est un jaune chaud, légèrement brun, comme la moutarde à l'ancienne. Plus facile à vivre qu'un jaune vif, il est très populaire en décoration et en mode.",
    pairsWith: ['bleu-canard', 'gris-anthracite', 'bleu-marine', 'blanc-casse'],
  },
  {
    slug: 'jaune-pastel',
    name: 'Jaune pastel',
    withArticle: 'le jaune pastel',
    hex: '#FDFD96',
    family: 'jaune',
    description: "Le jaune pastel est un jaune très clair et doux, comme du beurre frais. Il éclaire une pièce sans éblouir.",
    pairsWith: ['gris-perle', 'bleu-pastel', 'lavande', 'blanc'],
  },
  {
    slug: 'jaune-citron',
    name: 'Jaune citron',
    withArticle: 'le jaune citron',
    hex: '#FFF44F',
    family: 'jaune',
    description: "Le jaune citron est un jaune vif et acide, légèrement vert. Frais et énergique, il donne tout de suite une impression d'été.",
    pairsWith: ['bleu-marine', 'blanc', 'vert-menthe', 'gris-anthracite'],
  },
  {
    slug: 'or',
    name: 'Or',
    withArticle: "l'or",
    hex: '#FFD700',
    family: 'jaune',
    description: "La couleur or imite l'éclat du métal précieux. À l'écran, on la représente par un jaune chaud et saturé ; en impression, on utilise souvent une encre métallisée pour obtenir un vrai rendu doré.",
    pairsWith: ['noir', 'bleu-marine', 'blanc', 'bordeaux'],
  },
  {
    slug: 'dore',
    name: 'Doré',
    withArticle: 'le doré',
    hex: '#D4AF37',
    family: 'jaune',
    description: "Le doré est une version plus douce et plus réaliste de l'or, avec une pointe de brun. C'est la couleur des cadres, des luminaires et des touches précieuses en décoration.",
    pairsWith: ['vert-sapin', 'bleu-nuit', 'noir', 'blanc-casse'],
  },
  {
    slug: 'ocre',
    name: 'Ocre',
    withArticle: "l'ocre",
    hex: '#CC7722',
    family: 'jaune',
    description: "L'ocre est un pigment naturel à base de terre, utilisé depuis la préhistoire dans les peintures rupestres. C'est un jaune orangé et terreux, très chaleureux.",
    pairsWith: ['bleu-petrole', 'creme', 'vert-olive', 'gris-anthracite'],
  },
  {
    slug: 'taupe',
    name: 'Taupe',
    withArticle: 'le taupe',
    hex: '#483C32',
    family: 'marron',
    description: "Le taupe reprend la couleur du pelage de l'animal : un brun grisé, entre le marron et le gris. Très neutre, il sert de base élégante en décoration comme en mode.",
    pairsWith: ['blanc-casse', 'rose-poudre', 'beige-sable', 'bleu-canard'],
  },
  {
    slug: 'chocolat',
    name: 'Chocolat',
    withArticle: 'le chocolat',
    hex: '#5A3A22',
    family: 'marron',
    description: "Le chocolat est un marron foncé et chaud. Gourmand et rassurant, il donne une ambiance enveloppante aux intérieurs.",
    pairsWith: ['creme', 'bleu-ciel', 'rose-poudre', 'camel'],
  },
  {
    slug: 'camel',
    name: 'Camel',
    withArticle: 'le camel',
    hex: '#C19A6B',
    family: 'marron',
    description: "Le camel reprend la couleur du poil de chameau. Ce brun clair et doré est un grand classique des manteaux et de la maroquinerie.",
    pairsWith: ['bleu-marine', 'blanc', 'noir', 'vert-olive'],
  },
  {
    slug: 'noisette',
    name: 'Noisette',
    withArticle: 'le noisette',
    hex: '#955628',
    family: 'marron',
    description: "Le noisette est un brun chaud et légèrement doré, comme la coque d'une noisette. On l'utilise souvent pour décrire la couleur des yeux.",
    pairsWith: ['creme', 'vert-sauge', 'bleu-petrole', 'blanc'],
  },
  {
    slug: 'rouille',
    name: 'Rouille',
    withArticle: 'le rouille',
    hex: '#985717',
    family: 'marron',
    description: "La couleur rouille imite l'oxyde de fer : un orange brun, profond et chaud. Elle s'accorde très bien avec les bleus foncés et les verts sourds.",
    pairsWith: ['bleu-petrole', 'vert-olive', 'creme', 'bleu-marine'],
  },
  {
    slug: 'beige-sable',
    name: 'Beige sable',
    withArticle: 'le beige sable',
    hex: '#E0CDA9',
    family: 'beige',
    description: "Le beige sable reprend la teinte du sable fin d'une plage. Neutre et lumineux, il sert de fond chaleureux à presque toutes les palettes naturelles.",
    pairsWith: ['terracotta', 'bleu-canard', 'vert-sauge', 'blanc'],
  },
  {
    slug: 'ecru',
    name: 'Écru',
    withArticle: "l'écru",
    hex: '#EFE6D2',
    family: 'beige',
    description: "L'écru désigne la couleur naturelle des fibres textiles non blanchies, comme le lin ou le coton brut. C'est un blanc légèrement jauni et grisé, doux et naturel.",
    pairsWith: ['camel', 'vert-olive', 'bleu-marine', 'marron'],
  },
  {
    slug: 'creme',
    name: 'Crème',
    withArticle: 'le crème',
    hex: '#FFFDD0',
    family: 'beige',
    description: "Le crème est un blanc chaud qui tire sur le jaune pâle, comme la crème fraîche. Plus doux qu'un blanc pur, il réchauffe une pièce.",
    pairsWith: ['chocolat', 'vert-sapin', 'bordeaux', 'bleu-marine'],
  },
  {
    slug: 'lin',
    name: 'Lin',
    withArticle: 'le lin',
    hex: '#FAF0E6',
    family: 'beige',
    description: "La couleur lin imite la fibre de lin naturelle : un beige très clair, légèrement rosé. Elle apporte une ambiance calme et naturelle.",
    pairsWith: ['vert-celadon', 'taupe', 'bleu-pastel', 'terracotta'],
  },
  {
    slug: 'gris-anthracite',
    name: 'Gris anthracite',
    withArticle: 'le gris anthracite',
    hex: '#303030',
    family: 'gris',
    description: "Le gris anthracite tire son nom d'un charbon très pur. Ce gris très foncé est apprécié pour les menuiseries, les cuisines et les interfaces en mode sombre.",
    pairsWith: ['jaune-moutarde', 'blanc', 'camel', 'rose-poudre'],
  },
  {
    slug: 'gris-perle',
    name: 'Gris perle',
    withArticle: 'le gris perle',
    hex: '#CECECE',
    family: 'gris',
    description: "Le gris perle est un gris clair et lumineux, avec l'éclat doux d'une perle. Discret et élégant, il sert de fond neutre à beaucoup de palettes.",
    pairsWith: ['bleu-marine', 'rose-poudre', 'lavande', 'bordeaux'],
  },
  {
    slug: 'gris-souris',
    name: 'Gris souris',
    withArticle: 'le gris souris',
    hex: '#9E9E9E',
    family: 'gris',
    description: "Le gris souris est un gris moyen, ni trop clair ni trop foncé. Très polyvalent, il sert souvent de couleur de texte secondaire ou de fond discret.",
    pairsWith: ['jaune', 'rose-pastel', 'blanc', 'bleu-roi'],
  },
  {
    slug: 'gris-ardoise',
    name: 'Gris ardoise',
    withArticle: 'le gris ardoise',
    hex: '#5A5E6B',
    family: 'gris',
    description: "Le gris ardoise reprend la teinte bleutée des toits en ardoise. Plus froid que l'anthracite, il donne un aspect sobre et moderne.",
    pairsWith: ['blanc', 'jaune-moutarde', 'camel', 'rose-poudre'],
  },
  {
    slug: 'blanc-casse',
    name: 'Blanc cassé',
    withArticle: 'le blanc cassé',
    hex: '#F9F6EE',
    family: 'blanc',
    description: "Le blanc cassé est un blanc légèrement teinté de jaune ou de gris. Plus doux que le blanc pur, il est très utilisé pour les murs et les fonds de page.",
    pairsWith: ['bleu-canard', 'vert-sauge', 'terracotta', 'gris-anthracite'],
  },
  {
    slug: 'ivoire',
    name: 'Ivoire',
    withArticle: "l'ivoire",
    hex: '#FFFFF0',
    family: 'blanc',
    description: "L'ivoire est un blanc très légèrement jaune, comme la matière du même nom. C'est la couleur classique des robes de mariée et du papier haut de gamme.",
    pairsWith: ['dore', 'vert-sapin', 'bleu-marine', 'rose-poudre'],
  },
];

export const ALL_COLOR_PAGES: ColorPage[] = [...COLOR_FAMILIES, ...COLOR_SHADES];

const bySlug = new Map(ALL_COLOR_PAGES.map((color) => [color.slug, color]));

for (const color of ALL_COLOR_PAGES) {
  if (!bySlug.has(color.family)) {
    throw new Error(`Unknown family "${color.family}" for colour "${color.slug}"`);
  }
  for (const pair of color.pairsWith) {
    if (!bySlug.has(pair)) {
      throw new Error(`Unknown pairing "${pair}" for colour "${color.slug}"`);
    }
  }
}

export function colorBySlug(slug: string): ColorPage {
  const color = bySlug.get(slug);
  if (!color) throw new Error(`Unknown colour "${slug}"`);
  return color;
}

export function familyOf(color: ColorPage): ColorFamily {
  const family = COLOR_FAMILIES.find((item) => item.slug === color.family);
  if (!family) throw new Error(`Unknown family "${color.family}"`);
  return family;
}

export function shadesOf(familySlug: string): ColorPage[] {
  return COLOR_SHADES.filter((shade) => shade.family === familySlug);
}

export function isFamily(color: ColorPage): color is ColorFamily {
  return 'adjective' in color;
}

export function colorHref(color: ColorPage): string {
  return `/couleurs/${color.slug}`;
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function ofColor(withArticle: string): string {
  if (withArticle.startsWith('le ')) return `du ${withArticle.slice(3)}`;
  return `de ${withArticle}`;
}

export function listNames(colors: ColorPage[]): string {
  const names = colors.map((color) => color.withArticle);
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} et ${names[names.length - 1]}`;
}
