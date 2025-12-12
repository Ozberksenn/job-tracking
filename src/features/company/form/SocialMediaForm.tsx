"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { json, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CompanyType, SocialMedia } from "@/lib/api/company/types";
import useUpdateCompany from "@/lib/api/company/mutation";
import { toast } from "sonner";

export const SocialMediaForm = ({ company, data }: { company: CompanyType | undefined, data: SocialMedia | undefined }) => {
    const update = useUpdateCompany()

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
            facebook: data?.facebook ?? "",
            twitter: data?.x ?? "",
            youtube: data?.youtube ?? ""
        }
    });

    const onSubmit = async (values: any) => {
        const jsonString = JSON.stringify(values);

        const data: CompanyType = {
            CompanyId: company?.CompanyId!,
            CompanyName: company?.CompanyName ?? "",
            Phone: company?.Phone ?? "",
            Address: company?.Address ?? "",
            ContactMail: company?.ContactMail ?? "",
            Logo: company?.Logo ?? "",
            QrUrl: company?.QrUrl ?? "",
            WorkingHours: JSON.stringify(company?.WorkingHours) ?? "",
            SocialMedia: jsonString,
        }
        await update.mutateAsync(data)
        toast("Company Infos successfully update")

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