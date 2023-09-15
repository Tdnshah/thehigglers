import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import compress from "astro-compress";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config

// https://astro.build/config
import decapCmsOauth from "astro-decap-cms-oauth";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://thehigglers.com/',
  base: '/',
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), mdx(), alpinejs(), compress(), prefetch(), decapCmsOauth()],
  vite: {
    build: {
      exclude: "config.yml",
      rollupOptions: {
        external: "config.yml"
      }
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});