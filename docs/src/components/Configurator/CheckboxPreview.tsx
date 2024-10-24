import clsx from "clsx";
import type { IconName, IconType } from "./widgets/Icon";
import Icon from "./widgets/Icon";
import PreviewBase from "./widgets/PreviewBase";

export type GroupLayout = "horizontal" | "vertical";

function VscodeCheckbox({
  iconType,
  idPrefix = "",
  counter,
}: {
  iconType: IconType;
  idPrefix?: string;
  counter: number;
}) {
  return (
    <div className="vscode-checkbox">
      <input
        type="checkbox"
        id={`${idPrefix}checkbox-${counter}`}
        name={`${idPrefix}checkbox-${counter}`}
      />
      <label htmlFor={`${idPrefix}checkbox-${counter}`}>
        <span className="icon">
          <Icon iconType={iconType} name="check" className="icon-checked" />
          <Icon
            iconType={iconType}
            name="chrome-minimize"
            className="icon-indeterminate"
          />
        </span>
        <span className="text">Checkbox {counter}</span>
      </label>
    </div>
  );
}

export default function ButtonPreview({
  iconType,
  idPrefix,
  group,
  groupLayout,
  numCheckboxes,
}: {
  iconType: IconType;
  idPrefix?: string;
  group: boolean;
  groupLayout: GroupLayout;
  numCheckboxes: string;
}) {
  let list = [];

  for (let i = 1; i <= +numCheckboxes; i++) {
    list.push(i);
  }

  return (
    <PreviewBase>
      {group ? (
        <div
          className={clsx("vscode-checkbox-group", {
            vertical: groupLayout === "vertical",
          })}
        >
          {list.map((i) => (
            <VscodeCheckbox
              key={i}
              iconType={iconType}
              counter={i}
              idPrefix={idPrefix}
            />
          ))}
        </div>
      ) : (
        <VscodeCheckbox iconType={iconType} counter={1} />
      )}
    </PreviewBase>
  );
}
