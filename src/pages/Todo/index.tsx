import React, { useRef, useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([{id:"", name:""}])
    const todoNameRef = useRef<HTMLInputElement>(null!)

    const handleAndTodo = () => {
        const name = todoNameRef.current?.value

        setTodos((prevTodos) => {
            return [...prevTodos, {id: name, name:name}]
        })
        todoNameRef.current.value = ""
    }

    return (
        <div>
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAndTodo}>タスクを追加</button>
            <TodoList todos={todos}/>
        </div>
    )
}

export default Todo