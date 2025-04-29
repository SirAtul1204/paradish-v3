import { eq } from "drizzle-orm";
import {
  createTRPCRouter,
  protectedRestaurantProcedure,
} from "~/server/api/trpc";
import { employee } from "~/server/db/schema";

export const employeeRouter = createTRPCRouter({
  getAll: protectedRestaurantProcedure.query(async ({ ctx }) => {
    const employees = await ctx.db.query.employee.findMany({
      where: eq(employee.restaurantId, ctx.employee.restaurantId),
      columns: {
        employeeId: true,
        identification: true,
        image: true,
        joinedAt: true,
        payPerMonth: true,
        role: true,
      },
      with: {
        user: {
          columns: {
            name: true,
          },
        },
      },
    });

    return {
      employees,
    };
  }),
});
