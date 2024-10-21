import { icons } from "./icons";

export type IconType = "font" | "svg";
export type IconName = keyof typeof icons;

export default function Icon({
  iconType: type,
  name,
}: {
  iconType: IconType;
  name: keyof typeof icons;
}) {
  return type === "font" ? (
    <i className={`codicon codicon-${name}`}></i>
  ) : (
    <span className="icon">{icons[name]}</span>
  );
}
