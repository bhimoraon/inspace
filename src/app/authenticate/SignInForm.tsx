"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "./auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import GoogleOAuthButton from "@/components/GoogleOAuthButton";
import { useFormStatus } from "react-dom";


export const signInSchema = z.object({
    username: z.string().toLowerCase().trim().min(3),
    // trim removes the whitespace in beggining and ending
    password: z.string().min(8),
});

function SignInForm() {
	const router = useRouter();
	const { pending } = useFormStatus();

	// 1. Define your form.
	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof signInSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const res = await signIn(values);
		if (res.success) {
			toast.success(res.message);
			router.push("/");
		} else toast.error(res.message);
	}
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Welcome Back</CardTitle>
					<CardDescription>
						Sign in to your account to Continue.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<Form {...form}>
						{/* this Form is from shadCn, {...form} is variable*/}
						<form
							className="flex flex-col gap-2"
							onSubmit={form.handleSubmit(onSubmit)}
						>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email or username</FormLabel>
										<FormControl>
											<Input  placeholder="Email or username" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Password"
												{...field}
												onChange={(e) => {
													e.target.value = e.target.value.trim();
													field.onChange(e);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							   <Button type="submit" className="self-start disabled:bg-transparent disabled:cursor-not-allowed" disabled={pending}>
                                Login
								  </Button>
						</form>
					</Form>
					<GoogleOAuthButton />
				</CardContent>
			</Card>
		</div>
	);
}

export default SignInForm;
