import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TaskStatus, type AppState } from '../type';

const initialState: AppState = {
    tasks: [
        {
            title: "task 1",
            status: TaskStatus.IN_PROGRESS,
        },
        {
            title: "task 2",
            status: TaskStatus.DONE,
        }
    ],
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ title: string }>) => {
            state.tasks.push({ title: action.payload.title, status: TaskStatus.IN_PROGRESS });
        },
        toggleTaskCompletion: (state, action: PayloadAction<number>) => {
            const task = state.tasks[action.payload];
            if (task) {
                task.status = (task.status === TaskStatus.DONE ? TaskStatus.IN_PROGRESS : TaskStatus.DONE);
            }
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks.splice(action.payload, 1);
        },
    },
});

export const { addTask, toggleTaskCompletion, removeTask } = appSlice.actions;

export default appSlice.reducer;
