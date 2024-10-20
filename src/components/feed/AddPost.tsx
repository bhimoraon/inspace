"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { postAction } from "@/lib/actions";
import { CldUploadWidget } from "next-cloudinary";
import ProcessingButton from "../rightMenu/ProcessingButton";

function AddPost({ user }: any) {
	const [data, setData] = useState('')
	const [img, setImg] = useState<any>('');
	const handleSubmit = () => {
		postAction(data, img.secure_url);
	}

	return (
		<div className=" bulg relative  p-4  md:rounded-lg flex gap-4 justify-between text-sm">

			{/* AVATAR */}
			<Image
				alt=""
				src={user?.picture || "/noAvatar.png"}
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

						className="p-2 bg-[#f0f0f089]  flex-1 rounded-lg"
						placeholder="What's on your mind?"
						value={data}
						onChange={(e) => { setData(e.target.value) }}

					></textarea>
					{/* <Image
						alt=""
						src="/emoji.png"
						width={20}
						height={20}
						className="size-5 cursor-pinter self-end"
					/> */}
				</div>
				{/* POST OPTIONS */}
				<div className=" flex items—center gap-4 flex-wrap mt-4  ">


					<CldUploadWidget
						uploadPreset="Inspace"
						onSuccess={(result) => setImg(result.info)}
					>
						{({ open }) => {
							return (
								<div onClick={() => open()} className="flex gap-2 cursor-pointer">

									<Image
										alt=""
										src="/addimage.png"
										width={20}
										height={20}
										className="size-5 cursor-pinter self-end"
									/> Photo
								</div>

							);
						}}
					</CldUploadWidget>

					{/* <div className="flex items-center gap-2 cursor-pointer">
						<Image
							alt=""
							src="/addVideo.png"
							width={20}
							height={20}
							className="size-5 cursor-pinter self-end"
						/>
						Video
					</div> */}
					<form action={handleSubmit} className="absolute bottom-2 right-4">

						<ProcessingButton process="Post" processing="Posting" />
					</form>
				</div>
			</div>
		</div>

	);
}

export default AddPost;
