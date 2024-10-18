import React from "react";
import Post from "./Post";
import { getUser } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";


async function Feed({ username }: { username?: string }) {
	const user = await getUser();
	let posts: any[] = [];
	if (username) {
		posts = await prisma.post.findMany({
			where: {
				user: { username: username }
			}
			,
			include: {
				user: true,
				likes: {
					select: {
						userId: true
					}
				},
				_count: {
					select: {
						comments: true
					}
				}
			},
			orderBy: {
				createdAt: "desc"
			}
		})
	}

	if (!username && user?.id) { // if no username means we are in homepage
		// const following = await prisma.follower.findMany({
		// 	where: {
		// 		followerId: user.id
		// 	},
		// 	select: {
		// 		followingId: true
		// 	}
		// })
		// const followingIds = following.map(f => f.followingId)
		// const ids = [user.id, ...followingIds]

		// posts = await prisma.post.findMany({
		// 	where: {
		// 		userId: {
		// 			in: ids
		// 		}
		// 	},
		// 	include: {
		// 		user: true,
		// 		likes: {
		// 			select: {
		// 				userId: true
		// 			}
		// 		},
		// 		_count: {
		// 			select: {
		// 				comments: true
		// 			}
		// 		}
		// 	},
		// 	orderBy: {
		// 		createdAt: "desc"
		// 	}
		// })


		// Since there is very less user since fetching all the post available in the database
		posts = await prisma.post.findMany({

			include: {
				user: true,
				likes: {
					select: {
						userId: true
					}
				},
				_count: {
					select: {
						comments: true
					}
				}
			},
			orderBy: {
				createdAt: "desc"
			}
		})
		
	}



	return (
		<div className="rounded-lg">
			{posts?.length ? (posts.map(post => (<Post
				key={post.id}
				post={post}
			/>))) : "No post found"}

			{/* <Post
				name="Diana Prince"
				link="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Justin Johansson"
				link="https://images.pexels.com/photos/27926642/pexels-photo-27926642/free-photo-of-man-in-white-shirt-posing-on-street-in-dusseldorf-germany.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Shreeja Chaturvedi"
				link="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Hardin Scott"
				link="https://images.pexels.com/photos/27348252/pexels-photo-27348252/free-photo-of-a-man-with-beard-and-sunglasses-sitting-on-steps.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Edward Cullen"
				link="https://images.pexels.com/photos/3917726/pexels-photo-3917726.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Niraj Yadav"
				profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
				link="https://images.pexels.com/photos/28192574/pexels-photo-28192574/free-photo-of-a-young-man-with-tattoos-sitting-on-a-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Justin Johansson"
				link="https://images.pexels.com/photos/27926642/pexels-photo-27926642/free-photo-of-man-in-white-shirt-posing-on-street-in-dusseldorf-germany.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Shreeja Chaturvedi"
				link="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Diana Prince"
				link="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Hardin Scott"
				link="https://images.pexels.com/photos/27348252/pexels-photo-27348252/free-photo-of-a-man-with-beard-and-sunglasses-sitting-on-steps.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Edward Cullen"
				link="https://images.pexels.com/photos/3917726/pexels-photo-3917726.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Niraj Yadav"
				profileLink="https://images.pexels.com/photos/2007508/pexels-photo-2007508.jpeg?auto=compress&cs=tinysrgb&w=600"
				link="https://images.pexels.com/photos/28192576/pexels-photo-28192576/free-photo-of-two-people-sitting-on-a-bench-with-skateboards.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Diana Prince"
				link="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Shreeja Chaturvedi"
				link="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Hardin Scott"
				link="https://images.pexels.com/photos/27348252/pexels-photo-27348252/free-photo-of-a-man-with-beard-and-sunglasses-sitting-on-steps.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Justin Johansson"
				link="https://images.pexels.com/photos/27926642/pexels-photo-27926642/free-photo-of-man-in-white-shirt-posing-on-street-in-dusseldorf-germany.jpeg?auto=compress&cs=tinysrgb&w=600"
			/>
			<Post
				name="Edward Cullen"
				link="https://images.pexels.com/photos/3917726/pexels-photo-3917726.jpeg?auto=compress&cs=tinysrgb&w=600"
			/> */}
		</div>
	);
}
export default Feed;
