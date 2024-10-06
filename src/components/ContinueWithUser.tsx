"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "@/app/authenticate/auth.action";

function CotinueWithUser({ userInfo }: any) {
	return (
		<Button
			onClick={async () => {
				await signIn(userInfo);
			}}
			className="py-4"
		>
			Continue as {userInfo.name}
		</Button>
	);
}

export default CotinueWithUser;
