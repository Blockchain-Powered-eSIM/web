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
import { LoaderCircle } from "lucide-react";

const SignUpDialog = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { mutate, status } = useSignUpForBeta();

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="rounded-3xl w-11/12 min-h-[429px]">
				<Image
					src={Logo}
					alt="Logo"
					width={100}
					height={100}
					className="h-6 w-auto md:h-8"
				/>
				{status === "success" && <SuccessDialogContent setOpen={setOpen} />}
				{status === "error" && <ErrorDialogContent setOpen={setOpen} />}
				{status === "pending" && <PendingDialogContent />}
				{status === "idle" && (
					<>
						<DialogHeader className="gap-6">
							<DialogTitle className="flex justify-start text-2xl text-outer-space-950 font-bold font-heading md:justify-center md:text-3xl">
								Beta Sign Up
							</DialogTitle>
							{/* <DialogDescription className="text-lg font-light">
							In case you wondered, we will contact you as soon as the beta
							launches!
						</DialogDescription> */}
						</DialogHeader>
						<SignUpForm mutate={mutate} />
					</>
				)}
			</DialogContent>
		</Dialog>
	);
};

const SuccessDialogContent = ({
	setOpen,
}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<>
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
		</>
	);
};

const ErrorDialogContent = ({
	setOpen,
}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<>
			<DialogHeader className="px-8 gap-6">
				<DialogTitle className="flex justify-center text-2xl text-outer-space-950 font-bold font-heading">
					Oops! There was a problem with your sign-up
				</DialogTitle>
				<DialogDescription className="text-lg font-light">
					If the problem persists, contact support@kokio.com for assistance
				</DialogDescription>
			</DialogHeader>
			<DialogFooter>
				<Button
					size="xl"
					className="w-full bg-cashmere-500 hover:bg-cashmere-500/90 text-outer-space-50"
					onClick={() => setOpen(false)}
				>
					Please try again
				</Button>
			</DialogFooter>
		</>
	);
};

const PendingDialogContent = () => {
	return (
		<>
			<div className="flex flex-col flex-grow">
				<DialogHeader className="px-12">
					<DialogTitle className="flex justify-center text-2xl text-outer-space-950 font-bold font-heading">
						One moment please
					</DialogTitle>
				</DialogHeader>
				<div className="flex justify-center h-56 py-4">
					<LoaderCircle className="h-24 w-24 animate-spin stroke-cashmere-500" />
				</div>
			</div>
		</>
	);
};

export default SignUpDialog;
