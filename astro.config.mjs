import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from "@astrojs/markdoc";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://thehigglers.com/',
  base: '/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), mdx(), alpinejs(), compress(), prefetch(), react(), markdoc(), keystatic(),sitemap({
    filter: (page) => !page.includes("keystatic"),
  })],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});