"use client";
import { switchFollow } from "@/lib/actions";

import { User } from "@prisma/client";
import React, { Suspense, useState } from "react";
import { Button } from "../ui/button";

const UserInfoCardInteraction = ({ user, isFollowing, isFollowRequestSent }: { user: User, isFollowing: any, isFollowRequestSent: any }) => {
	const [userState, setUserState] = useState({
		isFollowing: isFollowing ? true : false,
		isFollowRequestSent: isFollowRequestSent ? true : false,
	});
	const follow = () => {
		switchFollow(user);
		console.log(user);
		setUserState((prev) => ({
			...prev,
			isFollowing: prev.isFollowing && false,
			isFollowRequestSent: !prev.isFollowRequestSent

		}));

	};

	return (
		<Suspense fallback="loading...">
			<Button onClick={follow} className=" text-sm rounded-md  p-2">
				{userState.isFollowing
					? "following"
					: userState.isFollowRequestSent
						? "Follow Request Sent"
						: "Follow"}
			</Button>
		</Suspense>
	);
};

export default UserInfoCardInteraction;
