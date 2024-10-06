import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserMediaCard({ userId }: { userId: string }) {
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
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192578/pexels-photo-28192578/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192574/pexels-photo-28192574/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192576/pexels-photo-28192576/free-photo-of-two-people-sitting-on-a-bench-with-skateboards.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192578/pexels-photo-28192578/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192574/pexels-photo-28192574/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192576/pexels-photo-28192576/free-photo-of-two-people-sitting-on-a-bench-with-skateboards.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192578/pexels-photo-28192578/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
				<div className="relative w-1/5 h-24 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/28192574/pexels-photo-28192574/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill
						className="object-cover rounded-md"
					/>
				</div>
			</div>
		</div>
	);
}

export default UserMediaCard;
