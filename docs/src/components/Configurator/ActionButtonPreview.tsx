import clsx from "clsx";
import type { IconName, IconType } from "./widgets/Icon";
import Icon from "./widgets/Icon";
import PreviewBase from "./widgets/PreviewBase";

export default function ButtonPreview({
  caption,
  disabled,
  icon,
  iconType,
  withCaption,
}: {
  caption: string;
  disabled: boolean;
  icon: string;
  iconType: IconType;
  withCaption: boolean;
}) {
  return (
    <PreviewBase>
      <button
        type="button"
        className="vscode-action-button"
        disabled={disabled}
      >
        <Icon name={icon as IconName} iconType={iconType} />
        {withCaption ? <span className="label">{caption}</span> : null}
      </button>
    </PreviewBase>
  );
}
