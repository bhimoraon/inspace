import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileCard from "../rightMenu/ProfileCard";
import Ad from "../rightMenu/Ad";
import { getUser } from "@/lib/lucia";

async function LeftMenu({ show }: { show: boolean }) {
	const user = await getUser()
	return (
		<div className={` flex flex-col relative h-screen pt-16 `}>
			{show && <ProfileCard />}
			<div className=" p-4   text-xs  flex flex-col  gap-2">
				<Link
					href={`/profile/${user?.username}`}
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/posts.png" alt="" width={20} height={20} />
					<span>My Posts</span>
				</Link>
				<Link
					href="/activity"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/activity.png" alt="" width={20} height={20} />
					<span>Activity</span>
				</Link>
				<Link
					href="/market"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/market.png" alt="" width={20} height={20} />
					<span>Marketplace</span>
				</Link>
				<Link
					href="/events"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/events.png" alt="" width={20} height={20} />
					<span>Events</span>
				</Link>
				<Link
					href={`/profile/${user?.username}`}
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/albums.png" alt="" width={20} height={20} />
					<span>Albums</span>
				</Link>
				<Link
					href={`/profile/${user?.username}`}
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/videos.png" alt="" width={20} height={20} />
					<span>Videos</span>
				</Link>
				<Link
					href="/news"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/news.png" alt="" width={20} height={20} />
					<span>News</span>
				</Link>
				<Link
					href="/courses"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/Courses.png" alt="" width={20} height={20} />
					<span>Courses</span>
				</Link>
				<Link
					href="/lists"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/lists.png" alt="" width={20} height={20} />
					<span>Lists</span>
				</Link>
				<Link
					href="/settings"
					className="  flex items-center gap-4 p-2 rounded-lg hover:bg-[#dfdfdf]"
				>
					<Image src="/settings.png" alt="" width={20} height={20} />
					<span>Settings</span>
				</Link>
			</div>
			{!show && <Ad pro={"absolute bottom-2 "} size={"sm"} />}
		</div>
	);
}

export default LeftMenu;
