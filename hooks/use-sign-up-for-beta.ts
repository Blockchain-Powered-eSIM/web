import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useSignUpForBeta = () => {
	const { toast } = useToast();
	return useMutation({
		mutationFn: (values: {
			email: string;
			phoneModel: string;
			previousCustomer: string;
			newToCrypto: string;
		}) =>
			fetch("/api/sign-up", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: values.email,
					phoneModel: values.phoneModel,
					previousCustomer: values.previousCustomer,
					newToCrypto: values.newToCrypto,
				}),
			}),
		onSuccess: (data) => {
			console.log("Success: Submitting form", data);
			toast({
				title: "Success!",
				description: "Thank you for signing up for our beta!",
			});
		},
		onError: (error) => {
			console.log("Error: Submitting form", error);
			toast({
				title: "Ooops! Something went wrong",
				description:
					"Please try again later or reach out to us on Discord for help.",
				variant: "destructive",
			});
		},
	});
};
