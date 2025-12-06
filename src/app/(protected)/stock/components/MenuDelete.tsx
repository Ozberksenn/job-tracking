import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { selectMenu } from "@/features/stock/stockSlice"
import { useAppDispatch } from "@/hooks/use-redux"
import { useDeleteMenu, useDeleteProduct } from "@/lib/api/stock/mutations"
import { MenuType } from "@/lib/api/stock/types"
import { Trash } from "lucide-react"
import { toast } from "sonner"


export const MenuDelete = ({ param }: { param: MenuType }) => {
    const dispatch = useAppDispatch();
    const deleteMenu = useDeleteMenu()

    const handleContinue = async () => {
        await deleteMenu.mutateAsync(param)
        toast("Menu delete successfully")
        dispatch(selectMenu(null))
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
                        Do you want to delete this menu?
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