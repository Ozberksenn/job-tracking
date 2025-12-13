"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CompanyType } from "@/lib/api/company/types";
import useUpdateCompany from "@/lib/api/company/mutation";
import { toast } from "sonner";

export const CompanyForm = ({ isLoading, company }: { isLoading: boolean, company: CompanyType | undefined }) => {
    const update = useUpdateCompany()

    const formSchema = z.object({
        CompanyId: z.number(),
        CompanyName: z.string(),
        Logo: z.string().optional(),
        Phone: z.string().optional(),
        Address: z.string().optional(),
        ContactMail: z.string().optional(),
        QrUrl: z.string().optional(),
        SocialMedia: z.string().optional(),
        WorkingHours: z.string().optional()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            CompanyId: company?.CompanyId,
            CompanyName: company?.CompanyName ?? "",
            Logo: company?.Logo ?? "",
            Phone: company?.Phone ?? "",
            ContactMail: company?.ContactMail ?? "",
            Address: company?.Address ?? "",
            SocialMedia: JSON.stringify(company?.SocialMedia) ?? "",
            WorkingHours: JSON.stringify(company?.WorkingHours) ?? "",
            QrUrl: company?.QrUrl ?? "",
        }
    });

    const onSubmit = (values: any) => {
        update.mutateAsync(values)
        toast("Company Infos successfully update")
    };

    if (isLoading) return <span>...Loading</span>

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="CompanyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Logo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Logo</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="ContactMail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Mail</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="QrUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>QR URL</FormLabel>
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