import { cloneElement } from "react";
import { icons } from "./icons";

export type IconType = "font" | "svg";
export type IconName = keyof typeof icons;

export default function Icon({
  iconType: type,
  name,
  className,
}: {
  iconType: IconType;
  name: keyof typeof icons;
  className?: string;
}) {
  let svgIcon = icons[name];

  if (className) {
    svgIcon = cloneElement(icons[name], { className });
  }

  const codiconClassName = className
    ? `codicon codicon-${name} ${className}`
    : `codicon codicon-${name}`;

  return type === "font" ? (
    <i className={codiconClassName}></i>
  ) : (
    svgIcon
  );
}
