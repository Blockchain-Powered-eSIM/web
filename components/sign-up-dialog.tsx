"use client";
import Image from "next/image";

import { z } from "zod";

import Logo from "@/assets/logo.svg";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { SignUpForm } from "./sign-up-form";
import { useSignUpForBeta } from "@/hooks/use-sign-up-for-beta";

const signUpFormSchema = z.object({
	email: z.string().email().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	phoneModel: z.string().optional(),
	previousCustomer: z.string().optional(),
	newToCrypto: z.string().optional(),
});

const SignUpDialog = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { mutate, status, isPending } = useSignUpForBeta();

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			{status === "success" && (
				<DialogContent className="rounded-3xl w-11/12 text-center gap-12">
					<Image
						src={Logo}
						alt="Logo"
						width={100}
						height={100}
						className="h-6 w-auto md:h-8"
					/>
					<DialogHeader className="px-8 gap-6">
						<DialogTitle className="flex justify-center text-2xl text-outer-space-950 font-bold font-heading">
							Thank you for signing up for beta.
						</DialogTitle>
						<DialogDescription className="text-lg font-light">
							In case you wondered, we will contact you as soon as the beta
							launches!
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							size="xl"
							className="w-full bg-cashmere-500 hover:bg-cashmere-500/90 text-outer-space-50"
							onClick={() => setOpen(false)}
						>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			)}
			{status === "error" && (
				<DialogContent className="rounded-3xl w-11/12 text-center gap-12">
					<Image
						src={Logo}
						alt="Logo"
						width={100}
						height={100}
						className="h-6 w-auto md:h-8"
					/>
					<DialogHeader className="px-8 gap-6">
						<DialogTitle className="flex justify-center text-2xl text-outer-space-950 font-bold font-heading">
							Oops. Something went wrong.
						</DialogTitle>
						<DialogDescription className="text-lg font-light">
							Please try again or reach out to us on{" "}
							<a
								className="text-cashmere-500"
								href="https://discord.gg/KfQDsPNn5S"
							>
								Discord
							</a>{" "}
							for help.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							size="xl"
							className="w-full bg-cashmere-500 hover:bg-cashmere-500/90 text-outer-space-50"
							onClick={() => setOpen(false)}
						>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			)}
			{status !== "success" && status !== "error" && (
				<DialogContent className="rounded-3xl w-11/12 gap-8">
					<Image
						src={Logo}
						alt="Logo"
						width={100}
						height={100}
						className="h-6 w-auto md:h-8"
					/>
					<DialogHeader className="gap-6">
						<DialogTitle className="flex justify-start text-2xl text-outer-space-950 font-bold font-heading md:justify-center md:text-3xl">
							Beta Sign Up
						</DialogTitle>
						{/* <DialogDescription className="text-lg font-light">
							In case you wondered, we will contact you as soon as the beta
							launches!
						</DialogDescription> */}
					</DialogHeader>
					<SignUpForm mutate={mutate} isPending={isPending} />
				</DialogContent>
			)}
		</Dialog>
	);
};

export default SignUpDialog;
