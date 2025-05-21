import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddNewTodoForm from "./AddNewTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { setAddMoadl } from "../lib/redux-toolkit/slices/modal-slice";
export default function AddModal() {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state) => state.modal);
  function handler() {
    dispatch(setAddMoadl());
  }
  return (
    <Dialog open={addModal} onOpenChange={handler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Yangi todo qo'shish</DialogTitle>
          <DialogDescription>
            Siz bu yerda yangi todo qo'shishingiz mumkin
          </DialogDescription>
        </DialogHeader>
        <AddNewTodoForm />
      </DialogContent>
    </Dialog>
  );
}
