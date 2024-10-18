import { googleOAuthClient } from "@/lib/googleOAuthClient";
import { createSession } from "@/app/authenticate/auth.action";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { lucia } from "@/lib/lucia";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    if (!code || !state) {
      console.error("No code or state found in the URL.");
      return NextResponse.json({ error: "Invalid Request: Missing OAuth parameters." }, { status: 400 });
    }

    const codeVerifier = cookies().get("codeVerifier")?.value;
    const savedState = cookies().get("state")?.value;

    if (!codeVerifier || !savedState) {
      console.error("No code verifier or state in cookies.");
      return NextResponse.json({ error: "Invalid Request: Missing cookies." }, { status: 400 });
    }

    if (state !== savedState) {
      console.error("State mismatch.");
      return NextResponse.json({ error: "Invalid Request: State mismatch." }, { status: 400 });
    }

    const { accessToken } = await googleOAuthClient.validateAuthorizationCode(code, codeVerifier);
    const googleResponse = await fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const googleData = (await googleResponse.json()) as {
      id: string;
      email: string;
      name: string;
      picture: string;
    };

    let tokenData: { id: string; username: string };

    // Check if the user already exists
    const existingUser = await prisma.user.findFirst({
      where: { email: googleData.email },
    });

    if (existingUser) {
      tokenData = {
        id: existingUser.id,
        username: existingUser.username,
      };
    } else {
      let generatedUsername = googleData.email.split("@")[0] || "default_username";






      if (!generatedUsername || generatedUsername === "") {
        generatedUsername = "user" + Math.floor(Math.random() * 10000); // Fallback to avoid null/empty username
      }

      // Generate unique username
      for (let i = 0; i < 10; i++) {
        const isUsernameTaken = await prisma.user.findUnique({
          where: { username: generatedUsername },
        });

        if (!isUsernameTaken) {
          break;
        }

        // Corrected username generation logic
        generatedUsername = `${generatedUsername}${Math.floor(Math.random() * 1000)}`;

        if (i === 9) {
          console.error("Failed to generate a unique username.");
          return NextResponse.json({ error: "Username generation failed." }, { status: 500 });
        }
      }

      const user = await prisma.user.create({
        data: {
          name: googleData.name,
          username: generatedUsername,
          email: googleData.email,
          picture: googleData.picture,
        },
      });

      tokenData = {
        id: user.id,
        username: user.username,
      };
    }

    // Create session and set cookies securely
    await createSession(tokenData);

    console.log("working fine")
    return NextResponse.redirect(process.env.DOMAIN!)
  } catch (error) {
    console.error("An error occurred during Google OAuth:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
