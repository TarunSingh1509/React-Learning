import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        setTasks([...tasks, task])
        setTask('')

    }
    return (
        <>
            <div>
                This is Todo component
            </div>
            <div>
                <input type="text" onChange={handleChange} value={task} />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <ul >
                    {tasks.map((task, index) =>
                    (
                        <div style={{ display: 'flex', alingItems: "center", justifyContent: 'center', width: '100%', gap: '10px' }} key={index}>
                            <input type="checkbox" checked={isCompleted}/>
                            <li key={index} style={{ listStyle: 'none', display: 'flex', justifyContent: "space-between", width: '50%', marginTop:'10px' }}>{task}
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todo
