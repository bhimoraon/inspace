"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import Link from "next/link";

function Post({ link, profileLink, name }: any) {
	const [first, setfirst] = useState(false);
	const [view, setView] = useState(false);
	const [angle, setAngle] = useState(true);
	const [likes, setLikes] = useState(0);
	const [likeMode, setLikeMode] = useState(true);
	useEffect(() => {
		setLikes(Math.floor(Math.random() * 1000));
	}, []);

	profileLink = profileLink ? profileLink : link;
	return (
		<div className="flex flex-col bulg py-4   border-gray-950 gap-2 ">
			{view && (
				<div
					className={`ease-in-out z-[999] duration-1000 bg-black opacity-${
						view ? "100" : "0"
					} top-0 left-0 absolute w-screen h-screen    `}
				>
					<div
						onClick={() => {
							setAngle(false);
							setTimeout(() => {
								setView(false);
								setAngle(true);
							}, 300);
						}}
						className=" flex flex-col justify-center items-center gap-6 cursor-pointer absolute z-[999] size-10 top-5 right-5 "
					>
						<div
							className={`  bg-white   h-1 w-10 origin-left rotate-${
								angle ? "45" : "0"
							} ease-in-out duration-500 rounded-sm`}
						></div>
						<div
							className={`   bg-white  h-1 w-10 origin-left -rotate-${
								angle ? "45" : "180"
							} ease-in-out duration-500 rounded-sm`}
						></div>
					</div>
					<Image
						onClick={() => {
							setView(true);
						}}
						src={link}
						alt=""
						layout="fill" // object-contain
						className={`   object-contain`}
					/>
				</div>
			)}
			{/* USER */}
			<div className="flex px-4 justify-between items-center">
				<Link
					href={{ pathname: `profile/${name}` }}
					className="flex items-center gap-4 "
				>
					<Image
						src={profileLink}
						alt=""
						width={40}
						height={40}
						className="w-10 h-10 rounded-full object-cover object-center "
					/>
					<span className="font-bold">{name}</span>
				</Link>
				<Image
					src="/more.png"
					alt=""
					width={16}
					height={16}
					className="w-4 h-4 "
				/>
			</div>
			{/*DESC */}
			<div className="flex flex-col  gap-4">
				<div className="w-full min-h-[70vh]  relative ">
					{/* Just becouse wer have ralative here so we are not height and width attributes in the image but using fill, means using parent container for Image   */}
					<Image
						onClick={() => {
							setView(true);
						}}
						src={link}
						alt=""
						layout="fill" // object-contain
						className={`  object-contain`}
					/>
				</div>
				<p className="px-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
					adipisci rem labore, repellat laudantium perferendis laborum maxime
					culpa dicta blanditiis itaque recusandae! Atque ipsa ea, doloremque
					harum quis dignissimos dolor?
				</p>
			</div>
			{/* INTERACTION */}

			<div className="flex px-4 py-2 justify-between items-center text-sm my-2">
				<div className="flex gap-8">
					<div
						onClick={() => {
							if (likeMode) {
								setLikes(likes + 1);
								setLikeMode(!likeMode);
							} else {
								setLikes(likes - 1);
								setLikeMode(!likeMode);
							}
						}}
						className={`flex      items-center gap-4 cursor-pointer rounded-xl `}
					>
						{" "}
						<span
							className={` p-2 rounded-xl hover:scale-[1.5] transition ${
								likeMode ? "    " : "bg-blue-300"
							}`}
						>
							<Image src="/like.png" alt="" width={16} height={16} />
						</span>
						<span className=" ">|</span>
						<span className=" pr-2 ">
							{likes}
							<span className="hidden md:inline "> Likes</span>
						</span>
					</div>
					<div
						onClick={() => {
							setfirst(!first);
						}}
						className="flex items-center gap-4 cursor-pointer      rounded-xl p-2"
					>
						<Image src="/comment.png" alt="" width={16} height={16} />
						<span className=" ">|</span>
						<span className="">
							54<span className="hidden md:inline "> Comments</span>
						</span>
					</div>
				</div>
				<div className="">
					<div className="flex  cursor-pointer items-center gap-4      rounded-xl p-2">
						<Image src="/share.png" alt="" width={16} height={16} />
						<span className=" ">|</span>
						<span className=" ">
							125<span className="hidden md:inline "> Shares</span>
						</span>
					</div>
				</div>
			</div>

			<Comments com={first} />
		</div>
	);
}

export default Post;
