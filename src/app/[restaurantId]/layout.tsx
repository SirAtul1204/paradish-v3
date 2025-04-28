import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { api } from "~/trpc/server";
import { ROUTES } from "~/utils/constants";

export default async function RestaurantLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ restaurantId: string }>;
}) {
  try {
    const { restaurantId } = await params;
    await api.restaurant.doesUserBelongToRestaurant({
      restaurantId: parseInt(restaurantId),
    });

    return children;
  } catch (e: unknown) {
    redirect(ROUTES.SELECT_RESTAURANT);
  }
}
