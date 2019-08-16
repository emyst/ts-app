export interface ITodo {
    userId: number;
    id: number,
    title: string;
    completed: boolean;
}

export interface ITodos {
    results: Array<ITodo>;
}