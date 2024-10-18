"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Comments from "./Comments";
import { User, Post as PostType } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import PostMenu from "./PostMenu";

type FeedPostType = PostType & { user: User } & { likes: [{ userId: string }] } & { _count: { comments: number } }


function Post({ post }: { post: FeedPostType }) {


	const [view, setView] = useState(false);
	const [angle, setAngle] = useState(true);





	return (
		<div className="flex flex-col bulg py-4  w-full border-gray-950 gap-2 ">
			{view && (
				<div
					className={`ease-in-out z-[999] duration-1000 bg-black opacity-${view ? "100" : "0"
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
							className={`  bg-white   h-1 w-10 origin-left rotate-${angle ? "45" : "0"
								} ease-in-out duration-500 rounded-sm`}
						></div>
						<div
							className={`   bg-white  h-1 w-10 origin-left -rotate-${angle ? "45" : "180"
								} ease-in-out duration-500 rounded-sm`}
						></div>
					</div>
					{/* full screen image */}
					<Image
						onClick={() => {
							setView(true);
						}}
						src={post.img!}
						alt=""
						layout="fill" // object-contain
						className={`   object-contain`}
					/>
				</div>
			)}
			{/* USER */}
			<div className="flex px-4 justify-between items-center">
				<Link
					href={`/profile/${post.user.username}`}
					className="flex items-center gap-4 "
				>
					<Image
						src={post.user.picture || "/noAvatar.png"}
						alt=""
						width={40}
						height={40}
						className="w-10 h-10 rounded-full object-cover object-center "
					/>
					<span className="font-bold text-white">{post.user.username}</span>
				</Link>
			
				<PostMenu postId={post.id} />
			</div>
			{/*DESC */}
			<div className="flex flex-col  gap-4">
				{post.img && <div className="w-full min-h-[70vh]  relative ">
					{/* Just becouse wer have ralative here so we are not height and width attributes in the image but using fill, means using parent container for Image   */}
					<Image
						onClick={() => {
							setView(true);
						}}
						src={post.img}
						alt=""
						fill // object-contain
						className={`  object-contain`}
					/>
				</div>}
				<p className="px-4">
					{post.desc}
				</p>
			</div>
			{/* INTERACTION */}

			<PostInteraction userId={post.userId} postId={post.id} likes={post.likes.map(like => like.userId)} commentNumber={post._count.comments} />

			{/* <Comments postId={user} /> */}
		</div>

	);
}

export default Post;
