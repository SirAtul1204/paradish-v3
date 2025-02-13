"use client";
import { fadeInUp } from "@/animations";
import Button from "@/components/Button";
import FormCheckox from "@/components/FormCheckbox";
import FormCheckboxContainer from "@/components/FormCheckboxContainer";
import FormInput from "@/components/FormInput";
import { Nullable } from "@/utils/types";
import { motion } from "motion/react";
import { useState } from "react";
import { registerOwner } from "../actions";

const Register = () => {
  const [joiningAs, setJoiningAs] =
    useState<Nullable<"owner" | "employee">>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    const response = await registerOwner(data);
    if (response?.status) {
    }
    console.log(data);
  };

  const OwnerForm = () => {
    return (
      <div className="flex flex-col gap-4 w-80">
        <motion.div
          {...fadeInUp({ delay: 0, doStagger: true })}
          className="flex flex-col"
        >
          <FormInput label="Restaurant Name" name="restaurantName" required />
        </motion.div>
        <motion.div
          {...fadeInUp({ delay: 1, doStagger: true })}
          className="flex flex-col"
        >
          <FormInput
            label="Restaurant Address"
            name="restaurantAddress"
            required
          />
        </motion.div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-medium">Register</h1>
      <motion.form
        {...fadeInUp}
        className="flex flex-col gap-4 w-80 h-[400px]"
        onSubmit={handleSubmit}
      >
        <FormCheckboxContainer label="Joining as">
          <FormCheckox
            label="Owner"
            name="joiningAs"
            value="owner"
            checked={joiningAs === "owner"}
            onClick={(value) => setJoiningAs(value as "owner")}
            required
          />
          <FormCheckox
            label="Employee"
            name="joiningAs"
            value="employee"
            checked={joiningAs === "employee"}
            onClick={(value) => setJoiningAs(value as "employee")}
            required
          />
        </FormCheckboxContainer>
        {joiningAs === "owner" && <OwnerForm />}
        {joiningAs !== null && (
          <motion.div
            {...fadeInUp({ delay: 2, doStagger: true })}
            className="flex flex-col"
          >
            <Button type="submit">Submit</Button>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default Register;
