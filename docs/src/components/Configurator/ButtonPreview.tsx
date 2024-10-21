import clsx from "clsx";
import type { IconName, IconType } from "./widgets/Icon";
import Icon from "./widgets/Icon";
import PreviewBase from "./widgets/PreviewBase";

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
    <PreviewBase>
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
    </PreviewBase>
  );
}
