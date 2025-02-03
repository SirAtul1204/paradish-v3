"use client";
import Image from "next/image";
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
    <div className="switch">
      <button
        className="flex items-center justify-center  cursor-pointer hover:opacity-75 "
        onClick={handleClick}
      >
        <Image
          alt=""
          src={value === "light" ? "/sun.svg" : "/moon.svg"}
          width={24}
          height={24}
          style={{ filter: value === "dark" ? "invert(1)" : "none" }}
        />
      </button>
    </div>
  );
};

export default Switch;
