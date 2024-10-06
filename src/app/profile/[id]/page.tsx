import LeftMenu from "@/components/LeftMenu";
import Post from "@/components/Post";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

function profilePage({ params }: any) {
	return (
		<div className="flex gap-6  ">
			<div className="hidden xl:block w-[20%]  border-gray-500 barWidth border-r-[1px]  ">
				<LeftMenu type="profile" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className=" h-screen barWidth overflow-y-auto pt-20 flex flex-col gap-6">
					<div className="flex  flex-col items-center justify-center ">
						<div className="w-full h-44 sm:h-64 relative ">
							<Image
								src="https://images.pexels.com/photos/1896081/pexels-photo-1896081.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt=""
								fill
								className="object-cover "
							/>
							<Image
								src="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt=""
								width={128}
								height={128}
								className="object-cover size-32 rounded-full absolute right-0 left-0 m-auto -bottom-16 ring-4 ring-white "
							/>
						</div>
						<h1 className="mt-20 mb-4 text-2xl font-medium ">Niraj Yadav</h1>
						<div className="flex items-center justify-center gap-12 mb-4">
							<div className="flex flex-col items-center">
								<span className="font-medium">124</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">1.2K</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">981</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
						{/* Feed  */}

						<div className="   rounded-lg">
							<Post
								name="Niraj Yadav"
								profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								link="https://images.pexels.com/photos/28192578/pexels-photo-28192578/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
							/>
							<Post
								name="Niraj Yadav"
								profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								link="https://images.pexels.com/photos/28192574/pexels-photo-28192574/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
							/>
							<Post
								name="Niraj Yadav"
								profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								link="https://images.pexels.com/photos/28192576/pexels-photo-28192576/free-photo-of-two-people-sitting-on-a-bench-with-skateboards.jpeg?auto=compress&cs=tinysrgb&w=600"
							/>
							<Post
								name="Niraj Yadav"
								profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								link="https://images.pexels.com/photos/28192578/pexels-photo-28192578/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
							/>
							<Post
								name="Niraj Yadav"
								profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								link="https://images.pexels.com/photos/28192574/pexels-photo-28192574/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
							/>
							<Post
								name="Niraj Yadav"
								profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
								link="https://images.pexels.com/photos/28192576/pexels-photo-28192576/free-photo-of-two-people-sitting-on-a-bench-with-skateboards.jpeg?auto=compress&cs=tinysrgb&w=600"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="hidden lg:block w-[30%]  barWidth  h-screen pt-20 overflow-y-auto">
				<RightMenu userId="test" />
			</div>
		</div>
	);
}

export default profilePage;
