import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { restaurant, userRestaurant } from "~/server/db/schema";

export const restaurantRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().max(255),
        address: z.string().max(255),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.user.id;
      console.log({ userId });
      const restaurantRecord = await ctx.db
        .insert(restaurant)
        .values({
          ...input,
        })
        .returning();
      await ctx.db.insert(userRestaurant).values({
        userId: userId!,
        restaurantId: restaurantRecord[0]!.id,
        role: "OWNER",
      });
      return { message: "Restaurant created!" };
    }),
  getAllByUser: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user.id;
    const restaurants = await ctx.db.query.userRestaurant.findMany({
      where: eq(userRestaurant.userId, userId!),
      with: {
        restaurant: true,
      },
    });

    return restaurants;
  }),
});
