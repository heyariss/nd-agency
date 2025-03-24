import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    // Create a Supabase client configured to use cookies
    const supabase = createMiddlewareClient({ req: request, res: NextResponse.next() })

    // Check if user is authenticated
    const { data: { session }, error } = await supabase.auth.getSession()

    // If there's an auth error, redirect to login
    if (error) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Get the current URL path
    const path = request.nextUrl.pathname

    // Define public paths that don't require authentication
    const isPublicPath = path === '/login' || 
        path === '/register' || 
        path.startsWith('/_next') || 
        path.startsWith('/api') ||
        path.includes('/static/') ||
        path.includes('.') // For static files

    // If not authenticated and trying to access protected route
    if (!session && !isPublicPath) {
        const redirectUrl = new URL('/login', request.url)
        redirectUrl.searchParams.set('redirectedFrom', path)
        return NextResponse.redirect(redirectUrl)
    }

    // If authenticated and trying to access dashboard
    if (session && path.startsWith('/dashboard')) {
        try {
            // Get user role from users table
            const { data: userRole, error: roleError } = await supabase
                .from('users')
                .select('role')
                .eq('id', session.user.id)
                .single()

            if (roleError) throw roleError

            // If user is not an admin, redirect to login
            if (!userRole || userRole.role !== 'admin') {
                return NextResponse.redirect(new URL('/login', request.url))
            }
        } catch {
            // If there's an error checking the role, redirect to login
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}

// Configure which routes to run the middleware on
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public folder)
         */
        '/((?!_next/static|_next/image|favicon.ico|public).*)',
    ],
}