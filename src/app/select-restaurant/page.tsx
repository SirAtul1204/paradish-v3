import Link from "next/link";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";
import { ROUTES } from "~/utils/constants";

type Restaurant = {
  id: number;
  name: string;
  address: string;
};

const Card = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <Link
      className="bg-surface border-border hover:border-primary flex h-56 w-56 cursor-pointer items-center justify-center border"
      href={ROUTES.DASHBOARD(String(restaurant.id))}
    >
      {restaurant.name}
    </Link>
  );
};

export default async function SelectRestaurant() {
  const restaurants = await api.restaurant.getAllByUser();

  if (restaurants.length === 0) {
    redirect(ROUTES.JOIN_CREATE_RESTAURANT);
  }

  if (restaurants.length === 1) {
    redirect(ROUTES.DASHBOARD(String(restaurants[0]!.restaurantId)));
  }

  return (
    <div className="text-primary-text flex flex-col gap-8 text-2xl">
      <h1 className="text-center">Select restauarant</h1>
      <div className="flex items-center justify-center gap-8">
        {restaurants.map((item) => (
          <Card key={item.restaurantId} restaurant={item.restaurant} />
        ))}
      </div>
    </div>
  );
}
