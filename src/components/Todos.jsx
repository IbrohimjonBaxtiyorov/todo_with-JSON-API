import { useEffect } from "react";
import Loading from "./Loading";
import Todo from "./Todo";
import { getTodos } from "../request";
import { toast } from "sonner";
import { setData } from "../lib/redux-toolkit/slices/todo-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const { data, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(filter)
      .then(
        (res) => {
          dispatch(setData(res));
        },
        ({ message }) => {
          toast.error(message);
        }
      )
      .finally(() => {});
  }, [JSON.stringify(filter)]);

  if (false) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <Loading />
      </div>
    );
  }

  if (false) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <p>{error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <p>No data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 container mx-auto px-5 pb-10 pt-[116px]">
      {data.map(({ completed, title, id, priority }, index) => {
        return (
          <Todo
            key={id}
            completed={completed}
            title={title}
            priority={priority}
            id={id}
          />
        );
      })}
    </div>
  );
}
