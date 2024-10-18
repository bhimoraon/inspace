import { getUser } from "@/lib/lucia";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";
import { prisma } from "@/lib/prisma";

async function UserInfoCard({ user }: { user: User }) {
	const currentUser = await getUser();
	let isFollowing; let isFollowRequestSent;
	if (currentUser) {

		isFollowRequestSent = await prisma.followRequest.findFirst({
			where: {
				senderId: currentUser.id,
				receiverId: user.id
			}
		})
		isFollowing = await prisma.follower.findFirst({
			where: {
				followingId: user.id,
				followerId: currentUser.id
			}
		})
	}
	console.log(isFollowing, isFollowRequestSent)

	const createdAtDate = new Date(user.createdAt);
	const formattedDate = createdAtDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return (
		<div className="  bulg   p-4 rounded-lg    text-xs">
			<div className="flex justify-between font-medium mb-4 items-center">
				<span className="">User Information</span>
				{currentUser!.id === user.id ? (

					<UpdateUser user={user} />

				) : (
					<Link href="#" className="text-blue-500 text-sm">
						See all
					</Link>
				)}
			</div>
			{/* BOTTOM */}
			<div className="flex gap-6  flex-col">
				<div className="flex items-center gap-2 ">
					<span className=" text-xl ">{user.name}</span>
					<span className="text=sm">@{user.username}</span>
				</div>

				{user.description && <p>{user.description}</p>}

				{user.city && (
					<div className="flex items-center gap-2">
						<Image src="/map.png" alt="" height={16} width={16} />
						<span>
							Living in <b>{user.city}</b>
						</span>
					</div>
				)}

				{user.school && (
					<div className="flex items-center gap-2">
						<Image src="/school.png" alt="" height={16} width={16} />
						<span>
							Went to <b> {user.school}</b>
						</span>
					</div>
				)}

				{user.work && (
					<div className="flex items-center gap-2">
						<Image src="/work.png" alt="" height={16} width={16} />
						<span>
							Works at <b>{user.work}</b>
						</span>
					</div>
				)}

				<div className="flex justify-between items-center">
					{user.website && (
						<div className="flex gap-1 items-center">
							<Image src="/link.png" alt="" height={16} width={16} />
							<Link href={user.website} className="text-blue-500 font-medium">
								{user.website}
							</Link>
						</div>
					)}

					{user.createdAt && (
						<div className="flex gap-1 items-center">
							<Image src="/date.png" alt="" height={16} width={16} />
							<span>Joined {formattedDate}</span>
						</div>
					)}
				</div>
				{!(user.id === currentUser!.id) &&
					<UserInfoCardInteraction user={user} isFollowing={isFollowing} isFollowRequestSent={isFollowRequestSent} />
				}
			</div>
		</div>
	);
}

export default UserInfoCard;
