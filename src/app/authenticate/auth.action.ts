"use server"

import { never, z } from "zod"
import { signUpSchema } from "./SignUpForm"
import { signInSchema } from "./SignInForm";
import { Argon2id } from "oslo/password"
import { prisma } from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"
import { generateCodeVerifier, generateState } from "arctic";
import { googleOAuthClient } from "@/lib/googleOAuthClient";


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
        const user = await prisma.user.create({
            data: {

                email: values.email.toLowerCase(),
                name: values.name,
                hashedPassword
                // hashedPassword: values.password
            }
        });
        const takenData = {
            email: values.email,
            name: values.name,
            password: values.password

        }
        const token = await jwt.sign(takenData, "RohanKachhap", {});
        cookies().set("userInfo", token, { httpOnly: true });


        const session = await lucia.createSession(user.id, {});
        const sessionCookie = await lucia.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        return { message: "User created successfully", success: true };


    } catch (error) {
        return {
            message: "something went wrong", success: false, status: 500

        }
    }

}


export const signIn = async (values: z.infer<typeof signInSchema>) => {

    try {



        const user = await prisma.user.findUnique({
            where: {
                email: values.email.toLowerCase()
            }
        });


        if (!user || !user.hashedPassword) {
            return { message: "Invalid Credentials!", success: false }
        }

        const passwordMatch = await new Argon2id().verify(user.hashedPassword, values.password)
        if (!passwordMatch)
            return { message: "Invalid Credentials!", success: false };

        const takenData = {
            email: values.email,
            name: user.name,
            password: values.password

        }
        const token = await jwt.sign(takenData, "RohanKachhap", {});
        cookies().set("userInfo", token, { httpOnly: true });

        // successfully login
        const session = await lucia.createSession(user.id, {});
        const sessionCookie = await lucia.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        return { message: "Login successfull", success: true }

    } catch (error: any) {

        return {
            message: "Something went wrong", success: false, status: 500
        }

    }
}

export const logout = async () => {
    /// delete from database too
    const sessionCookie = await lucia.createBlankSessionCookie()
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);



    return redirect("/authenticate");
}


export const getGoogleOAuthConsenstUrl = async () => {
    try {
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