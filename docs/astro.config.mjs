// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://vscode-elements.github.io/elements-lite",
  base: "elements-lite",
  integrations: [
    starlight({
      title: "VSCode Elements Lite",
      logo: {
        src: "/src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/vscode-elements/elements-lite",
      },
      editLink: {
        baseUrl:
          "https://github.com/vscode-elements/elements-lite/tree/main/docs",
      },
      sidebar: [
        {
          label: "Components",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Action Button", slug: "components/action-button" },
            { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
            { label: "Checkbox", slug: "components/checkbox" },
            { label: "Collapsible", slug: "components/collapsible" },
          ],
        },
        {
          label: "Configurator",
          items: [
            {
              label: "Action Button",
              slug: "components/action-button/configurator",
            },
            { label: "Badge", slug: "components/badge/configurator" },
            { label: "Button", slug: "components/button/configurator" },
            { label: "Checkbox", slug: "components/checkbox/configurator" },
            { label: "Collapsible", slug: "components/collapsible/configurator" },
          ],
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
