"use client";

import {
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type RefObject,
  type KeyboardEvent,
} from "react";
import Button from "../_components/button";
import type { Nullable } from "~/utils/types";

type Pos = 1 | 2 | 3 | 4 | 5 | 6;

interface CodeInputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  ref: RefObject<Nullable<HTMLInputElement>>;
}

const CodeInputBox = (props: CodeInputBoxProps) => {
  return (
    <input
      className="bg-background border-border focus:border-primary h-10 w-8 rounded border-2 text-center outline-none"
      max={1}
      required
      {...props}
    />
  );
};

export default function JoinForm() {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);

  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [val6, setVal6] = useState("");

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  const handleChange = (e: ChangeEvent<HTMLInputElement>, pos: Pos) => {
    const lengthOfInput = e.target.value.trim().length;
    let doFocusNext = true;
    if (lengthOfInput === 0) {
      doFocusNext = false;
    }
    if (lengthOfInput === 1 || lengthOfInput === 0) {
      switch (pos) {
        case 1:
          setVal1(e.target.value.toUpperCase());
          if (doFocusNext) ref2.current?.focus();
          break;
        case 2:
          setVal2(e.target.value.toUpperCase());
          if (doFocusNext) ref3.current?.focus();
          break;
        case 3:
          setVal3(e.target.value.toUpperCase());
          if (doFocusNext) ref4.current?.focus();
          break;
        case 4:
          setVal4(e.target.value.toUpperCase());
          if (doFocusNext) ref5.current?.focus();
          break;
        case 5:
          setVal5(e.target.value.toUpperCase());
          if (doFocusNext) ref6.current?.focus();
          break;
        case 6:
          setVal6(e.target.value.toUpperCase());
          break;
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, pos: Pos) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      switch (pos) {
        case 1:
          if (val1.length === 1) {
            setVal1("");
          }
          break;
        case 2:
          if (val2.length === 1) {
            setVal2("");
          } else {
            ref1.current?.focus();
            setVal1("");
          }
          break;
        case 3:
          if (val3.length === 1) {
            setVal3("");
          } else {
            ref2.current?.focus();
            setVal2("");
          }
          break;
        case 4:
          if (val4.length === 1) {
            setVal4("");
          } else {
            ref3.current?.focus();
            setVal3("");
          }
          break;
        case 5:
          if (val5.length === 1) {
            setVal5("");
          } else {
            ref4.current?.focus();
            setVal4("");
          }
          break;
        case 6:
          if (val6.length === 1) {
            setVal6("");
          } else {
            ref5.current?.focus();
            setVal5("");
          }
          break;
      }
    }
  };

  return (
    <form className="bg-surface flex w-1/2 flex-col gap-2 rounded p-4">
      <label>Unique invite code</label>
      <div className="flex items-center justify-between">
        <CodeInputBox
          value={val1}
          ref={ref1}
          onChange={(e) => handleChange(e, 1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        />
        <CodeInputBox
          value={val2}
          ref={ref2}
          onChange={(e) => handleChange(e, 2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
        />
        <CodeInputBox
          value={val3}
          ref={ref3}
          onChange={(e) => handleChange(e, 3)}
          onKeyDown={(e) => handleKeyDown(e, 3)}
        />
        <CodeInputBox
          value={val4}
          ref={ref4}
          onChange={(e) => handleChange(e, 4)}
          onKeyDown={(e) => handleKeyDown(e, 4)}
        />
        <CodeInputBox
          value={val5}
          ref={ref5}
          onChange={(e) => handleChange(e, 5)}
          onKeyDown={(e) => handleKeyDown(e, 5)}
        />
        <CodeInputBox
          value={val6}
          ref={ref6}
          onChange={(e) => handleChange(e, 6)}
          onKeyDown={(e) => handleKeyDown(e, 6)}
        />
      </div>
      <Button className="mt-2" type="submit" variant="secondary">
        Join
      </Button>
    </form>
  );
}
