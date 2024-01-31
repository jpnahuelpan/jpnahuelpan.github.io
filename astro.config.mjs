import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jpnahuelpan.xyz',
  integrations: [
    react({
      include: 'react-pdf',
      experimentalReactChildren: true,
    }),
    tailwind(),
  ],
});