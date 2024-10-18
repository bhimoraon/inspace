import React from 'react'
import Image from 'next/image'
import { Comment,User } from '@prisma/client'

type CommentsWithUser = Comment & {user:User}
const CommentList = ({comments,postId}:{comments:CommentsWithUser,postId:string}) => {
  return (
    <>
    	<div className="flex px-4 items-center gap-4 ">
				<Image
					src="https://images.pexels.com/photos/27869972/pexels-photo-27869972/free-photo-of-women-in-white-clothing-sitting-together-on-rug.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
					alt=""
					height={32}
					width={32}
					className="size-8 rounded-full"
				/>
				{/* flex-1 fit the object */}
				<div className="flex items-center justify-between bg-[#f0f0f089]  rounded-xl text-sm px-6 py-2 w-full  flex-1">
					<input
						type="text"
						placeholder="Write a comment..."
						className="bg-transparent outline-none flex-1"
					/>
					<Image
						src="/emoji.png"
						alt=""
						height={16}
						width={16}
						className=" cursor-pointer"
					/>
				</div>
			</div>
			{/* COMMENTS */}

			
				<div className=" mt-3 border-t-[1px]">
					{/* COMMENTS */}
					<div className="flex  gap-4 justify-between mt-4">
						{/* avatar */}
						<Image
							src="https://images.pexels.com/photos/27869972/pexels-photo-27869972/free-photo-of-women-in-white-clothing-sitting-together-on-rug.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
							alt=""
							height={40}
							width={40}
							className="size-10 rounded-full"
						/>

						{/* desc */}
						<div className="flex flex-col gap-2 flex-1">
							<span className="font-medium">Bernice Spencer</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
								obcaecati magni consequatur eum quaerat quis natus ab modi
								numquam tenetur ex itaque reiciendis. Exercitationem esse magni
								modi omnis nisi natus.
							</p>
							<div className="flex items-center gap-8 text-xs text-yellow-500">
								<div className=" flex gap-4 items-center">
									<Image
										src="/like.png"
										alt=""
										width={12}
										height={12}
										className="cursor-pointer size-4"
									/>
									<span className="text-yellow-300">|</span>
									<span className="text-yellow-500">123 Likes</span>
								</div>
								<div className="">Reply</div>
							</div>
						</div>
						{/* Icon */}
						<Image
							src="/more.png"
							alt=""
							width={16}
							height={16}
							className="cursor-pointer size-4"
						/>
					</div>
				</div>
			</>
  )
}

export default CommentList