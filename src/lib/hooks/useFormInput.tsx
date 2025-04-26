import { useState, type ChangeEvent } from "react";

type UseFormInputProps = {
  // should return true if val is valid
  //   validator?: (val: string) => boolean;
};

export default function useFormInput(props?: UseFormInputProps) {
  const [val, setVal] = useState("");
  const [isError, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueTrimmed = e.target.value.trimStart();
    setVal(valueTrimmed);
  };

  const handleBlur = () => {
    setVal(val.trim().replace(/\s+/g, " "));
  };

  return { val, changeHandler: handleChange, blurHandler: handleBlur };
}
