import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Lista podržanih jezika
  locales: ["sr", "en"],

  // Podrazumevani jezik
  defaultLocale: "sr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(sr|en)/:path*"],
};
