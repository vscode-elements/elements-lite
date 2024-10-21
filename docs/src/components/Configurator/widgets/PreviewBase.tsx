import { useRef, useState, type ReactNode } from "react";
import * as prettier from "prettier";
import prettierPluginHtml from "prettier/plugins/html";
// @ts-ignore
import { parsers, printers } from "@awmottaz/prettier-plugin-void-html";
import styles from "./PreviewBase.module.css";

export default function ButtonPreview({ children }: { children: ReactNode }) {
  const demoElRef = useRef<HTMLElement>();
  const [copied, setCopied] = useState(false);

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
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.PreviewBase}>
      <vscode-demo ref={demoElRef}>{children}</vscode-demo>
      <button
        type="button"
        onClick={handleButtonClick}
        className={styles.copyButton}
      >
        {!copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.75"
          >
            <path d="M3 19a2 2 0 0 1-1-2V2a2 2 0 0 1 1-1h13a2 2 0 0 1 2 1" />
            <rect x="6" y="5" width="16" height="18" rx="1.5" ry="1.5" />
          </svg>
        ) : null}
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1.001 1.001 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"></path>
          </svg>
        ) : null}
        {copied ? "Copied!" : "Copy"}
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
