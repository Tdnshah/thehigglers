import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";

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
  }), sitemap(), mdx(), alpinejs(), compress(), prefetch(), image({
    logLevel: 'debug'
  })]
});