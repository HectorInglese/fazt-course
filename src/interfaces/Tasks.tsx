export type indidividualTask = {
    id: number;
    title: string;
    description: string | null;
    createdAt: Date | null;
} | null;

export type Tasks = {
    tasks: [indidividualTask]
};

export interface TaskFunction {
    loadTaskById: (id: string) => Promise<indidividualTask>;
    loadTasks: () => Promise<Tasks>;
}
