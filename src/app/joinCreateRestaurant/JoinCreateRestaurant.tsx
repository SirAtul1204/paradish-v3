"use client";
import {
  fadeInLeft,
  fadeInRight,
  fadeOutLeft,
  fadeOutRight,
} from "@/animations";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { Nullable } from "@/utils/types";
import { AnimatePresence, motion } from "motion/react";
import { useActionState, useEffect, useState } from "react";
import { registerOwner } from "../actions";

export const JoinCreateRestaurant = () => {
  const [choice, setChoice] = useState<Nullable<"create" | "join">>(null);

  const [state, formAction, isPending] = useActionState(registerOwner, null);

  useEffect(() => {
    console.log({ state, isPending });
  }, [state, isPending]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-xl">Create or Join a Restaurant</h2>
      <form action={formAction} className="flex flex-col gap-2 h-80">
        <AnimatePresence>
          {!choice && (
            <motion.div
              {...fadeInLeft({})}
              exit={{ ...fadeOutLeft({}) }}
              className="flex flex-col gap-4"
            >
              <Button onClick={() => setChoice("create")}>
                Create a Restaurant
              </Button>
              <Button variant="secondary" onClick={() => setChoice("join")}>
                Join a Restaurant
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {choice === "create" && (
            <motion.div
              {...fadeInRight({ delay: 1 })}
              className="flex flex-col gap-4"
              exit={{ ...fadeOutRight({}) }}
            >
              <FormInput
                label="Restaurant's Name"
                name="restaurantName"
                required
              />
              <FormInput
                label="Restaurant's Address"
                name="restaurantAddress"
                required
              />
              <Button type="submit" isLoading={isPending}>
                Submit
              </Button>
              <Button
                disabled={isPending}
                onClick={() => setChoice(null)}
                variant="secondary"
              >
                Back
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default JoinCreateRestaurant;
