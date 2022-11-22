import { Label } from "../../atom/Label";
import { TextFieldComponent } from "../../atom/Textfield";

type TextinputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
};

export const TextInput = ({
  label = "",
  placeholder,
  name,
  value,
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
      />
    </>
  );
};
