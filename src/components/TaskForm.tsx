'use client';
import { indidividualTask } from "@/interfaces/Tasks";
import { Card, CardHeader, CardBody, Divider, Image, Input, Textarea, Button } from "@nextui-org/react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const TaskForm = ({ task }: { task: indidividualTask }) => {
    const [taskForm, setTaskForm] = useState({
        title: "",
        description: "",
    });
    const router = useRouter();
    useEffect(() => {
        !!task?.id && setTaskForm({
            title: task.title ?? "",
            description: task.description ?? ""
        });
    }, [task]);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTaskForm({
            ...taskForm,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!!task?.id) {
            const res = await fetch(`/api/task/${task?.id}`, {
                method: "PUT",
                body: JSON.stringify(taskForm),
                headers: {
                    "Content-Type": "application/json",
                }
            });
        } else {
            const res = await fetch("/api/task", {
                method: "POST",
                body: JSON.stringify(taskForm),
                headers: {
                    "Content-Type": "application/json",
                }
            });
        }
        router.refresh();
        router.push("/");
    };

    return (
        <Card
            className="w-full min-h-100% flex justify-center items-center"
            radius="md"
        >
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <Divider orientation="vertical" />
                <div className="flex flex-col">
                    <p className="text-md">TASK FORM</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody >
                <form onSubmit={onSubmit} className="flex flex-col gap-5 px-7">
                    <Input
                        variant="bordered"
                        label="Task name"
                        labelPlacement="outside"
                        name="title"
                        value={taskForm.title}
                        onChange={handleChange}
                        isClearable
                        onClear={() => setTaskForm((prev) => ({ ...prev, title: "" }))}
                        placeholder="Enter the task name"
                        size="lg"
                    />
                    <Textarea
                        variant="bordered"
                        minRows={4}
                        label="Description"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        name="description"
                        value={taskForm.description}
                        onChange={handleChange}
                    />
                    <Button
                        color={(taskForm.title.length > 0 && taskForm.description.length > 0) ? "success" : "default"}
                        variant={(taskForm.title.length > 0 && taskForm.description.length > 0) ? "solid" : "ghost"}
                        isDisabled={(taskForm.title.length > 0 && taskForm.description.length > 0) ? false : true}
                        type="submit"
                        size="lg"
                        radius="sm"
                    >
                        {(taskForm.title.length > 0 && taskForm.description.length > 0) ? "Save" : ""}
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
};
export default TaskForm;