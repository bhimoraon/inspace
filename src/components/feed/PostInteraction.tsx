"use client"
import { switchLike } from '@/lib/actions'
import Image from 'next/image'

import React, { useOptimistic } from 'react'

const PostInteraction = ({ postId, likes, commentNumber, userId }: { userId: string, postId: string, likes: string[], commentNumber: number }) => {
	const [likeState, setLikeState] = React.useState({
		likeCount: likes.length,
		isLiked: userId ? likes.includes(userId) : false
	})

	const [optimisticLike, switchOptimisticLike] = useOptimistic(likeState, (state, value) => {
		return {
			// state gives the previous value
			likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
			isLiked: !state.isLiked
		}

	})

	const likeAction = async () => {
		switchOptimisticLike("")
		try {
			switchLike(postId);
			setLikeState(state => ({
				likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
				isLiked: !state.isLiked
			}))
		} catch (error) {

		}
	}
	return (
		<div className="flex px-4 py-2 justify-between items-center text-sm my-2">
			<div className="flex gap-8">
				<div

					className={`flex      items-center gap-4 cursor-pointer rounded-xl `}
				>
					{" "}
					<div className=" transition">
						<form action={likeAction}>
							<span
								className={` p-2 rounded-xl hover:bg-blue-100 active:bg-blue-400   ${optimisticLike.isLiked ? "bg-blue-400" : ""

									}`}
							>
								<button >

									<Image src={"/like.png"} alt="" width={16} height={16} />
								</button>
							</span>
						</form>
					</div>
					<span className=" ">|</span>
					<span className=" pr-2 ">
						{optimisticLike.likeCount}
						<span className="hidden md:inline "> Likes</span>
					</span>
				</div>
				<div

					className="flex items-center gap-4 cursor-pointer      rounded-xl p-2"
				>
					<Image src="/comment.png" alt="" width={16} height={16} />
					<span className=" ">|</span>
					<span className="">
						{commentNumber}<span className="hidden md:inline "> Comments</span>
					</span>
				</div>
			</div>
			<div className="">
				<div className="flex  cursor-pointer items-center gap-4      rounded-xl p-2">
					<Image src="/share.png" alt="" width={16} height={16} />
					<span className=" ">|</span>
					<span className=" ">
						<span className="hidden md:inline "> Shares</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default PostInteraction