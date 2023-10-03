import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server"
const GET = async () => {
    const tasks = await prisma.task.findMany();
    if ((tasks === undefined) || (tasks.length === 0)) {
        return NextResponse.json({ message: "No hay tareas" });
    } else if (tasks === null) {
        return NextResponse.json({ message: "No existen tareas" });
    } else {
        return NextResponse.json({ tasks });
    };
};

const POST = async (request: Request) => {
    const data = await request.json();
    const newTask = await prisma.task.create({
        data: data
    });
    return NextResponse.json(newTask);
};

const DELETE = async () => {
    const deleteUsers = await prisma.task.deleteMany({
        where: {
            id: {
                not: 0
            }
        }
    })
    return NextResponse.json(deleteUsers);
}

export { GET, POST, DELETE };