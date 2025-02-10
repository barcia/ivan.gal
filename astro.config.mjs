// @ts-check
import { defineConfig, envField } from 'astro/config';

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  env: {
      schema: {
          RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
          RESEND_AUDIENCE_ID: envField.string({ context: "server", access: "secret" }),
      }
    },

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://ivan.gal'
});