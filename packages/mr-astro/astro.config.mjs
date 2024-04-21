import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [
      solid(),
      tailwind(),
      {
          name: 'importmap-externals',
          hooks: {
              'astro:build:setup': ({ vite, target }) => {
                  if(target === 'client') {
                      vite.build.rollupOptions["external"] = ["solid-js"];
                  }
              }
          }
      },
  ],

});
