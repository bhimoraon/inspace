import { getUser } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";

import React from "react";
import FriendRequestList from "./FriendRequestList";
import Link from "next/link";

async function FriendRequest() {
	const user = await getUser();
	if (!user) return null;
	const requests = await prisma.followRequest.findMany({
		where: {
			receiverId: user.id,
		},
		take: 3,
		include: {
			sender: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	if (requests.length === 0) return null;

	return (
		<div className=" bulg    p-4 rounded-lg   text-xs">
			<div className="flex justify-between font-medium items-center">
				<span className="">Friend Requests</span>
				<Link href="/" className="text-blue-500 text-sm">
					See all
				</Link>
			</div>
			<FriendRequestList requests={requests} />
		</div>
	);
}

export default FriendRequest;
