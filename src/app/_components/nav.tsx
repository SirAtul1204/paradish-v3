"use client";
import Link from "next/link";
import Switch from "./switch";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "~/lib/auth-client";
import clsx from "clsx";
import { api } from "~/trpc/react";

const Nav = () => {
  const router = useRouter();
  const params = useParams();
  const { data } = authClient.useSession();
  const [profileOpen, setProfileOpen] = useState(false);

  const selectedRestaurant = api.restaurant.doesUserBelongToRestaurant.useQuery(
    {
      restaurantId: parseInt(params.restaurantId! as string),
    },
    { enabled: false },
  );

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  useEffect(() => {
    if (params?.restaurantId) {
      void selectedRestaurant.refetch();
    }
  }, [params]);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-primary flex cursor-pointer items-center justify-center gap-2 text-xl font-medium"
        >
          <img src="/logo_sm.png" className="h-8 w-8" alt="paradish_logo" />
          Paradish
        </Link>
        {selectedRestaurant.isSuccess && (
          <p className="text-primary-text text-center text-xl">
            {selectedRestaurant.data.employee.restaurant.name}
          </p>
        )}
        <div className="flex items-center justify-center gap-4">
          <Switch />

          {data?.user.image && (
            <div className="relative">
              <button
                id="profile-btn"
                className={clsx(
                  "border-border bg-surface hover:border-primary cursor-pointer rounded-full border p-1",
                  profileOpen && "border-primary",
                )}
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <img
                  className="outline-border h-6 w-6 rounded-full outline"
                  src={data.user.image}
                  alt="user-image"
                  loading="lazy"
                />
              </button>
              {profileOpen && (
                <div
                  id="profile"
                  className="bg-surface border-border text-primary-text absolute top-10 right-0 w-24 border px-4 py-2"
                >
                  <ul>
                    <li>
                      <button
                        className="hover:text-primary cursor-pointer text-sm"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="from-primary to-secondary h-1 w-full rounded bg-gradient-to-r"></div>
    </div>
  );
};

export default Nav;
