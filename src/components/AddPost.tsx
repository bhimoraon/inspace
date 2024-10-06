import Image from "next/image";
import React from "react";

function AddPost() {
	return (
		<div className=" bulg  p-4  md:rounded-lg flex gap-4 justify-between text-sm">
			{/* AVATAR */}
			<Image
				alt=""
				src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=600"
				width={48}
				height={48}
				className="size-12 object-cover rounded-full"
			/>
			{/* POST */}

			<div className="flex-1">
				{" "}
				{/*flex-1 : to find the element inside the container*/}
				{/* TEXT INPUT */}
				<div className=" flex gap-4 ">
					<textarea
						name=""
						className="p-2 bg-[#f0f0f089]  flex-1 rounded-lg"
						placeholder="What's on your mind?"
						id=""
					></textarea>
					<Image
						alt=""
						src="/emoji.png"
						width={20}
						height={20}
						className="size-5 cursor-pinter self-end"
					/>
				</div>
				{/* POST OPTIONS */}
				<div className=" flex items—center gap-4 flex-wrap mt-4  ">
					<div className="flex items-center gap-2 cursor-pointer">
						<Image
							alt=""
							src="/addimage.png"
							width={20}
							height={20}
							className="size-5 cursor-pinter self-end"
						/>
						Photo
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<Image
							alt=""
							src="/addVideo.png"
							width={20}
							height={20}
							className="size-5 cursor-pinter self-end"
						/>
						Video
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<Image
							alt=""
							src="/poll.png"
							width={20}
							height={20}
							className="size-5 cursor-pinter self-end"
						/>
						Poll
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<Image
							alt=""
							src="/addevent.png"
							width={20}
							height={20}
							className="size-5 cursor-pinter self-end"
						/>
						Event
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddPost;
