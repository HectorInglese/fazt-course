import TaskForm from '@/components/TaskForm';
import { prisma } from '@/libs/prisma';
import { TaskFunction, indidividualTask } from "@/interfaces/Tasks";
import React from 'react'
import { revalidatePath } from 'next/cache';
const EditTaskById = async ({ params: { id } }: { params: { id: string } }) => {
    const loadTaskById = async (id: string) => {
        try {
            let task = await prisma.task.findUnique({
                where: {
                    id: Number(id),
                },
            });
            return task;
        } catch (err) {
            return null;
        };
    };

    let task = await loadTaskById(id);
    return (
        <>
            <TaskForm task={task} />
        </>
    );
};
export default EditTaskById;