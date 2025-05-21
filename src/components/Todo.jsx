import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "./ui/button";
import { CheckCircle, RefreshCcwIcon, Trash, X } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../lib/redux-toolkit/slices/todo-slice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteTodo } from "../request";
import { toast } from "sonner";

export default function Todo({
  priority = "secondary",
  title = "",
  completed = false,
  id = 1,
}) {
  const [delLoading, setDelLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const styles = {
    medium: "outline",
    high: "destructive",
    low: "secondary",
  };

  function handleDeleteConfirmed(id) {
    setDelLoading(true);
    deleteTodo(id)
      .then(
        () => {
          dispatch(deleteData(id));
          setOpenDialog(false);
          toast.success("Malumot muvofaqiyatli o'chirildi ✅");
        },
        ({ message }) => {
          toast.error(message);
        }
      )
      .finally(() => {
        setDelLoading(false);
      });
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-5">
          <span>
            Muhimlilik darajasi:{" "}
            <Badge className="uppercase" variant={styles[priority]}>
              {priority}
            </Badge>
          </span>
          <span className="flex items-center gap-2">
            Holati:
            <Button size={"icon"} variant={completed ? "outline" : "secondary"}>
              {completed ? <CheckCircle /> : <X />}
            </Button>
          </span>
        </CardContent>
        <CardFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                disabled={delLoading}
                className={buttonVariants({ variant: "destructive" })}
                onClick={() => setOpenDialog(true)}
              >
                {delLoading ? (
                  <RefreshCcwIcon className="animate-spin" />
                ) : (
                  <Trash />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>O'chirmoqchisiz?</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>O'chirishni tasdiqlaysizmi?</DialogTitle>
            <DialogDescription>
              Rostdanxam o'chirmoqchimisz keyin bu todoni qaytarib bo'lmaydi
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="secondary"
              onClick={() => setOpenDialog(false)}
              disabled={delLoading}
            >
              Bekor qilish
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDeleteConfirmed(id)}
              disabled={delLoading}
            >
              {delLoading ? (
                <RefreshCcwIcon className="animate-spin w-4 h-4 mr-2" />
              ) : null}
              Tasdiqlayman
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
