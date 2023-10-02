export type indidividualTask = {
    id?: Number,
    title?: String,
    description?: String,
    createdAt?: Date
};

export type Tasks = {
    tasks: [indidividualTask]
};