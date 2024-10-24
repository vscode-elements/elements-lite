import { useState } from "react";
import type { IconType } from "./widgets/Icon";
import Checkbox from "./widgets/Checkbox";
import IconPicker from "./widgets/IconPicker";
import Select from "./widgets/Select";
import Preview, { type GroupLayout } from "./CheckboxPreview";
import ConfiguratorBase from "./widgets/ConfiguratorBase";
import Textfield from "./widgets/Textfield";

export default function Configurator() {
  const [group, setGroup] = useState(false);
  const [groupLayout, setGroupLayout] = useState("horizontal");
  const [iconType, setIconType] = useState("font");
  const [numCheckboxes, setNumCheckboxes] = useState("1");

  return (
    <ConfiguratorBase>
      <Checkbox label="Checkbox group" setState={setGroup} state={group} />
      <Select
        label="Number of checkboxes"
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        setState={setNumCheckboxes}
        state={numCheckboxes}
      />
      <Select
        label="Group layout"
        options={["horizontal", "vertical"]}
        setState={setGroupLayout}
        state={groupLayout}
      />
      <Select
        label="Icon Type"
        options={["font", "svg"]}
        setState={setIconType}
        state={iconType}
      />
      <Preview
        group={group}
        groupLayout={groupLayout as GroupLayout}
        iconType={iconType as IconType}
        numCheckboxes={numCheckboxes}
      />
    </ConfiguratorBase>
  );
}
