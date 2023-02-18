import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://samrowe.io/',
  integrations: [react(), mdx(), tailwind()],
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'never',
})
