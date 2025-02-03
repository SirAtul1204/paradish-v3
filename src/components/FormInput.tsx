type FormInputProps = {
  label: string;
  type?: string;
  pattern?: string;
  errorMessage?: string;
};

const FormInput = ({
  label,
  type = "text",
  pattern,
  errorMessage,
}: FormInputProps) => {
  const id = label.toLowerCase().replace(/ /g, "-");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={label}
        className="p-2 bg-background rounded border-2 focus:border-primary outline-none border-gray-300"
        required
        pattern={pattern}
        title={errorMessage}
      />
    </div>
  );
};

export default FormInput;
