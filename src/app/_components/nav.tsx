"use client";
import Link from "next/link";
import Switch from "./switch";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "~/lib/auth-client";
import type { Nullable } from "~/utils/types";
import clsx from "clsx";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = authClient.useSession();

  const [name, setName] = useState<Nullable<string>>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-primary flex cursor-pointer items-center justify-center gap-2 text-xl font-medium"
        >
          <img src="/logo_sm.png" className="h-8 w-8" />
          Paradish
        </Link>
        {name && <div>{name}</div>}
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
