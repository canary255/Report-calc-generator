export type SelectorProps = {
  label?: string;
  name: string;
  value?: string;
  options?: { label: string; value: string }[];
  fullWidth?: boolean;
  onChange?: (e: any) => void;
};
