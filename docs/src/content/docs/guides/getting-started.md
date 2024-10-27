---
title: Getting Started
---

VSCode Elements Lite is a simpler, lightweight alternative to [VSCode Elements](https://vscode-elements.github.io). There’s no need to 
deal with TypeScript or bundler configurations. In fact, you don’t even need to install a package if 
you prefer not to—just copy the code snippet you need. While VSCode Elements Lite doesn’t cover 
every case that VSCode Elements does, it’s sufficient for most purposes. You can also use it together with VSCode Elements components.

## Using the Configurator

The easiest way to get started is by using the configurator. Set the desired parameters, then copy the generated HTML snippet. 
The related CSS is also provided on the configurator page—simply copy the code and add it to your project.

## Install as npm package

If you're using a bundler like Webpack or Vite, you can install VSCode Elements Lite as an npm package:

```bash
npm install @vscode-elements/elements-lite
```

Next, import the necessary styles:

```javascript
import "@vscode-elements/elements-lite/components/button/button.css";
```
