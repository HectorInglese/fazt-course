import { prisma } from "@/libs/prisma";
import Error from "next/error";
import { NextResponse } from "next/server";
const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    const task = await prisma.task.findUnique({
        where: {
            id: Number(id),
        },
    });
    if ((task === undefined) || (task === null)) {
        return NextResponse.json({ message: "No existe la tarea" });
    } else {
        return NextResponse.json({ task });
    };
};
const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    return NextResponse.json({ message: `Actualizando tarea ${params.id}` });
};
const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const { id } = params;
        const removedTask = await prisma.task.delete({
            where: {
                id: Number(id),
            },
        });
        return NextResponse.json(removedTask);
    } catch (e: any) {
        
        return NextResponse.json({ message: e.message });
    };
};


export { GET, PUT, DELETE };