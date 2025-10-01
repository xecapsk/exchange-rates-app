export interface SelectProps {
  options?: OptionProps[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode; // Add children to the props
}

export interface OptionProps {
  value: string;
  label: string;
}
