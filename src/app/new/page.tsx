import TaskForm from '@/components/TaskForm';
import { prisma } from '@/libs/prisma';
import React from 'react'

const NewPage = () => {
    return (
        <TaskForm task={null} />
    );
};
export default NewPage;