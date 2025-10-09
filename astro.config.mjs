import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jasminetours.nl',
  integrations: [
    react(),
    sitemap()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: {
        '@restart/ui/cjs': '@restart/ui/esm',
        'dom-helpers/cjs': 'dom-helpers/esm',
      },
    },
    optimizeDeps: {
      include: [
        'react-bootstrap',
        'framer-motion',
        'react-fast-marquee',
        '@fortawesome/react-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-brands-svg-icons'
      ],
      esbuildOptions: {
        resolveExtensions: ['.mjs', '.js', '.jsx', '.json'],
      },
    },
    ssr: {
      noExternal: [
        'react-bootstrap',
        'framer-motion',
        'dom-helpers',
        'react-transition-group',
        '@restart/hooks',
        '@restart/ui',
        'uncontrollable',
        'prop-types-extra',
        'warning',
        'react-fast-marquee',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/react-fontawesome'
      ],
    },
  },
});

