import createMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const PUBLIC_PATHS = new Set([
  "/",
  "/sign-up",
  "/auth/signin",
  "/auth/signup",
  "/favicon.ico",
  "/static",
]);

const AUTH_PATHS = new Set(["/auth/signin", "/auth/signup", "/sign-up"]);

const STATIC_FILE_REGEX =
  /\.(png|jpg|jpeg|gif|svg|css|js|woff2?|ttf|eot|ico|webp)$/i;

function getLocaleAndPath(pathname: string) {
  const segments = pathname.split("/");
  const possibleLocale = segments[1];

  const hasLocale = routing.locales.includes(possibleLocale as never);
  const locale = hasLocale ? possibleLocale : routing.defaultLocale;

  const pathnameWithoutLocale = hasLocale
    ? `/${segments.slice(2).join("/")}` || "/"
    : pathname;

  return {
    locale,
    pathnameWithoutLocale:
      pathnameWithoutLocale === "" ? "/" : pathnameWithoutLocale,
  };
}

function withLocale(path: string, locale: string) {
  if (locale === routing.defaultLocale) return path;
  return `/${locale}${path}`;
}

function isPublic(pathname: string) {
  return Array.from(PUBLIC_PATHS).some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function safeCallback(request: NextRequest) {
  const cb = request.nextUrl.searchParams.get("callbackUrl");

  if (!cb) return null;
  if (!cb.startsWith("/") || cb.startsWith("//")) return null;

  return cb;
}

export default async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (STATIC_FILE_REGEX.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const { locale, pathnameWithoutLocale } = getLocaleAndPath(pathname);

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAdminRoute =
    pathnameWithoutLocale === "/admin" ||
    pathnameWithoutLocale.startsWith("/admin/");

  const isUserRoute =
    pathnameWithoutLocale === "/user" ||
    pathnameWithoutLocale.startsWith("/user/");

  const isAuthRoute = AUTH_PATHS.has(pathnameWithoutLocale);

  if (isPublic(pathnameWithoutLocale) && !token) {
    return intlMiddleware(request);
  }

  if ((isAdminRoute || isUserRoute) && !token) {
    const loginUrl = new URL(withLocale("/auth/signin", locale), request.url);
    loginUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL(withLocale("/", locale), request.url));
  }

  if (isUserRoute && token?.role === "ADMIN") {
    return NextResponse.redirect(
      new URL(withLocale("/admin", locale), request.url),
    );
  }

  if (token && isAuthRoute) {
    const callbackUrl = safeCallback(request);

    const destination =
      callbackUrl ||
      withLocale(token.role === "ADMIN" ? "/admin" : "/user", locale);

    return NextResponse.redirect(new URL(destination, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|static).*)"],
};
