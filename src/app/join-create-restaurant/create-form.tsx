"use client";
import { api } from "~/trpc/react";
import Button from "../_components/button";
import FormInput from "../_components/form-input";
import { useEffect, type FormEvent } from "react";
import useFormInput from "~/lib/hooks/useFormInput";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ROUTES } from "~/utils/constants";

export default function CreateForm() {
  const router = useRouter();
  const nameInput = useFormInput();
  const addressInput = useFormInput();

  const { mutate, isPending, isError, isSuccess, data } =
    api.restaurant.create.useMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ name: nameInput.val, address: addressInput.val });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      router.push(ROUTES.SELECT_RESTAURANT);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong! Please try again.");
    }
  }, [isError]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface flex w-1/2 flex-col gap-4 p-4"
    >
      <FormInput
        label="Restaurant name"
        value={nameInput.val}
        onChange={nameInput.changeHandler}
        onBlur={nameInput.blurHandler}
        errorMessage="Enter restaurant name"
        required
      />
      <FormInput
        label="Restaurant address"
        value={addressInput.val}
        onChange={addressInput.changeHandler}
        onBlur={addressInput.blurHandler}
        errorMessage="Enter restaurant address"
        required
      />
      <Button type="submit" disabled={isPending} isLoading={isPending}>
        Create
      </Button>
    </form>
  );
}
