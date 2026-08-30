import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://infinoradental.com',
  trailingSlash: 'always',
  build: {
    assets: '_astro',
  }
});
