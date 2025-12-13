"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useUpdatePassword } from "@/lib/api/auth/mutations";
import { toast } from "sonner";
import { UpdatePasswordType } from "@/lib/api/auth/types";

export const AccountForm = () => {
    const mutation = useUpdatePassword()
    const formSchema = z.object({
        Mail: z.email(),
        Password: z.string().min(6),
        NewPassword: z.string().min(6)
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Mail: "",
            Password: "",
            NewPassword: ""
        }
    });

    const onSubmit = async (values: UpdatePasswordType) => {
        await mutation.mutateAsync(values);
        form.reset();
        toast('Password succesfully update');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="Mail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mail</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="NewPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>NewPassword</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-end justify-end gap-2">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </Form>
    )
}