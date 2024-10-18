"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deletePost } from "@/lib/post.action";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { logout } from "@/app/authenticate/auth.action";

export function PostMenu({ postId }: { postId: string }) {
    const router = useRouter();


    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>


                <Image
                    src="/more.png"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 cursor-pointer"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={async () => {
                         const res=  await fetch("/api/post",{
                            method:"Delete"
                          })
                        deletePost(postId)
                    }}
                >
                    Delete
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {

                    }}
                >
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { }}>
                    Cancel
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default PostMenu