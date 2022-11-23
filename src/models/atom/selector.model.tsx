export type SelectorProps = {
  label?: string;
  name: string;
  value?: string;
  options?: { label: string; value: string }[];
  onChange?: (e: any) => void;
};
