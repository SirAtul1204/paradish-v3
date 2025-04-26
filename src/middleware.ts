import { betterFetch } from "@better-fetch/fetch";
import { NextRequest, NextResponse } from "next/server";
import type { auth } from "./lib/auth";
import { ROUTES } from "./utils/constants";

type Session = typeof auth.$Infer.Session;

const authRoutes = [ROUTES.REGISTER];
const publicRoutes = [ROUTES.HOME];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoutes = authRoutes.includes(pathName);
  const isPublicRoutes = publicRoutes.includes(pathName);

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  if (!session) {
    if (isAuthRoutes || isPublicRoutes) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(ROUTES.REGISTER, request.url));
  }

  const headers = {
    userId: session.user.id,
    userEmail: session.user.email,
    userName: session.user.name,
  };

  if (isAuthRoutes) {
    return NextResponse.redirect(
      new URL(ROUTES.SELECT_RESTAURANT, request.url),
      {
        headers,
      },
    );
  }

  return NextResponse.next({
    headers,
  });
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)"],
};
