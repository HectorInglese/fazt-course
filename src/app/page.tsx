import TaskCard from "@/components/TaskCard";
import { indidividualTask } from "@/interfaces/Tasks";
import { prisma } from "@/libs/prisma";
const loadTasks = async () => {
  return await prisma.task.findMany();
};
const LandingPage = async () => {
  const tasks = await loadTasks();
  return (
    <>
      {tasks.length === 0
        ? <div>No hay tareas</div>
        : <div className='container py-3 gap-3 grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] '>
          {tasks.map((task: indidividualTask, index: number) => (
            <TaskCard key={task?.id.toString()} task={task} index={index} />
          ))}
        </div>
      }
    </>
  );
};

export default LandingPage