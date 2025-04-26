import { useState, type ChangeEvent } from "react";

export default function useFormInput() {
  const [val, setVal] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueTrimmed = e.target.value.trimStart();
    setVal(valueTrimmed);
  };

  const handleBlur = () => {
    setVal(val.trim().replace(/\s+/g, " "));
  };

  return { val, changeHandler: handleChange, blurHandler: handleBlur };
}
