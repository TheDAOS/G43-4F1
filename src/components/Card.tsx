import { useDispatch } from "react-redux";
import { removeTask, toggleTaskCompletion } from "../redux/appSlice";
import type { taskProp } from "../type";

function Card({ id, task }: taskProp) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTaskCompletion(id));
    };

    const handleRemove = () => {
        dispatch(removeTask(id));
    };

    return (
        <div className={`p-2 border-b-1 w-60 decoration-2 decoration-stone-800 border-b-stone-800/30 ${task.status === 'DONE' ? "line-through" : ""} flex items-center`}>
            <button
                className="p-1 mx-1 border-4 border-blue-600 rounded-full relative hover:border-transparent hover:after:content-['X'] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full hover:after:flex hover:after:items-center hover:after:justify-center hover:after:text-red-500"
                onClick={handleRemove}
            ></button>
            <button onClick={handleToggle}>{task.title}</button>
        </div>
    )
}

export default Card;