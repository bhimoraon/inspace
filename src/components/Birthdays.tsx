import Image from "next/image";
import Link from "next/link";
import React from "react";

function Birthdays() {
	return (
		<div className=" bulg p-4 rounded-lg   text-xs">
			<div className="flex justify-between font-medium items-center">
				<span className="">Birthdays</span>
			</div>
			{/* user  */}
			<div className="flex items-center justify-between pt-4">
				<div className="flex justify-center items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={40}
						height={40}
						className="rounded-full object-cover size-10 "
					/>{" "}
					<span className="  font-semibold">Aryan Yadav</span>
				</div>
				<div className="flex items-center justify-end gap-3">
					<button className="bg-black text-white text-xs px-2 py-1 rounded-md">
						Celebrate
					</button>
				</div>
			</div>
			{/* upcomming event */}
			<div className="  flex mt-4 items-center gap-4 rounded-lg p-4">
				<Image src="/gift.png" alt="" width={24} height={24} />
				<Link href="/" className=" flex flex-col gap-1 text-xs">
					<span className="font-semibold ">Upcoming Birthdays </span>
					<span className="">See other 16 have upcoming birthdays</span>
				</Link>
			</div>
		</div>
	);
}

export default Birthdays;
