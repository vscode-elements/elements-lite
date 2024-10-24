import clsx from "clsx";
import PreviewBase from "./widgets/PreviewBase";

export default function Preview({
  caption,
  variant,
}: {
  caption: string;
  variant: string;
}) {
  return (
    <PreviewBase>
      <span
        className={clsx("vscode-badge", {
          counter: variant === "counter",
          "activity-bar-counter": variant === "activity-bar-counter",
        })}
      >
        {caption}
      </span>
    </PreviewBase>
  );
}
