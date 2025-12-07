import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { useDeleteProduct } from "@/lib/api/stock/mutations"
import { ProductType } from "@/lib/api/stock/types"
import { Trash } from "lucide-react"


export const ProductDelete = ({ param }: { param: ProductType }) => {
    const deleteProduct = useDeleteProduct()

    const handleContinue = async () => {
        await deleteProduct.mutateAsync(param)
        
    }   

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Trash size={16} style={{ color: "red" }} className="cursor-pointer" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Do you want to delete this product?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}