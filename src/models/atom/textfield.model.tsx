export type TextFieldProps = {
  name: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  fullWidth?: boolean;
  onChange?: (e: any) => void;
};
