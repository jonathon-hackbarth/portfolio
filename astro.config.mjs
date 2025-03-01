// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import react from '@astrojs/react';

import vercel from "@astrojs/vercel";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: "https://jonathon-hackbarth.github.io",
  base: "portfolio",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel(),
});