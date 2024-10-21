import { useState } from "react";
import type { IconType } from "./widgets/Icon";
import Checkbox from "./widgets/Checkbox";
import IconPicker from "./widgets/IconPicker";
import Select from "./widgets/Select";
import ConfiguratorBase from "./widgets/ConfiguratorBase";
import Textfield from "./widgets/Textfield";
import ActionButtonPreview from "./ActionButtonPreview";

export default function ButtonConfigurator() {
  const [caption, setCaption] = useState("Action Button");
  const [disabled, setDisabled] = useState(false);
  const [icon, setIcon] = useState("file");
  const [iconType, setIconType] = useState("font");
  const [withCaption, setWithCaption] = useState(false);

  return (
    <ConfiguratorBase>
      <Textfield label="Caption" state={caption} setState={setCaption} />
      <Checkbox label="Disabled" setState={setDisabled} state={disabled} />
      <IconPicker label="Icon" setState={setIcon} state={icon} />
      <Select
        label="Icon Type"
        options={["font", "svg"]}
        setState={setIconType}
        state={iconType}
      />
      <Checkbox
        label="With caption"
        setState={setWithCaption}
        state={withCaption}
      />
      <ActionButtonPreview
        caption={caption}
        disabled={disabled}
        icon={icon}
        iconType={iconType as IconType}
        withCaption={withCaption}
      />
    </ConfiguratorBase>
  );
}
