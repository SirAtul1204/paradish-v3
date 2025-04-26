"use client";
import { useEffect, useState } from "react";

const Switch = () => {
  const [value, setValue] = useState("light");

  const handleClick = () => {
    setValue(value === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setValue("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", value);
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (value === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [value]);

  return (
    <button
      className="border-border bg-surface hover:border-primary flex cursor-pointer items-center justify-center rounded-full border p-1"
      onClick={handleClick}
    >
      <img
        src={value === "light" ? "/sun.svg" : "/moon.svg"}
        className="h-6 w-6"
        style={{ filter: value === "dark" ? "invert(1)" : "none" }}
      />
    </button>
  );
};

export default Switch;
