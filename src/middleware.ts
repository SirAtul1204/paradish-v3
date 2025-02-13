import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Session = typeof auth.$Infer.Session;

const authRoutes = ["/register", "/login"];
const publicRoutes = ["/"];
const userTypeRoutes = ["/user-type"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoutes = authRoutes.includes(pathName);
  const isPublicRoutes = publicRoutes.includes(pathName);
  const isUserTypeRoutes = userTypeRoutes.includes(pathName);

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  if (!session) {
    if (isAuthRoutes || isPublicRoutes) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next({
    headers: {
      userId: session.user.id,
      userEmail: session.user.email,
      userName: session.user.name,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)"],
};
