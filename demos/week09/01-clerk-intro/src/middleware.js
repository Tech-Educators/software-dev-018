import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// protecting certain routes of our application - so if you want a user to be signed in the view a certain route, put it in here.
const isProtectedRoute = createRouteMatcher([
    '/profile(.*)',
    '/gallery(.*)'
])

export default clerkMiddleware(async (auth, req) => {
    // if the reqest is going to one of our protected routes, we call auth.protect, which redirects them to the sign in route.
    if (isProtectedRoute(req)) await auth.protect()
  })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};