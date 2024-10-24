import { useState } from "react";
import Select from "./widgets/Select";
import ConfiguratorBase from "./widgets/ConfiguratorBase";
import Textfield from "./widgets/Textfield";
import Preview from "./BadgePreview";

export default function Configurator() {
  const [caption, setCaption] = useState("2 unsaved");
  const [variant, setVariant] = useState("default");

  return (
    <ConfiguratorBase>
      <Textfield label="Caption" state={caption} setState={setCaption} />
      <Select
        label="Variant"
        options={["default", "counter", "activity-bar-counter"]}
        setState={setVariant}
        state={variant}
      />
      <Preview caption={caption} variant={variant} />
    </ConfiguratorBase>
  );
}
