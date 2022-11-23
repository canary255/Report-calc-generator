export type AutoCompleteInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
  value?: string;
  onChange?: (e: any) => void;
};
