import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luizatebaldi.adv.br',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
