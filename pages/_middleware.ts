import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (protectedRoutes.find((url) => url === req.nextUrl.pathname)) {
    const token = req.cookies[process.env.MUSIFY_TOKEN_NAME];
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }
  }
}
