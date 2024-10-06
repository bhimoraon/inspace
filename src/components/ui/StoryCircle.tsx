import Image from "next/image";
import React from "react";

function StoryCircle({ name, link }: any) {
	return (
		<div className="flex flex-col  items-center gap-2 cursor-pointer ">
			<div className=" relative size-[45px] md:size-[80px] flex justify-center items-center ring-4 ring-blue-400 rounded-full">
				<Image
					// Nextjs does not allow to use external images to use them first
					// add them in next.config.mjs
					src={link}
					alt=""
					fill
					className="size-20 rounded-full ring-2 object-cover ring-black  "
				/>
			</div>
			<span className="font-medium">{name}</span>
		</div>
	);
}

export default StoryCircle;
