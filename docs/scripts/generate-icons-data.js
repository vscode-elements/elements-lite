import * as fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function writeIconList(iconNames) {
  let fd = "\n";

  for (let i = 0; i < iconNames.length; i++) {
    const name = iconNames[i];
    const svg = await fs.readFile(
      `node_modules/@vscode/codicons/src/icons/${name}.svg`
    );
    const svgSanitized = svg
      .toString()
      .replaceAll("fill-rule", "fillRule")
      .replaceAll("clip-rule", "clipRule");
    fd +=
      name.indexOf("-") !== -1
        ? `  "${name}": ${svgSanitized},\n`
        : `  ${name}: ${svgSanitized},\n`;
  }

  let fileContent = 'import React from "react";\n\n';
  fileContent += "// prettier-ignore\n";
  fileContent += `export const icons = {${fd}}`;
  fileContent += "\n\n";
  fileContent += "export const iconNames = Object.keys(icons);\n";

  await fs.writeFile("src/components/Configurator/icons.tsx", fileContent);
}

async function main() {
  const dir = await fs.readdir(`node_modules/@vscode/codicons/src/icons/`);
  const iconNames = dir.map((f) => f.replace(".svg", "")).sort();

  await writeIconList(iconNames);
}

main();
