export type AutocompleteProps = {
  name: string;
  options: { label: string }[];
  label?: string;
  onChange?: (e: any) => void;
};
