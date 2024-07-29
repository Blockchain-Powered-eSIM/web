'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useSignUpForBeta } from '@/hooks/use-sign-up-for-beta'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'

const signUpFormSchema = z.object({
    email: z.string().email().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    phoneModel: z.string().optional(),
    previousCustomer: z.string().optional(),
    newToCrypto: z.string().optional(),
})

const SignUpForm = ({
    setOpen,
}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { mutate, status } = useSignUpForBeta()
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
    })

    const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
        mutate(values, { onSuccess: () => setOpen(false) })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-light">
                                What is your email?
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="border-2 border-cashmere-300"
                                    placeholder="Your email"
                                    {...field}
                                />
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
                            <FormLabel className="text-base font-light">
                                What is your phone brand and model?
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="border-2 border-cashmere-300"
                                    placeholder="ex. iPhone 11"
                                    {...field}
                                />
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
                            <FormLabel className="text-base font-light">
                                Have you used eSIM before?
                            </FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger className="border-2 border-cashmere-300">
                                        <SelectValue placeholder="Please select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value={'YES'}>Yes</SelectItem>
                                    <SelectItem value={'NO'}>No</SelectItem>
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
                            <FormLabel className="text-base font-light">
                                Are you new to crypto?
                            </FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger className="border-2 border-cashmere-300">
                                        <SelectValue placeholder="Please select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value={'YES'}>Yes</SelectItem>
                                    <SelectItem value={'NO'}>No</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    size={'xl'}
                    disabled={status === 'pending'}
                    className="w-full bg-cashmere-500 hover:bg-cashmere-500/90"
                >
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}

export { SignUpForm }
