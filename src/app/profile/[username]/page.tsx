import notfound from "@/app/not-found";
import AddPost from "@/components/feed/AddPost";
import Feed from "@/components/feed/Feed";
import Post from "@/components/feed/Post";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import { getUser } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Image from "next/image";

async function profilePage({ params, searchParams }: { params: { username: string }, searchParams: string }) {
	const currentUser = await getUser()
	if (!currentUser)
		redirect("/authenticate")
	let user;
	console.log(searchParams)
	try {
		const username = params.username;
		const usser = await prisma.user.findUnique({
			where: { username },
			include: {
				_count: {
					select: {
						followers: true,
						followings: true,
						posts: true,
					},
				},
			},
		});
		user = usser;
	} catch (error) { }

	if (!user) return notfound();

	return (
		<div className="flex gap-6  ">
			<div className="hidden xl:block w-[20%]  border-gray-500 barWidth border-r-[1px]  ">
				<LeftMenu show={false} />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className=" h-screen barWidth overflow-y-auto pt-20 flex flex-col gap-6">
					<div className="flex  flex-col items-center justify-center ">
						<div className="w-full h-44 sm:h-64 relative ">
							<Image
								src={
									user.cover ||
									"https://images.pexels.com/photos/1896081/pexels-photo-1896081.jpeg?auto=compress&cs=tinysrgb&w=600"
								}
								alt=""
								fill
								className="object-cover "
							/>
							<Image
								src={user.picture || "/noAvatar.png"}
								alt=""
								width={128}
								height={128}
								className="object-cover bg-white size-32 rounded-full absolute right-0 left-0 m-auto -bottom-16 ring-4 ring-white "
							/>
						</div>
						<h1 className="mt-20 mb-4 text-2xl font-medium ">{user.name}</h1>
						<div className="flex items-center justify-center gap-12 mb-4">
							<div className="flex flex-col items-center">
								<span className="font-medium">{user._count.posts}</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">{user._count.followers}</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">{user._count.followings}</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
					</div>
					<AddPost />
					<Feed username={params.username} />

				</div>
			</div>

			<div className="hidden lg:block w-[30%]  barWidth  h-screen pt-20 overflow-y-auto">
				<RightMenu user={user} />
			</div>
		</div>
	);
}

export default profilePage;
