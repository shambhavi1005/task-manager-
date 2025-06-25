import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [editTask, setEditTask] = useState(null);

    return (
        <div>
            <h1>Shambhavi's Task Manager</h1>
            <TaskForm editTask={editTask} setEditTask={setEditTask} />
            <TaskList setEditTask={setEditTask} />
        </div>
    );
}

export default App;