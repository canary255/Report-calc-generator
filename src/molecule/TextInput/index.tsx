import { Label } from "../../atom/Label";
import { TextFieldComponent } from "../../atom/Textfield";
import { TextinputProps } from "../../models/molecule/textInput.model";

export const TextInput = ({
  label = "",
  placeholder,
  name,
  value,
  fullWidth = false,
  onChange,
}: TextinputProps) => {
  return (
    <>
      <Label name={name}>{label}</Label>
      <TextFieldComponent
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
      />
    </>
  );
};
