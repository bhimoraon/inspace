import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";
import { ThemeProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Inspace",
	description: "Social media app built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<body className={inter.className}>
			<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
				<NavBar />

				{/* </div> */}
				<div className=" parent md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
					{children}
				</div>
				</ThemeProvider>
			</body>
			<Toaster richColors />
		</html>
	);
}
