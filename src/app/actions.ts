"use server";
import { db } from "@/db";
import { restaurant, userRestaurant } from "@/db/schema";
import { sendEmail } from "@/lib/resend-server";
import { getRecordFromFormData } from "@/utils/commonFunctions";
import { headers } from "next/headers";
import { z, ZodError } from "zod";

const registerOwnerSchema = z.object({
  restaurantName: z.string(),
  restaurantAddress: z.string(),
});

export const registerOwner = async (currentState: any, formData: FormData) => {
  try {
    console.log({ currentState, formData });

    const headersRecord = await headers();
    const userId = headersRecord.get("userId") as string;
    const userEmail = headersRecord.get("userEmail") as string;
    const userName = headersRecord.get("userName") as string;

    const { restaurantName, restaurantAddress } = registerOwnerSchema.parse(
      getRecordFromFormData(formData)
    );

    const { id: restaurantId } = (
      await db
        .insert(restaurant)
        .values({
          name: restaurantName,
          address: restaurantAddress,
        })
        .returning({ id: restaurant.id })
        .execute()
    )[0];

    console.log({ restaurantId, userId });

    await db
      .insert(userRestaurant)
      .values({
        userId: userId,
        restaurantId,
        role: "OWNER",
      })
      .execute();

    sendEmail({ to: userEmail, userName, emailType: "WELCOME" });

    return { ok: true };
  } catch (e: unknown) {
    if (e instanceof ZodError) {
      return { ok: false, errors: e.errors };
    }

    return { ok: false, errors: [(e as Error).message] };
  }
};
