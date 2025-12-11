"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SocialMedia } from "@/lib/api/company/types";

export const SocialMediaForm = ({data}:{data:SocialMedia | undefined}) => {

    debugger;
    const formSchema = z.object({
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        youtube: z.string().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           instagram: data?.instagram ?? "",
           facebook:data?.facebook ?? "",
           twitter : data?.x ?? "",
           youtube : data?.youtube ?? ""
        }
    });
    
    const onSubmit = async (values: any) => {

    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="instagram"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Instagram</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="facebook"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Facebook</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="twitter"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Twitter</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="youtube"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Youtube</FormLabel>
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