"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

function StoryCircle({ user, link }: any) {
	return (
		<div className="flex flex-col  items-center gap-3 cursor-pointer ">



			<Dialog>
				<DialogTrigger asChild>
					<div className=" flex flex-col gap-2 justify-center items-center">

						<div className=" relative size-[45px] md:size-[80px] flex justify-center items-center ring-4 ring-blue-500 rounded-full">
							<Image
								// Nextjs does not allow to use external images to use them first
								// add them in next.config.mjs
								src={link}
								alt=""
								fill
								className=" rounded-full ring-2 object-cover ring-black  "
							/>
						</div>
						<span className="font-medium">{ }</span>
					</div>
				</DialogTrigger>
				<DialogContent className="  w-[100vw] h-[95vh]">
					<DialogHeader>
						<DialogTitle>
							<div className="relative">
								<Link
									href={`/profile/${user.username}`}
									className="flex absolute z-50 items-center gap-4 "
								>
									<Image
										src={user.picture || "/noAvatar.png"}
										alt=""
										width={40}
										height={40}
										className="w-10 ring-white ring-1 h-10 rounded-full object-cover object-center "
									/>
									<span className="font-bold text-white">{user.username}</span>
								</Link>
							</div>
							{/* <div className="relative h-[100vh] bg-red-500 w-full"> */}

							<Image
								src={"https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600"}
								alt=""
								fill
								className=" object-contain "
							/>
							{/* </div> */}
							{/* <DialogDescription>
						</DialogDescription> */}
						</DialogTitle>

					</DialogHeader>

					<DialogFooter>
					</DialogFooter>
				</DialogContent>
			</Dialog>


		</div>
	);
}

export default StoryCircle;
