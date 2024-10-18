import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function UserMediaCard({ user }: { user: User }) {
	const postWithMedia = await prisma.post.findMany({
		where: {
			userId: user.id,
			img: {
				not: null,
			},
		},
			take:8,
			orderBy:{
				createdAt: "desc" //descending order
			}
	});

	return (
		<div className=" bulg    p-4 rounded-lg   text-xs flex flex-col gap-4">
			<div className="flex justify-between font-medium items-center">
				<span className="">User Media</span>
				<Link href="/" className="text-blue-500 text-sm">
					See all
				</Link>
			</div>
			{/* BOTTOM  */}
			<div className="flex gap-4 justify-between flex-wrap">
				{postWithMedia.length
					? postWithMedia.map((post) => (
							<div className="relative w-1/5 h-24 cursor-pointer" key={post.id}>
								<Image
									src={post.img!}
									alt=""
									fill
									className="object-cover rounded-md"
								/>
							</div>
					  ))
					: "No media found!"}
			</div>
		</div>
	);
}

export default UserMediaCard;
