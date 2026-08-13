import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todo() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const handleChange = (e) => {
        setTask(e.target.value)
        
    }

    const addTask = () => {
        const newTask = { id: uuidv4(), text: task, isCompleted: false }
        const updatedTasks = [...tasks, newTask]
        setTasks(updatedTasks)
        setTask('')
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        console.log(updatedTasks)
    }

    const checkTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted }
            }
            return task
        })
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }

    const handleEdit = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                const newText = prompt('Enter new task text:', task.text)
                if (newText !== null && newText.trim() !== '') {
                    return { ...task, text: newText }
                }
            }
            return task
        })
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }


    return (
        <>
            <div>
                This is Todo component
            </div>
            <div>
                <input type="text" onChange={handleChange} value={task}  />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
            {localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks')).length === 0 ? <div style={{ display: 'flex', alingItems: "center", justifyContent: 'center', width: '100%', gap: '10px', marginTop:'10px' }} >No tasks</div> :
                <ul >
                    {localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks')).map((task) => (
                        <div style={{ display: 'flex', alingItems: "center", justifyContent: 'center', width: '100%', gap: '10px' }} key={task.id}>
                            <input type="checkbox" checked={task.isCompleted} onChange={() => checkTask(task.id)} />
                            <li key={task.id} style={{ listStyle: 'none', display: 'flex', justifyContent: "space-between", width: '50%', marginTop:'10px' }}> <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                                {task.text}
                                </span>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                    <button onClick={() => handleEdit(task.id)}>edit</button>
                                    <button onClick={() => handleDelete(task.id)}>delete</button>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            }
            </div>
        </>
    )
}

export default Todo
