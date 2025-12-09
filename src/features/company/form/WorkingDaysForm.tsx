"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const WorkingDaysForm = () => {
    const [open, setOpen] = useState(false);
    const formSchema = z.object({
        Monday: z.string().optional(),
        Tuesday: z.string().optional(),
        Wednasday: z.string().optional(),
        Thursday: z.string().optional(),
        Friday: z.string().optional(),
        Saturday: z.string().optional(),
        Sunday: z.string().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Monday: "",
            Tuesday: "",
            Wednasday: "",
            Thursday: "",
            Friday: "",
            Saturday: "",
            Sunday: ""
        }
    });

    const onSubmit = async (values: any) => {

    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="Monday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Monday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Tuesday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tuesday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Wednasday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Wednasday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Thursday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Thursday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Friday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Friday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Saturday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Saturday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Sunday"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sunday</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-end justify-end gap-2">
                    <Button onClick={() => setOpen(false)} variant="outline" type="button">Cancel</Button>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </Form>
    )
}