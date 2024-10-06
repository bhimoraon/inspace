import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";

const Homepage = async () => {
	const user = await getUser();
	if (!user) {
		redirect("/authenticate");
	}
	return (
		<div className="flex gap-6  ">
			
			<div className="hidden xl:block w-[20%] barWidth border-r-[1px]  border-gray-500   ">
				<LeftMenu type="home" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="  h-screen barWidth overflow-y-auto pt-20 flex flex-col gap-6">
					<Stories />
					<AddPost />
					<Feed />
				</div>
			</div>

			<div className="hidden lg:block w-[30%]  barWidth  h-screen pt-20 overflow-y-auto">
				<RightMenu userId="" />
			</div>
		</div>
	);
};

export default Homepage;
