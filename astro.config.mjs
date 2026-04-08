// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://social.mirumo.net',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
