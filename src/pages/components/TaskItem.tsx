import React from "react"
import { Task } from "./Type"

type Props = {
    task: Task
    handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({task, handleDelete}) => {
    return (
        <li>
            <label>
                <input type="checkbox" className="checkbox-innput" />
                <span className="checkbox-label">{task.title}</span>
            </label>
            <button 
                onClick={() => handleDelete(task)}
                className="btn is-delete">削除
            </button>

        </li>
    )
}

export default TaskItem