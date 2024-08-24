interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onInput?: () => void;
}

export const Input = ({
  type,
  label,
  placeholder,
  required,
  onInput,
  name,
}: InputProps) => {
  return (
    <div>
      <div className="mb-1 font-medium text-sm">{label}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        onInput={onInput}
        className="w-full h-10 px-4 rounded text-sm outline-none transition-colors border border-gray-300 hover:border-gray-400 focus:border-gray-400"
      />
    </div>
  );
};
