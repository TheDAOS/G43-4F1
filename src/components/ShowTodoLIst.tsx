import { useSelector } from "react-redux"
import type { AppState, Task } from "../type";
import Card from "./Card";

function ShowTodoList() {
    const tasks = useSelector((state: AppState) => state.tasks)

    return (
        <div>
            {tasks.map((task: Task, index: number) => <Card task={task} id={index} />)}
        </div>
    )
}

export default ShowTodoList;
