import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    const allowed = false;
    if (!allowed)
        return NextResponse.redirect("/")

}

export const config = {
    
    
    matcher: ["/dashboard"]
}