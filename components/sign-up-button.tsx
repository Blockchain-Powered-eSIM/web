"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SignUpDialog from "./sign-up-dialog";

const SignUpButton = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button
				onClick={() => setOpen(!open)}
				size="xl"
				className="bg-cashmere-500 hover:bg-cashmere-500/90 w-full"
			>
				Sign Up For beta
			</Button>
			<SignUpDialog open={open} setOpen={setOpen} />
		</>
	);
};

export default SignUpButton;
