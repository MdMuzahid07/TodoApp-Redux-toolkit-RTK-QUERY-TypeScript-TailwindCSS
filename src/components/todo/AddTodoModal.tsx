
import { FormEvent, useState } from "react"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { useAppDispatch } from "@/redux/hooks"
import { addTodo } from "@/redux/features/todoSlice"
import { useAddTodoMutation } from "@/redux/api/api"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"

const AddTodoModel = () => {
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [priority, setPriority] = useState(" ");
    // const dispatch = useAppDispatch();


    // for server
    const [addTodo, { data, isLoading, isError, isSuccess }] = useAddTodoMutation();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // const randomString = Math.random().toString(36).substring(2, 7);
        const task = {
            title,
            isCompleted: false,
            description,
            priority
        };
        // dispatch(addTodo(task));
        addTodo(task);
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">add todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Title</DialogTitle>
                    <DialogDescription>
                        Add Task
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} >
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input
                                onBlur={(e) => setTitle(e.target.value)}
                                id="task"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                onBlur={(e) => setDescription(e.target.value)}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">
                                Priority
                            </Label>
                            <Select onValueChange={(value) => setPriority(value)}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="low">Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddTodoModel