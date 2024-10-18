import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";
function RightMenu({ user }: { user: any }) {
	return (
		<div className="flex flex-col gap-6  ">
			{user ? (
				<>
					<UserInfoCard user={user} />

					<UserMediaCard user={user} />
				</>
			) : null}
			<FriendRequest />
			{/* <Birthdays /> */}
			<Ad pro="" size="md" />
		</div>
	);
}

export default RightMenu;
