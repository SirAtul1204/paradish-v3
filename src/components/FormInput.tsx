import { Nullable } from "@/utils/types";

type FormInputProps = {
  label: string;
  type?: string;
  pattern?: string;
  errorMessage?: string;
  required?: boolean;
  readonly?: boolean;
  value?: Nullable<string>;
  name?: string;
};

const FormInput = ({
  label,
  type = "text",
  pattern,
  errorMessage,
  required,
  readonly,
  value,
  name,
}: FormInputProps) => {
  const id = label.toLowerCase().replace(/ /g, "-");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={label}
        className={`p-2 rounded border-2 border-foreground focus:border-primary outline-none ${
          readonly ? "bg-disabled" : "bg-background"
        }`}
        required={required}
        pattern={pattern}
        value={value === null ? "" : value}
        title={errorMessage}
        readOnly={readonly}
      />
    </div>
  );
};

export default FormInput;
