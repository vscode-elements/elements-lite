// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "VSCode Elements Lite",
      logo: {
        src: "/src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/vscode-elements/elements-lite",
      },
      sidebar: [
        {
          label: "Components",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Action Button", slug: "components/action-button" },
            { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        "node_modules/@vscode/codicons/dist/codicon.css",
        "./src/styles/custom.css",
      ],
    }),
    react(),
  ],
});
