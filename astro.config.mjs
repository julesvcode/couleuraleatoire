// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://generateurdecouleur.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        item.url = item.url.replace(/\/+$/, '');
        return item;
      },
    }),
  ],
});