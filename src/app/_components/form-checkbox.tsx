"use client";

type FormCheckoxProps = {
  label: string;
  name?: string;
  required?: boolean;
  value: string;
  checked?: boolean;
  onClick?: (value: string) => void;
};

const FormCheckox = ({
  label,
  name,
  required,
  value,
  checked,
  onClick,
}: FormCheckoxProps) => {
  const id = label.toLowerCase().replace(/ /g, "-");

  const handleOnClick = (value: string) => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <div className="bg-background border-2 border-foreground outline-none p-2 rounded flex items-center gap-2 relative">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="w-0 h-0 absolute"
        required={required}
        checked={checked}
        onClick={() => handleOnClick(value)}
        onChange={() => {}} // Prevents warning
      />
      <div
        className="w-6 h-6 rounded-full bg-background border-2 border-foreground flex justify-center items-center cursor-pointer"
        onClick={() => handleOnClick(value)}
      >
        {checked && <div className="w-4 h-4 rounded-full bg-primary"></div>}
      </div>
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default FormCheckox;
