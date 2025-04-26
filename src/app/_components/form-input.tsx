import { useState, type FormEvent, type InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  errorMessage?: string;
}

const FormInput = ({ label, errorMessage, ...inputProps }: FormInputProps) => {
  const id = label.toLowerCase().replace(/ /g, "-");

  const [showError, setShowError] = useState(false);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowError(false);
  };

  const handleInvalid = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        placeholder={label}
        className={`border-border focus:border-primary bg-background rounded border-2 p-2 outline-none`}
        title={errorMessage}
        onInvalid={handleInvalid}
        onInput={handleInput}
        {...inputProps}
      />
      {showError && errorMessage && (
        <p className="text-error text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
