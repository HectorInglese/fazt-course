'use client';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Input, Textarea, Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";
const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Use the taskName and description variables to upload the data to the backend
        console.log(taskName, description);
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
                        name="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        isClearable
                    />
                    <Textarea
                        variant="bordered"
                        minRows={2}
                        label="Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button type="submit" size="lg" variant="flat">
                        Save
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
};
export default TaskForm;