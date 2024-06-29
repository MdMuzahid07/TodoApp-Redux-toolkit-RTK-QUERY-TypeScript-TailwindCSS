import AddTodoModel from "./AddTodoModal"
import TodoCard from "./TodoCard"
import TodoFilter from "./TodoFilter"
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
    // const { todos } = useAppSelector(state => state.todos);
    const [priority, setPriority] = useState(" ");

    const { data, isLoading, isError } = useGetTodosQuery(priority);

    if (isError) {
        console.log(isError);
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    console.log(data);
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModel />
                <TodoFilter priority={priority} setPriority={setPriority} />
            </div>
            <div className="bg-primary-gradient w-full rounded-xl p-[5px]">
                <div className="bg-slate-100 w-full h-full p-5 rounded-lg  space-y-4">
                    {/* <div className="bg-white p-3 rounded-xl">
                    <p className="text-center text-2xl font-semibold">No task pending</p>
                </div> */}
                    {
                        data?.data?.map((todo) => <TodoCard key={todo?.id} {...todo} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default TodoContainer