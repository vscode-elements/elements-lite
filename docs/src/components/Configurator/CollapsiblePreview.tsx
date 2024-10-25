import clsx from "clsx";
import type { IconName, IconType } from "./widgets/Icon";
import Icon from "./widgets/Icon";
import PreviewBase from "./widgets/PreviewBase";

export default function ButtonPreview({
  actions,
  alwaysShowActions,
  iconType,
  title,
  description,
}: {
  actions: boolean;
  alwaysShowActions: boolean;
  iconType: IconType;
  title: string;
  description: string;
}) {
  return (
    <PreviewBase>
      <details
        className={clsx("vscode-collapsible", {
          "always-show-actions": alwaysShowActions,
        })}
        open
      >
        <summary>
          <Icon
            name="chevron-right"
            iconType={iconType}
            className="icon-arrow"
          />
          <h2 className="title">
            {title}{" "}
            {description ? (
              <span className="description">{description}</span>
            ) : null}
          </h2>
          {actions ? (
            <div className="actions">
              <button
                type="button"
                className="vscode-action-button"
                title="Settings"
              >
                <Icon name="settings-gear" iconType={iconType} />
              </button>
            </div>
          ) : null}
        </summary>
        <div>
          <p>Collapsible content.</p>
        </div>
      </details>
    </PreviewBase>
  );
}
