/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";
import StoryCircle from "../ui/StoryCircle";
import { getUser } from "@/lib/lucia";
import CreateStory from "./CreateStory";
import { prisma } from "@/lib/prisma";

async function Stories() {
	const user = await getUser();
	let stories = await prisma.story.findMany(
		{
			include: {
				user: true
			}
		}
	)

	return (

		<div className="  bulg   p-4  flex-shrink-0 md:rounded-lg   text-xs overflow-x-auto barWidth ">
			<div className="flex gap-8 w-max">
				<CreateStory user={user} />

				{stories.map((story) => (<StoryCircle

					story={story}
				/>))}
				{/* 
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/27926642/pexels-photo-27926642/free-photo-of-man-in-white-shirt-posing-on-street-in-dusseldorf-germany.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user}
					link="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/27348252/pexels-photo-27348252/free-photo-of-a-man-with-beard-and-sunglasses-sitting-on-steps.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/3917726/pexels-photo-3917726.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/27926642/pexels-photo-27926642/free-photo-of-man-in-white-shirt-posing-on-street-in-dusseldorf-germany.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user}
					link="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/27348252/pexels-photo-27348252/free-photo-of-a-man-with-beard-and-sunglasses-sitting-on-steps.jpeg?auto=compress&cs=tinysrgb&w=600"
				/>
				<StoryCircle
					user={user} link="https://images.pexels.com/photos/3917726/pexels-photo-3917726.jpeg?auto=compress&cs=tinysrgb&w=600"
				/> */}
			</div>
		</div>
	);
}

export default Stories;
