// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://vscode-elements.github.io",
  base: "/elements-lite",
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
          label: "Guides",
          items: [
            {label: "Getting Started", slug: 'guides/getting-started'}
          ]
        },
        {
          label: "Components",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Action Button", slug: "components/action-button" },
            { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
            { label: "Checkbox", slug: "components/checkbox" },
            { label: "Collapsible", slug: "components/collapsible" },
            { label: "Divider", slug: "components/divider" },
            { label: "Form Container (wip)", slug: "components/form-container" },
            { label: "Form Group (wip)", slug: "components/form-group" },
            { label: "Form Helper (wip)", slug: "components/form-helper" },
            { label: "Label (wip)", slug: "components/label" },
            { label: "Progress Ring (wip)", slug: "components/progress-ring" },
            { label: "Radio (wip)", slug: "components/radio" },
            { label: "Select (wip)", slug: "components/select" },
            { label: "Table (wip)", slug: "components/table" },
            { label: "Textarea (wip)", slug: "components/textarea" },
            { label: "Textfield (wip)", slug: "components/textfield" },
          ],
          collapsed: true,
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
            { label: "Divider", slug: "components/divider/configurator" },
            { label: "Form Container (wip)", slug: "components/form-container/configurator" },
            { label: "Form Group (wip)", slug: "components/form-group/configurator" },
            { label: "Form Helper (wip)", slug: "components/form-helper/configurator" },
            { label: "Label (wip)", slug: "components/label/configurator" },
            { label: "Progress Ring (wip)", slug: "components/progress-ring/configurator" },
            { label: "Radio (wip)", slug: "components/radio/configurator" },
            { label: "Select (wip)", slug: "components/select/configurator" },
            { label: "Table (wip)", slug: "components/table/configurator" },
            { label: "Textarea (wip)", slug: "components/textarea/configurator" },
            { label: "Textfield (wip)", slug: "components/textfield/configurator" },
          ],
          collapsed: true,
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
