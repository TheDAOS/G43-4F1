import { useDispatch } from "react-redux";
import { addTask } from "../redux/appSlice";
import { useState } from "react";

function AddTask() {
    const [taskTitle, setTaskTitle] = useState<string>("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (taskTitle.trim() === "") return;

        dispatch(addTask({ title: taskTitle }));
        setTaskTitle("");
    };

    return (
        <div className="border-b-2 border-stone-800 m-1 w-82 flex justify-between items-center">
            <input
                type="text"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="focus:outline-none"
            />
            <button
                onClick={handleAdd}
                className="ms-1 p-1 px-2 rounded-t cursor-pointer font-semibold hover:bg-stone-300 hover:before:content-['+'] hover:before:me-1 hover:before:font-bold"
            >Add Task</button>
        </div>
    );
}

export default AddTask;