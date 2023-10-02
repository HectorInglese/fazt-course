'use client';
import { indidividualTask } from '@/interfaces/Tasks'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider } from '@nextui-org/react'
import React from 'react'
import IconDelete from '../../public/TrashIcon';
import PencilIcon from '../../public/PencilIcon';
import { useRouter } from 'next/navigation';

const TaskCard = ({ task, index }: { task: indidividualTask, index: number }) => {
    const router = useRouter();
    return (
        <Card
            isPressable
            onPressEnd={() => router.push(`/task/edit/${task.id}`)}
        >
            <CardHeader className='flex items-center h-[5rem]'>
                <h1 className='font-bold w-10/12 pr-3'>{task.title}</h1>
                <Divider orientation="vertical" />
                <div className='w-2/12 ml-3 flex justify-center items-center px-2 gap-2'>
                    <Button
                        variant='ghost'
                        color='primary'
                        radius='full'
                        size='md'
                        onClick={() => { console.log(`${task.id}`); }}
                        isIconOnly
                    >
                        <PencilIcon />
                    </Button>
                    <Button
                        variant='ghost'
                        color='danger'
                        radius='full'
                        size='md'
                        onClick={() => { console.log(`${task.id}`); }}
                        isIconOnly
                    >
                        <IconDelete />
                    </Button>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className='py-5 px-3 min-h-[7rem]'>
                <p>{task.description}</p>
            </CardBody>
            <Divider />
            <CardFooter className='flex items-center'>
                <p className='font-light text-small italic'>Creado el : {new Date(task.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, ' / ')}</p>
            </CardFooter>
        </Card>
    )
}

export default TaskCard