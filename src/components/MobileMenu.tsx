"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image"
function MobileMenu({ user }: { user: any }) {
	const [isOpen, setIsOpen] = useState(false);

	return (

		<>
			<div className="md:hidden">
				<div
					className="flex flex-col gap-1 cursor-pointer "
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<div className="md:hidden">
						<div
							className="flex flex-col gap-1 cursor-pointer "
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							<div
								className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""
									} origin-left ease-in-out duration-500`}
							/>
							<div
								className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""
									} ease-in-out duration-500`}
							/>
							<div
								className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""
									} origin-left ease-in-out duration-500`}
							/>
						</div>
						{/* the sliding menu */}
						{isOpen && (
							<div className=" bg-background flex flex-col absolute top-16 left-0 w-full h-[calc(100vh-64px)] items-center justify-center gap-8 font-medium text-xl z-10     ">
								<Link
									href={`/`}
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
						)}
					</div>

				</div>
			</div>
		</>
	);
}

export default MobileMenu;
