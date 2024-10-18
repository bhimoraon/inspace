import AddPost from "@/components/feed/AddPost";
import Feed from "@/components/feed/Feed";
import Stories from "@/components/feed/Stories";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
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
				<LeftMenu show={true} />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="  h-screen barWidth overflow-y-auto pt-20 flex flex-col gap-6">
					<Stories />
					<AddPost user={user} />
					<Feed />
				</div>
			</div>

			<div className="hidden lg:block w-[30%]  barWidth  h-screen pt-20 overflow-y-auto">
				<RightMenu user={""} />
			</div>
		</div>
	);
};

export default Homepage;
