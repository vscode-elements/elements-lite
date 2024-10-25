import { useState } from "react";
import type { IconType } from "./widgets/Icon";
import Checkbox from "./widgets/Checkbox";
import IconPicker from "./widgets/IconPicker";
import Select from "./widgets/Select";
import Preview from "./CollapsiblePreview";
import ConfiguratorBase from "./widgets/ConfiguratorBase";
import Textfield from "./widgets/Textfield";

export default function Configurator() {
  const [actions, setActions] = useState(false);
  const [alwaysShowActions, setAlwaysShowActions] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("Collapsible title");
  const [iconType, setIconType] = useState("font");

  return (
    <ConfiguratorBase>
      <Checkbox label="Actions" setState={setActions} state={actions} />
      <Checkbox
        label="Always show actions"
        setState={setAlwaysShowActions}
        state={alwaysShowActions}
      />
      <Textfield
        label="Title"
        setState={setTitle}
        state={title}
      />
      <Textfield
        label="Description"
        setState={setDescription}
        state={description}
      />
      <Select
        label="Icon Type"
        options={["font", "svg"]}
        setState={setIconType}
        state={iconType}
      />
      <Preview
        actions={actions}
        alwaysShowActions={alwaysShowActions}
        description={description}
        title={title}
        iconType={iconType as IconType}
      />
    </ConfiguratorBase>
  );
}
