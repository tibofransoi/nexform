import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const site = isGitHubPages
  ? 'https://tibofransoi.github.io'
  : process.env.PUBLIC_SITE_URL || 'https://nexform.invalid';

export default defineConfig({
  site,
  base: isGitHubPages ? '/nexform' : '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/es/') && !page.includes('/demos/'),
    }),
  ],
});
