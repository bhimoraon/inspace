import { getUser } from "@/lib/lucia";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

async function ProfileCard() {
	const user = await getUser();
	if (!user) {
		return null;
	}


	return (
		<div className=" p-4    text-xs flex flex-col gap-6">
			<div className=" h-20 relative">
				<Image
					src={user.cover || "https://images.pexels.com/photos/1896081/pexels-photo-1896081.jpeg?auto=compress&cs=tinysrgb&w=600"}
					alt=""
					fill
					className="rounded-md object-cover"
				/>
				<Image
					src={user.picture || "/noAvatar.png"}
					alt=""
					width={48}
					height={48}
					className="rounded-full bg-background object-cover size-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-black  z-10"
				/>
			</div>
			<div className="h-20 flex gap-2 items-center flex-col ">
				<span className="font-semibold">{user.name}</span>
				<div className="flex items-center gap-4 ">
					<div className="flex">
						<Image
							src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							width={12}
							height={12}
							className="rounded-full border-white border-[1px] object-cover size-3 "
						/>
						<Image
							src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							width={12}
							height={12}
							className="rounded-full border-white border-[1px] object-cover size-3 "
						/>
						<Image
							src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							width={12}
							height={12}
							className="rounded-full border-white border-[1px] object-cover size-3 "
						/>
					</div>
					<span className="text-xs text-gay-500">{user._count.followers} Followers</span>
				</div>
				<Link
					href={`/profile/${user.username}`}
					className="text-xs p-2 rounded-md"
				>
				<Button>Profile</Button>
				</Link>
			</div>
		</div>
	);
}

export default ProfileCard;
