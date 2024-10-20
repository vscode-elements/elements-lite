import { useRef, type ReactNode } from "react";
import * as prettier from "prettier";
import prettierPluginHtml from "prettier/plugins/html";
// @ts-ignore
import { parsers, printers } from "@awmottaz/prettier-plugin-void-html";

export default function ButtonPreview({ children }: { children: ReactNode }) {
  const demoElRef = useRef<HTMLElement>();

  const handleButtonClick = async () => {
    const formatted = await prettier.format(
      demoElRef.current?.innerHTML ?? "",
      {
        parser: "html",
        tabWidth: 2,
        htmlWhitespaceSensitivity: "ignore",
        plugins: [prettierPluginHtml, { parsers, printers }],
      }
    );

    try {
      await navigator.clipboard.writeText(formatted);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <vscode-demo ref={demoElRef}>{children}</vscode-demo>
      <button type="button" onClick={handleButtonClick}>
        Copy
      </button>
    </div>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vscode-demo": any;
    }
  }
}
