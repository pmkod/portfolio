interface TextareaProps {
  label: string;
  placeholder: string;
  name: string;

  required?: boolean;
  onInput?: () => void;
}

export const Textarea = ({
  label,
  placeholder,
  required,
  name,
  onInput,
}: TextareaProps) => {
  return (
    <div>
      <div className="mb-1 font-medium text-sm">{label}</div>
      <textarea
        name={name}
        id="message"
        placeholder={placeholder}
        required={required}
        onInput={onInput}
        autoComplete="off"
        className="w-full min-h-[180px] px-4 pt-2 pb-0.5 text-sm outline-none rounded transition-colors border border-gray-300 hover:border-gray-400 focus:border-gray-400"
      ></textarea>
    </div>
  );
};
