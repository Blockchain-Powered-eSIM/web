import { useMutation } from "@tanstack/react-query";

export const useSignUpForBeta = () => {
	return useMutation({
		mutationFn: (values: {
			email: string;
			phoneModel?: string;
			previousCustomer?: string;
			newToCrypto?: string;
		}) =>
			fetch("/api/sign-up", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: values.email,
					phoneModel: values.phoneModel || "",
					previousCustomer: values.previousCustomer || "",
					newToCrypto: values.newToCrypto || "",
				}),
			}),
	});
};
