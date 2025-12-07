"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MenuType } from "@/lib/api/stock/types"
import { Pencil } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { toast } from "sonner"
import { useCreateMenu, useUpdateMenu } from "@/lib/api/stock/mutations"
import { Switch } from "@/components/ui/switch"

export const MenuForm = ({ param, component }: { param?: MenuType, component?: any }) => {
    const [open, setOpen] = useState(false);
    const createMenu = useCreateMenu()
    const updateMenu = useUpdateMenu()
    const formSchema = z.object({
        MenuId: z.number(),
        Name: z.string(),
        Description: z.string().optional(),
        Image: z.string().optional(),
        ShowStore: z.boolean().optional(),
        // Sort: z.number()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            MenuId: param?.MenuId ?? 0,
            Name: param?.Name ?? "",
            Description: param?.Description ?? "",
            Image: param?.Image ?? "",
            ShowStore: param?.ShowStore ?? false,
            // Sort: param?.Sort ?? 0,
        }
    });

    const onSubmit = async (values: any) => {
        try {
            if (param === undefined || param === null) {
                await createMenu.mutateAsync(values)
                toast("Menu created successfully")
            } else {
                await updateMenu.mutateAsync(values)
                toast("Menu update successfully")
            }
            setOpen(false)
        } catch (err) {
            toast("Something error ! ")
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {component ?? <Pencil size={16} className="cursor-pointer" />}
            </DialogTrigger>

            <DialogContent className="sm:min-w-[70vh]">
                <DialogHeader>
                    <DialogTitle>Menu Form</DialogTitle>
                    <DialogDescription>
                        {param === null || param === undefined ? "Create" : "Update"} the menu information.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="Name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Menu Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Menu Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ShowStore"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Show Store</FormLabel>
                                    <FormControl>
                                        <Switch id="airplane-mode"  onCheckedChange={field.onChange} />
                                        {/* <Checkbox id="terms-2" checked={field.value} onCheckedChange={field.onChange} /> */}
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
            </DialogContent>
        </Dialog>
    )
}