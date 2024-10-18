"use client";
import Image from "next/image";

import { FollowRequest, User } from "@prisma/client";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { useState } from "react";
import { revalidatePath } from "next/cache";

type RequestWithUser = FollowRequest & {
	sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
	const [visible, setVisible] = useState(true)
	return (
		<>
			{/* USER */}
			{requests.map((req) => (
				// eslint-disable-next-line react/jsx-key
				<div className="flex items-center justify-between pt-4">
					{visible && <><div className="flex justify-center items-center gap-4">
						<Image
							src={req.sender.picture || "/noAvatar.png"}
							alt=""
							width={40}
							height={40}
							className="rounded-full object-cover size-10 " />{" "}
						<span className="font-semibold">{req.sender.name}</span>
					</div><div className="flex items-center justify-end gap-3">
							<Image
								onClick={() => {
									acceptFollowRequest(req.senderId);
									setVisible(false)

								}}
								src="/accept.png"
								alt=""
								width={20}
								height={20}
								className="cursor-pointer" />
							<Image
								onClick={() => {
									declineFollowRequest(req.senderId);
									setVisible(false)
								}}
								src="/reject.png"
								alt=""
								width={20}
								height={20}
								className="cursor-pointer" />
						</div></>}
				</div>
			))}
		</>
	);
};

export default FriendRequestList;
