// middleware.js
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = ['/', '/landing','/auth/signin', '/auth/signup'];

export async function middleware(request) {
  const token = await getToken({
    req: request,
  });

  const { pathname } = request.nextUrl;

  // Allow access to public routes regardless of authentication status
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // If user is not authenticated and trying to access protected route,
  // redirect to signin page
  if (!token && !publicRoutes.includes(pathname)) {
    const signInUrl = new URL('/auth/signin', request.url);
    signInUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // If user is authenticated and trying to access auth pages,
  // redirect to dashboard or home
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Configure which routes should be handled by the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};