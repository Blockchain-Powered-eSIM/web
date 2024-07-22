import React from "react";
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

const SignUpDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="xl" className="bg-cashmere-500 hover:bg-cashmere-500/90">
					Sign Up For beta
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex justify-start -mt-2">
						<Image src={Logo} alt="Logo" width={100} height={100} />
					</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default SignUpDialog;
