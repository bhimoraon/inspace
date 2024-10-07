import TabSwitcher from "@/components/TabSwitcher";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import ContinueWithUser from "@/components/ContinueWithUser";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function page() {
	const user = await getUser();
	if (user) {
		return redirect("/");
	}

	const token = cookies().get("userInfo")?.value || null;
	let userInfo;
	if (token) {
		try {
			userInfo = await jwt.verify(token, "RohanKachhap");

			console.log(userInfo); // Successfully decoded token
		} catch (error) {
			console.log("JWT verification failed:", error);
		}
	} else {
		console.log("No token exist ");
	}
	// 	, (err, decoded) => {
	// 	if (err) console.log(err);
	// 	else {
	// 		userInfo = decoded;
	// 		console.log(userInfo);
	// 	}
	// });

	return (
		<div className=" h-screen w-full flex  relative  ">
			<div className=" max-w-3xl  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				{token && <ContinueWithUser userInfo={userInfo} />}
				<div className="size-4"></div>

				<TabSwitcher SignUpTab={<SignUpForm />} SignInTab={<SignInForm />} />
			</div>
		</div>
	);
}

export default page;
