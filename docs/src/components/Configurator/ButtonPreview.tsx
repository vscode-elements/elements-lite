import clsx from "clsx";
import type { IconName, IconType } from "./Icon";
import Icon from "./Icon";

export default function ButtonPreview({
  block,
  secondary,
  iconBefore,
  iconAfter,
  iconType,
}: {
  block: boolean;
  secondary: boolean;
  iconBefore: string;
  iconAfter: string;
  iconType: IconType;
}) {
  return (
    <vscode-demo>
      <button
        type="button"
        className={clsx("vscode-button", { secondary, block })}
      >
        {iconBefore ? (
          <Icon name={iconBefore as IconName} iconType={iconType} />
        ) : null}
        <span>Button Example</span>
        {iconAfter ? (
          <Icon name={iconAfter as IconName} iconType={iconType} />
        ) : null}
      </button>
    </vscode-demo>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vscode-demo": any;
    }
  }
}
