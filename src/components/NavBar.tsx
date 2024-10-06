import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { getUser } from "@/lib/lucia";
import { Button } from "./ui/button";
import { DropDownMenu } from "./DropDownMenu";
import { ModeToggle } from "./ModeToggle";

async function NavBar() {
	const user = await getUser();

	return (
		<div className="flex fixed z-50  border-b-[1px] border-gray-600 shadow-sm bg-background h-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full   items-center justify-between  gap-20  ">
			{/* LEFT */}
			<div className="md:hidden lg:block w-[20%] flex gap-3 ">
				<MobileMenu />
				<Link
					href="/"
					className="font-bold text-xl flex justify-center items-center text-black"
				>
					<div className="bg-black size-4 md:size-5 flex items-center justify-center text-white">
						{" "}
						I{" "}
					</div>
					<div className="size-4  bg-white md:size-5 flex items-center justify-center">
						{" "}
						N{" "}
					</div>
					<div className="bg-black  size-4 md:size-5 flex items-center justify-center text-white">
						{" "}
						S{" "}
					</div>
					<div className="size-4 md:size-5 bg-white flex items-center justify-center">
						{" "}
						P{" "}
					</div>
					<div className="bg-black size-4 md:size-5 flex items-center justify-center text-white">
						{" "}
						A{" "}
					</div>
					<div className="size-4 md:size-5 bg-white flex items-center justify-center">
						{" "}
						C{" "}
					</div>
					<div className="bg-black size-4 md:size-5 flex items-center justify-center text-white">
						{" "}
						E{" "}
					</div>
				</Link>
			</div>
			{/*CENTER  */}
			<div className="gap-16 hidden md:flex items-center justify-between text-sm">
				{/* LINKS */}
				<div className="flex gap-6  ">
					<Link href="/" className="flex gap-2  items-center ">
						<Image src="/home.png" alt="Homepage" width={16} height={16} />{" "}
						<span>Homepage</span>
					</Link>
					<Link href="#" className="flex gap-2  items-center ">
						<Image src="/stories.png" alt="Stories" width={16} height={16} />{" "}
						<span>Stories</span>
					</Link>
					<Link href="/profile/harish" className="flex gap-2  items-center ">
						<Image src="/friends.png" alt="Friends" width={16} height={16} />{" "}
						<span>Friends</span>
					</Link>
				</div>
				<div className="hidden bg-[#f0f0f089]  py-2 px-4 rounded-xl xl:flex justify-center items-center">
					<input
						type="text"
						placeholder="Search..."
						//Outline-none is used to remove the line when field is active
						className="bg-transparent outline-none"
					/>
					<Image src="/search.png" alt="" width={14} height={14}></Image>
				</div>
			</div>

			{/* RIGHT */}
			<div className=" w-[30%]   flex items-center justify-end gap-8 ">
				<ModeToggle />
				{user ? (
					<>
						{/* {" "}
						<div className="cursor-pointer">
							<Image src="/people.png" alt="" width={24} height={24}></Image>
						</div>
						<div className="cursor-pointer">
							<Image src="/messages.png" alt="" width={20} height={20}></Image>
						</div>
						<div className="cursor-pointer">
							<Image
								src="/notifications.png"
								alt=""
								width={20}
								height={20}
							></Image>
						</div> */}
						<DropDownMenu image={user.picture} />
					</>
				) : (
					<Link href="/authenticate">
						<Button>Login/Register</Button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default NavBar;
