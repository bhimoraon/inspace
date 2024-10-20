// write the server actions here
"use server"

import { User } from "@prisma/client";
import { getUser } from "./lucia";
import { prisma } from "./prisma";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function switchFollow(user: User) {
    const currentUser = await getUser();
    if (!currentUser)
        throw new Error("User is not Authenticated!");
    try {

        const followRes = await prisma.follower.findFirst({
            where: {
                followerId: currentUser.id,
                followingId: user.id,
            },
        });
        if (followRes) {
            await prisma.follower.delete({
                where: {
                    id: followRes.id
                }
            })

        } else {
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where: {
                    senderId: currentUser.id,
                    receiverId: user.id
                }
            })
            if (existingFollowRequest) {
                await prisma.followRequest.delete({
                    where: {
                        id: existingFollowRequest.id
                    }
                })
            } else {
                await prisma.followRequest.create({
                    data: {
                        senderId: currentUser.id,
                        receiverId: user.id
                    }
                })
            }



        }

    } catch (error) {

    }
}

export async function acceptFollowRequest(userId: string) {

    const currentUser = await getUser();
    if (!currentUser) throw new Error("user not authenticated");
    try {

        const existingFollowRequest = await prisma.followRequest.findFirst({
            where: {
                senderId: userId,
                receiverId: currentUser.id
            }
        })
        if (existingFollowRequest) {
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id
                }
            })
        }
        
        await prisma.follower.create({
            data: {
                followerId: userId,
                followingId: currentUser.id
            }

        })
        revalidatePath("/")
        revalidatePath(`/profile/${currentUser.username}`)

    } catch (err) {
        console.log(err);
        throw new Error("Something went wrong");

    }


}

export async function declineFollowRequest(userId: string) {

    const currentUser = await getUser();
    if (!currentUser) throw new Error("user not authenticated");
    try {

        const existingFollowRequest = await prisma.followRequest.findFirst({
            where: {
                senderId: userId,
                receiverId: currentUser.id
            }
        })
        if (existingFollowRequest) {
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id
                }
            })
        }
        revalidatePath(`/profile/${currentUser.id}`)
    } catch (err) {
        console.log(err);
        throw new Error("Something went wrong");

    }


}

export async function goToProfile() {

    const user = await getUser();
    redirect(`/profile/${user?.username}`)
}

export async function updateProfile(formData: FormData, cover: string) {
    const user = await getUser();
    const data = Object.fromEntries(formData);
    const filterData = Object.fromEntries(Object.entries(data).filter(([_, value]) => value != ""))


    await prisma.user.update({
        where: {
            id: user!.id
        },
        data: {

            ...filterData,
            cover: cover
        }
    })

    revalidatePath(`/profile/${user?.username}`)
}

export async function switchLike(postId: string) {
    const user = await getUser();
    if (!user) {
        throw new Error("User is not Authenticated")
    }

    try {
        const exitingLike = await prisma.like.findFirst({
            where: {
                postId,
                userId: user!.id

            }
        })

        if (exitingLike) {
            await prisma.like.delete({
                where: {
                    id: exitingLike.id
                }
            })
        } else {
            await prisma.like.create({
                data: {
                    postId,
                    userId: user.id
                }
            })
        }


    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong");

    }

}

export async function postAction(data: string, imgUrl: string) {

    const user = await getUser();
    if (data === "" && imgUrl === "")
        return null
    await prisma.post.create({
        data: {
            desc: data,
            userId: user!.id,
            img: imgUrl

        }
    })
    revalidatePath('/')


}


export async function createStory(img: any) {

    const user = await getUser();

    await prisma.story.create({
        data: {
            img: img,
            userId: user!.id,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)

        }
    })
    revalidatePath('/')


}
