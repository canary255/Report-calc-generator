import { Label } from "../../atom/Label/Label";
import { TextFieldComponent } from "../../atom/Textfield/Textfield";

type TextinputProps = {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
};

export const TextInput = ({
  placeholder,
  name,
  value,
  onChange,
}: TextinputProps) => {
  return (
    <>
      <Label name={name}>Example</Label>
      <TextFieldComponent
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
