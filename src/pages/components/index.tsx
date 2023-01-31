import React from "react"
import { useState } from "react"
import TaskInput from "./TaskInput"
import TaskList from "./TaskList"
import { Task } from "./Type"

const initialState: Task[] = [
    {
        id: 2,
        title: "2番",
        done: false
    },{
        id: 1,
        title: "1番",
        done: false
    }
]

const Conponents: React.FC = () => {
    const [tasks,setTasks] = useState(initialState)
    return (
        <div>
            <TaskInput setTasks={setTasks} tasks={tasks}/>
            <TaskList setTasks={setTasks} tasks={tasks}/>

        </div>
    )
}

export default Conponents