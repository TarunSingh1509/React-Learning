import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todo() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('Enter your task')
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
            <div style={{fontSize: '50px', fontWeight: '600', margin: '10px'}}>
                This is Todo App
            </div>
            <div style={{ display: 'flex', alingItems: "center", justifyContent: 'center', width: '100%', gap: '10px', marginTop:'30px',height:'40px' }} >
                <input type="text" onChange={handleChange} value={task} style={{width:'500px',fontSize:'20px'}} />
                <button onClick={addTask} disabled={task.length<=3} style={{borderRadius:'10px',width:'50px', fontSize:'20px'}} >Add</button>
            </div>
            <div>
            {JSON.parse(localStorage.getItem('tasks')).length === 0 ? <div style={{ display: 'flex', alingItems: "center", justifyContent: 'center', width: '100%', gap: '10px', marginTop:'10px' }} >No tasks</div> :
                <ul >
                    {JSON.parse(localStorage.getItem('tasks')).map((task) => (
                        <div style={{ display: 'flex', alingItems: "center", justifyContent: 'center', width: '100%', gap: '10px' }} key={task.id}>
                            <input type="checkbox" checked={task.isCompleted} onChange={() => checkTask(task.id)} value={task} minLength={3} />
                            <li key={task.id} style={{ listStyle: 'none', display: 'flex', justifyContent: "space-between", width: '50%', marginTop:'10px' }}> <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.isCompleted ? 'black' : 'gray',textAlign:'left'}} >
                                {task.text}
                                </span>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                    <button style={{height: '30px'}} onClick={() => handleEdit(task.id)}>edit</button>
                                    <button style={{height: '30px'}} onClick={() => handleDelete(task.id)}>delete</button>
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
