import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  trailingSlash: "never",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
        prefixDefaultLocale: true
    }
  }
});