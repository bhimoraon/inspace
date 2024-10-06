"use client";
import Link from "next/link";
import React, { useState } from "react";
function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden">
			<div
				className="flex flex-col gap-1 cursor-pointer "
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<div
					className={`w-6 h-1 bg-blue-500 rounded-sm ${
						isOpen ? "rotate-45" : ""
					} origin-left ease-in-out duration-500`}
				/>
				<div
					className={`w-6 h-1 bg-blue-500 rounded-sm ${
						isOpen ? "opacity-0" : ""
					} ease-in-out duration-500`}
				/>
				<div
					className={`w-6 h-1 bg-blue-500 rounded-sm ${
						isOpen ? "-rotate-45" : ""
					} origin-left ease-in-out duration-500`}
				/>
			</div>
			{/* the sliding menu */}
			{isOpen && (
				<div className=" bg-white flex flex-col absolute top-16 left-0 w-full h-[calc(100vh-64px)] items-center justify-center gap-8 font-medium text-xl z-10     ">
					<Link href="#">Home</Link>
					<Link href="#">Groups</Link>
					<Link href="#">Stories</Link>
					<Link href="#">Friends</Link>
					<Link href="#">Login</Link>
				</div>
			)}
		</div>
	);
}

export default MobileMenu;
