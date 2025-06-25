import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList({ setEditTask }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:8000/api/tasks/');
        setTasks(res.data);
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
        fetchTasks();
    };

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => setEditTask(task)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;