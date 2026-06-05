import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://msieducation.edu.mm', // TODO: Replace this with your actual domain
      generateRobotsTxt: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
