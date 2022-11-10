import { Label } from "../../atom/Label/Label";
import { TextFieldComponent } from "../../atom/Textfield/Textfield";

type SelectorProps = {
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
}: SelectorProps) => {
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
