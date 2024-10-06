"use client"
import React from "react";
import { Button } from "./ui/button";
import { logout } from "@/app/authenticate/auth.action";

type Props = {
	children: React.ReactNode;
};

function SignOutButton({ children }: Props) {
	return <Button onClick={()=>{logout()}}>{children}</Button>;
}

export default SignOutButton;
