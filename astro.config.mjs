import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lawrencedsouza.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@splinetool/runtime']
    },
    build: {
      chunkSizeWarningLimit: 2200
    }
  }
});

