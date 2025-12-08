"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ProductType } from "@/lib/api/stock/types"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useAppSelector } from "@/hooks/use-redux"
import { useProductVariantById } from "@/lib/api/stock/queries"
import { ProductVariantTable } from "./ProductVariantTable"

export const ProductVariant = ({ param, component }: { param?: ProductType, component?: any }) => {
    const [open, setOpen] = useState(false);
    const query = useProductVariantById(param?.ProductId ?? null)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {component === undefined || component === null ? <Pencil size={16} className="cursor-pointer" /> : component}
            </DialogTrigger>

            <DialogContent className="sm:min-w-[70vh]">
                <DialogHeader>
                    <DialogTitle>Product Variant</DialogTitle>
                    <DialogDescription>
                        You can add and edit variations to your products.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-[70vh]">
                    <ProductVariantTable product={param!} data={query.data ?? []} loading={query.isLoading} />   
                </div>
            </DialogContent>
        </Dialog>
    )
}