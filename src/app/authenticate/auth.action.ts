"use server"

import { never, z } from "zod"
import { Argon2id } from "oslo/password"
import { prisma } from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"
import { generateCodeVerifier, generateState } from "arctic";
import { googleOAuthClient } from "@/lib/googleOAuthClient";
import { signUpSchema } from "./SignUpForm";
import { signInSchema } from "./SignInForm";



export async function createSession(tokenData: { username: string, id: string }) {


    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {});
    cookies().set("userInfo", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

    // successfully login
    // session is created in the DataBase, with given user.id
    const session = await lucia.createSession(tokenData.id, {});
    // sessionCookie is created using name, session.id and attributes
    const sessionCookie = await lucia.createSessionCookie(session.id);

    // creating cookies in the browser sessionCookie is a object with keys name,
    // value, and attributes. Here values is same as session.id
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return { message: "Login successfull", success: true }
}

export const signUp = async (values: z.infer<typeof signUpSchema>) => {


    try {

        const existingUser = await prisma.user.findUnique({
            where: {
                email: values.email
            }
        });

        if (existingUser) {
            return { message: "User already exists", success: false }
        }
        //create hashed password
        const hashedPassword = await new Argon2id().hash(values.password)

        /// now create the user

        let generatedUsername = values.email.split("@")[0];


        while (await prisma.user.findUnique({
            where: {
                username: generatedUsername
            }
        })) {
            generatedUsername = generatedUsername + Math.floor(Math.random() * 1000)
        }




        const user = await prisma.user.create({
            data: {

                email: values.email,
                username: generatedUsername,
                hashedPassword

            }
        });
        const tokenData = {
            username: generatedUsername,
            id: user.id
        }
        return await createSession(tokenData);


    } catch (error) {
        return {
            message: "something went wrong", success: false, status: 500

        }
    }

}


export const signIn = async (values: z.infer<typeof signInSchema>) => {
    let user;

    try {
        if (values.username.includes('@')) {

            user = await prisma.user.findUnique({
                where: {
                    email: values.username
                }
            });

        } else {

            user = await prisma.user.findUnique({
                where: {
                    username: values.username
                }
            });
        }






        if (!user || !user.hashedPassword) {
            return { message: "Invalid Credentials!", success: false }
        }

        const passwordMatch = await new Argon2id().verify(user.hashedPassword, values.password)
        if (!passwordMatch)
            return { message: "Invalid Credentials!", success: false };

        const tokenData = {
            id: user.id,
            username: user.username,

        }

        return await createSession(tokenData);


    } catch (error: any) {

        return {
            message: "Something went wrong", success: false, status: 500
        }

    }
}

export const logout = async () => {
    // deletion of session token from database
    const sessionId = await cookies().get("session")!.value

    await prisma.session.delete({
        where: {
            id: sessionId
        }
    })
    // deletion of session token from cookies
    const sessionCookie = await lucia.createBlankSessionCookie()
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);



    return redirect("/authenticate");
}


export const getGoogleOAuthConsenstUrl = async () => {
    try {
        // generateState() and generateCodeVerifier are from arctic 
        const state = generateState()
        const codeVerifier = generateCodeVerifier();
        cookies().set("codeVerifier", codeVerifier, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        })
        cookies().set("state", state, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        })

        const authUrl = await googleOAuthClient.createAuthorizationURL(state, codeVerifier, {
            scopes: ["email", "profile"]
        })

        return { success: true, url: authUrl.toString() }
    } catch (error) {

        return { success: false, error: "something went wrong" }
    }

}


