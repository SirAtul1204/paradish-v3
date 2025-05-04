import clsx from "clsx";
import { useState, type FormEvent, type SelectHTMLAttributes } from "react";

export type FormDropDownOptions = {
  label: string;
  value: string;

  disabled?: boolean;
};

interface FormDropDownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: FormDropDownOptions[];
  errorMessage?: string;
}

export default function FormDropDown({
  label,
  options,
  errorMessage,
  value,
  ...props
}: FormDropDownProps) {
  const id = label.toLowerCase().replace(/\s/g, "-");

  const [showError, setShowError] = useState(false);

  const handleInput = (e: FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setShowError(false);
  };

  const handleInvalid = (e: FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <div className="relative w-full">
        <select
          id={id}
          className={clsx(
            "bg-background focus:border-primary relative h-12 w-full appearance-none rounded border-2 p-2 outline-none",
            showError ? "border-error" : "border-border",
          )}
          defaultValue={""}
          onInvalid={handleInvalid}
          onInput={handleInput}
          {...props}
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-secondary-text h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {showError && errorMessage && (
        <p className="text-error text-xs">{errorMessage}</p>
      )}
    </div>
  );
}
