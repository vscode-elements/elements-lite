import { useState } from "react";
import type { IconType } from "./Icon";
import Checkbox from "./Checkbox";
import IconPicker from "./IconPicker";
import Select from "./Select";
import ButtonPreview from "./ButtonPreview";
import ConfiguratorBase from "./ConfiguratorBase";

export default function ButtonConfigurator() {
  const [secondary, setSecondary] = useState(false);
  const [block, setBlock] = useState(false);
  const [iconBefore, setIconBefore] = useState("");
  const [iconAfter, setIconAfter] = useState("");
  const [iconType, setIconType] = useState("font");

  return (
    <ConfiguratorBase>
      <IconPicker
        label="Icon Before"
        setState={setIconBefore}
        state={iconBefore}
      />
      <IconPicker
        label="Icon After"
        setState={setIconAfter}
        state={iconAfter}
      />
      <Select
        label="Icon Type"
        options={["font", "svg"]}
        setState={setIconType}
        state={iconType}
      />
      <Checkbox label="Secondary" setState={setSecondary} state={secondary} />
      <Checkbox label="Block" setState={setBlock} state={block} />
      <ButtonPreview
        block={block}
        secondary={secondary}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        iconType={iconType as IconType}
      />
    </ConfiguratorBase>
  );
}
