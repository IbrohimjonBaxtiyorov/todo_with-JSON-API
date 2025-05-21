import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setFilter } from "../lib/redux-toolkit/slices/todo-slice";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import { setAddMoadl } from "../lib/redux-toolkit/slices/modal-slice";

export default function Header() {
  const dispatch = useDispatch();
  function handleFilter(priority) {
    dispatch(setFilter({ priority }));
  }
  function handleClick(){
   dispatch(setAddMoadl())
  }
  return (
    <header className="py-5 shadow-md fixed left-0 right-0 bg-white">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-3xl">Todo app</h1>
        <div className="flex items-center gap-5">
          <strong>Daraja bo'yicha filterlash:</strong>
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Daraja bo'yicha filterlash" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medium">O'rta</SelectItem>
              <SelectItem value="high">Yuqori</SelectItem>
              <SelectItem value="low">Quyi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleClick}>
          <PlusCircle />
          New
        </Button>
      </div>
    </header>
  );
}
