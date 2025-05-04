import { useState, type ChangeEvent } from "react";

export default function useFormInput<
  T extends HTMLInputElement | HTMLSelectElement,
>() {
  const [val, setVal] = useState("");

  const handleChange = (e: ChangeEvent<T>) => {
    const valueTrimmed = e.target.value.trimStart();
    setVal(valueTrimmed);
  };

  const handleBlur = () => {
    setVal(val.trim().replace(/\s+/g, " "));
  };

  return { val, changeHandler: handleChange, blurHandler: handleBlur };
}
