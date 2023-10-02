import TaskForm from '@/components/TaskForm';
import { prisma } from '@/libs/prisma';
import React from 'react'

const NewPage = ({ params: { id } }: { params: { id: string } }) => {
    const getTaskById = async () => {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(id),
            },
        });
        return task;
    };


    return (
        <TaskForm />
    );
};
export default NewPage;