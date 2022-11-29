export type SelectorinputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
  value?: string;
  fullWidth?: boolean;
  onChange?: (e: any) => void;
};
