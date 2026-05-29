// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: served from https://ericorahmad1.github.io/FinalProject
export default defineConfig({
  site: 'https://ericorahmad1.github.io',
  base: '/FinalProject',
  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    // Astro emits a <meta http-equiv="content-security-policy"> and auto-hashes
    // every script/style it renders (incl. the inline theme-init + bundled component scripts).
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "connect-src 'self' https://formspree.io",
        "form-action https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      // Allow our own same-origin bundled CSS/JS alongside the auto-generated hashes.
      styleDirective: { resources: ["'self'"] },
      scriptDirective: { resources: ["'self'"] },
    },
  },
});
