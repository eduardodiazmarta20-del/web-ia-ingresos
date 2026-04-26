import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://iaparaganar.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  compressHTML: true,
  prefetch: { defaultStrategy: 'viewport' },
});
