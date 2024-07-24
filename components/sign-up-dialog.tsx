"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { SignUpForm } from "./sign-up-form";

const SignUpDialog = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="rounded-3xl w-11/12">
				<DialogHeader>
					<DialogTitle className="flex justify-start -mt-2">
						<Image src={Logo} alt="Logo" width={100} height={100} />
					</DialogTitle>
					<DialogDescription className="flex justify-start">
						Beta Sign Up
					</DialogDescription>
				</DialogHeader>
				<SignUpForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
};

export default SignUpDialog;
