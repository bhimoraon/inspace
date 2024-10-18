"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { getUser } from "./lucia";



export const deletePost = async (postId: string) => {
   const user = await getUser()
    const post = await prisma.post.delete({
        where: {
            id: postId
        }
    })
 
    revalidatePath("/")
    revalidatePath(`/profile/${user?.username}`)





}