import Link from "next/link";
import { ROUTES } from "~/utils/constants";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ restaurantId: string }>;
}) {
  const { restaurantId } = await params;

  return (
    <div className="text-primary-text">
      <h1 className="mb-8 text-center text-2xl">Dashboard</h1>
      <div>
        <Link
          href={ROUTES.MANAGE_EMPLOYEES(restaurantId)}
          className="hover:text-primary hover:border-primary group flex cursor-pointer flex-col items-center justify-center gap-2 p-2 text-center transition-all"
        >
          <div className="border-border bg-surface group-hover:border-primary flex items-center justify-center border p-2 transition-all group-hover:scale-110">
            <img
              src="/employee.png"
              alt="manage_employee"
              className="h-20 w-20"
              loading="lazy"
            />
          </div>
          Manage employees
        </Link>
      </div>
    </div>
  );
}
