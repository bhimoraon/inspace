import { DropDownMenu } from "@/components/DropDownMenu";
import { ModeToggle } from "@/components/ModeToggle";
import SignOutButton from "@/components/SignOutButton";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import React from "react";
async function page() {
	const user = await getUser();

	if (!user) {
		redirect("/authenticate");
	}

	return (
		<div className="relative h-screen w-full">
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
			   <DropDownMenu/>
			   <ModeToggle/>
			   
				{/* <ul>
					<li>{user.email}</li>
					<li>{user.id}</li>
					<li>{user.name}</li>
					<li>{user.hashedPassword}</li>
					<li>{user.role}</li>
				</ul> */}
			{/* <SignOutButton>Logout</SignOutButton> */}
			</div>
		</div>
	);
}

export default page;
