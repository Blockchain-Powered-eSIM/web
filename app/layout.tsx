import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Anybody, Lexend } from "next/font/google";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/global/nav-bar";
import { Footer } from "@/components/global/footer";

const anybody = Anybody({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-anybody",
});

const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lexend",
});

export const metadata: Metadata = {
	title: "Kokio",
	description: "Blockchain powered eSIM",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const initialState = cookieToInitialState(config, headers().get("cookie"));
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(anybody.variable, lexend.variable)}
		>
			<body
				className={cn(
					"min-h-screen font-sans antialiased flex flex-col bg-beach-sky",
				)}
			>
				<Web3ModalProvider initialState={initialState}>
					<NavBar />
					<div className="flex-1">{children}</div>
					<Footer />
				</Web3ModalProvider>
			</body>
		</html>
	);
}
