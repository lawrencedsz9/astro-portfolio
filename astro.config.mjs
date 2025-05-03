import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  "output": "server",
  adapter: netlify(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});