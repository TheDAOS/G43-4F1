import type React from "react"

enum TaskStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

interface props {
    children: React.ReactNode,
}

interface taskProp {
    task: Task,
    id: number,
}

interface Task {
    title: string;
    status: TaskStatus;
}

interface AppState {
    tasks: Task[];
}

export { TaskStatus };
export type { Task, AppState, props, taskProp };
