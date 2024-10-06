import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserInfoCard({ userId }: { userId: string }) {
	return (
		<div className="  bulg   p-4 rounded-lg    text-xs">
			<div className="flex justify-between font-medium mb-4 items-center">
				<span className="">User Information</span>
				<Link href="/" className="text-blue-500 text-sm">
					See all
				</Link>
			</div>
			{/* BOTTOM */}
			<div className="flex gap-6  flex-col">
				<div className="flex items-center gap-2 ">
					<span className=" text-xl ">Niraj Yadav</span>
					<span className="text=sm">@nirajyadev</span>
				</div>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					odio velit ducimus est pariatur impedit accusamus tempore ex facere
					quis, asperiores aliquid soluta.
				</p>
				<div className="flex items-center gap-2">
					<Image src="/map.png" alt="" height={16} width={16} />
					<span>
						Living in <b>Denver</b>
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Image src="/school.png" alt="" height={16} width={16} />
					<span>
						Went to <b> Edgar High School</b>
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Image src="/work.png" alt="" height={16} width={16} />
					<span>
						Works at <b> Apple Inc.</b>
					</span>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-1 items-center">
						<Image src="/link.png" alt="" height={16} width={16} />
						<Link href="/" className="text-blue-500 font-medium">
							lama dev
						</Link>
					</div>
					<div className="flex gap-1 items-center">
						<Image src="/date.png" alt="" height={16} width={16} />
						<span>Joined November 2024</span>
					</div>
				</div>
				<button className="bg-blue-500 text-white text-sm rounded-md  p-2">
					Follow
				</button>
				<span className="text-red-500 self-end text-sm cursor-pointer">
					Block User
				</span>
			</div>
		</div>
	);
}

export default UserInfoCard;
