"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ProductVariantType } from "@/lib/api/stock/types"
import { Pencil } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export const VariantForm = ({ param, component }: { param?: ProductVariantType, component?: any }) => {
    const [open, setOpen] = useState(false);


    const formSchema = z.object({
        VariantId: z.number().optional(),
        VariantName: z.string().min(1, "Product name is required"),
        Price: z.number(),
        Quantity: z.number(),
        Barcode: z.string(),
        ShowStore: z.boolean().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            VariantId: param?.VariantId ?? 0,
            VariantName: param?.VariantName ?? "",
            Price: param?.Price ?? 0,
            Quantity: param?.Quantity ?? 0,
            Barcode: param?.Barcode ?? "",
        }
    });

    const onSubmit = async (values: any) => {
        // try {
        //     if (param === undefined || param === null) {
        //         await query.mutateAsync(values)
        //         toast("Product created successfully")
        //     } else {
        //         await queryUpdate.mutateAsync(values)
        //         toast("Product update successfully")
        //     }
        //     setOpen(false)
        // } catch (err) {
        //     toast("Something error ! ")
        // }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {component === undefined || component === null ? <Pencil size={16} className="cursor-pointer" /> : component}
            </DialogTrigger>

            <DialogContent className="sm:min-w-[70vh]">
                <DialogHeader>
                    <DialogTitle>Product Form</DialogTitle>
                    <DialogDescription>
                        Update the product information.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="VariantName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} value={field.value ?? 0} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} value={field.value ?? 0} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Barcode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Barcode</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-end justify-end gap-2">
                            <Button onClick={() => setOpen(false)} variant="outline" type="button">Cancel</Button>
                            <Button type="submit" >Save</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}