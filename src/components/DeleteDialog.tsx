import { deletePlant } from "@/actions/plant.action"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import toast from "react-hot-toast"

export function DeleteDialog({plantId} : any) {

    const handleDelete = async () => {
        await deletePlant(plantId);
        toast.success('Plant Deleted Successfully!',{
            position: 'top-right'
        });
    }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="ml-3 cursor-pointer"><Trash/></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction className="cursor-pointer" onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
