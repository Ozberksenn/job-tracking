

"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AccountForm = () => {
    const formSchema = z.object({
        Mail: z.email(),
        Password: z.string(),
        PasswordAgain: z.string()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    });

    const onSubmit = async (values: any) => {

    };
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
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
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="PasswordAgain"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password Again</FormLabel>
                            <FormControl>
                                <Input {...field} />
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