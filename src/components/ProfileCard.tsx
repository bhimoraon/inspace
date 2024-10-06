import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfileCard() {
	return (
		<div className=" p-4    text-xs flex flex-col gap-6">
			<div className=" h-20 relative">
				<Image
					src="https://images.pexels.com/photos/1896081/pexels-photo-1896081.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
					fill
					className="rounded-md object-cover"
				/>
				<Image
					src="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
					width={48}
					height={48}
					className="rounded-full object-cover size-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-black  z-10"
				/>
			</div>
			<div className="h-20 flex gap-2 items-center flex-col ">
				<span className="font-semibold">Niraj Yadav</span>
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
					<span className="text-xs text-gay-500">500 Followers</span>
				</div>
				<Link
					href="/profile/niraj"
					className="bg-black text-white text-xs p-2 rounded-md"
				>
					My Profile
				</Link>
			</div>
		</div>
	);
}

export default ProfileCard;
