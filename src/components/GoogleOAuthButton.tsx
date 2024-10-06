"use client";
import React from "react";
import { RiGoogleFill } from "@remixicon/react";
import { Button } from "./ui/button";
import { getGoogleOAuthConsenstUrl } from "@/app/authenticate/auth.action";
import { toast } from "sonner";
const GoogleOAuthButton = () => {
	return (
		<Button
			onClick={async () => {
				const res = await getGoogleOAuthConsenstUrl();
				if (res.url) {
					window.location.href = res.url;
				} else {
					toast.error(res.error);
				}
			}}
		>
			<RiGoogleFill className="mr-2 " /> Continue with Google
		</Button>
	);
};

export default GoogleOAuthButton;
