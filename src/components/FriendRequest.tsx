import Image from "next/image";
import Link from "next/link";
import React from "react";

function FriendRequest() {
	return (
		<div className=" bulg    p-4 rounded-lg   text-xs">
			<div className="flex justify-between font-medium items-center">
				<span className="">Friend Requests</span>
				<Link href="/" className="text-blue-500 text-sm">
					See all
				</Link>
			</div>
			{/* USER */}
			<div className="flex items-center justify-between pt-4">
				<div className="flex justify-center items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={40}
						height={40}
						className="rounded-full object-cover size-10 "
					/>{" "}
					<span className="font-semibold">Ankit Goyal</span>
				</div>
				<div className="flex items-center justify-end gap-3">
					<Image
						src="/accept.png"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/reject.png"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</div>
			<div className="flex items-center justify-between pt-4">
				<div className="flex justify-center items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={40}
						height={40}
						className="rounded-full object-cover size-10 "
					/>{" "}
					<span className="font-semibold">Dr. Gajendra Purohit</span>
				</div>
				<div className="flex items-center justify-end gap-3">
					<Image
						src="/accept.png"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/reject.png"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</div>
			<div className="flex items-center justify-between pt-4">
				<div className="flex justify-center items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={40}
						height={40}
						className="rounded-full object-cover size-10 "
					/>{" "}
					<span className="font-semibold">Neso Academy</span>
				</div>
				<div className="flex items-center justify-end gap-3">
					<Image
						src="/accept.png"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/reject.png"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
}

export default FriendRequest;
