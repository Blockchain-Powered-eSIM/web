"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useSignUpForBeta } from "@/hooks/use-sign-up-for-beta";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

const signUpFormSchema = z.object({
	email: z.string().email().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	phoneModel: z.string().min(3, {
		message: "Phone model must be at least 3 characters.",
	}),
	previousCustomer: z.string(),
	newToCrypto: z.string(),
});

const SignUpForm = ({
	setOpen,
}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const { mutate, status } = useSignUpForBeta();
	const form = useForm<z.infer<typeof signUpFormSchema>>({
		resolver: zodResolver(signUpFormSchema),
	});

	const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
		mutate(values, { onSuccess: () => setOpen(false) });
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>What is your email?</FormLabel>
							<FormControl>
								<Input placeholder="Your email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneModel"
					render={({ field }) => (
						<FormItem>
							<FormLabel>What is your phone brand and model?</FormLabel>
							<FormControl>
								<Input placeholder="ex. iPhone 11" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="previousCustomer"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Have you used eSIM before?</FormLabel>
							<Select onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value={"YES"}>Yes</SelectItem>
									<SelectItem value={"NO"}>No</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="newToCrypto"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Are you new to crypto?</FormLabel>
							<Select onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value={"YES"}>Yes</SelectItem>
									<SelectItem value={"NO"}>No</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					disabled={status === "pending"}
					className="bg-cashmere-500 hover:bg-cashmere-500/90 w-full"
				>
					Sign Up
				</Button>
			</form>
		</Form>
	);
};

export { SignUpForm };
