"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { createSession } from "@/app/authenticate/auth.action";
import { toast } from "sonner";

function CotinueWithUser({ tokenData }: any) {

	return (
		<Button
			onClick={async () => {
				toast.success((await createSession(tokenData)).message)


			}}
			className="py-4"
		>
			Continue as<pre className="text-blue-600 font-extrabold ">{" "}

				@<span className="hover:underline">
					{tokenData.username}
				</span>
			</pre>
		</Button>
	);
}

export default CotinueWithUser;
