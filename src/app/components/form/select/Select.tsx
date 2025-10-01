import { SelectProps } from "@/types/select";

export const Select = ({ options, value, onChange, children }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      id={`select-${value}`}
      className="border border-gray-300 rounded-md p-2 w-[250px] bg-white"
    >
      {options &&
        options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      {children}
    </select>
  );
};
