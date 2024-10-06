import Image from "next/image";
import React from "react";

function Ad({ pro, size }: { size: "sm" | "md" | "lg"; pro: string | null }) {
	return (
		<div className={`p-4   ${size !== "sm" && "bulg"}   ${pro} rounded-md   text-sm`}>
			{/* top  */}
			<div className="flex items-center justify-between font-medium ">
				<span>Sponsored Ads</span>
				<Image src="/more.png" alt="" width={16} height={16} />
			</div>
			{/* bottom  */}
			<div
				className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
			>
				<div
					className={`relative w-full ${
						size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
					}`}
				>
					<Image
						src="https://images.pexels.com/photos/7651627/pexels-photo-7651627.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						//conain contain the full image
						//cover cover the full div
						fill
						className="rounded-lg object-cover"
					/>
				</div>
				<div className="flex items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						height={24}
						width={24}
						className="rounded-full size-6 object-cover  "
					/>
					<span className="font-medium text-blue-500">BigChef Lounge</span>
				</div>
				<p className={size === "sm" ? "text-xs" : "text-sm"}>
					{size === "sm"
						? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique ipsum veritatis veniam maxime, laboriosam deserunt ducimus excepturi nobis illum "
						: size === "md"
						? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique ipsum veritatis veniam maxime, laboriosam deserunt ducimus excepturi nobis illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique ipsum veritatis veniam maxime"
						: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique ipsum veritatis veniam maxime, laboriosam deserunt ducimus excepturi nobis illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique ipsum veritatis veniam maxime, laboriosam deserunt ducimus excepturi nobis illum "}
				</p>
				<button className="bg-black text-white  p-2 text-xs  rounded-lg">
					Learn More
				</button>
			</div>
		</div>
	);
}

export default Ad;
