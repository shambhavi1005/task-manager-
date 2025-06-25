import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskForm({ editTask, setEditTask }) {
    const [formData, setFormData] = useState({ title: '', description: '', status: 'Pending' });

    useEffect(() => {
        if (editTask) setFormData(editTask);
    }, [editTask]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editTask) {
            await axios.put(`http://localhost:8000/api/tasks/${editTask.id}/`, formData);
        } else {
            await axios.post('http://localhost:8000/api/tasks/', formData);
        }
        setFormData({ title: '', description: '', status: 'Pending' });
        setEditTask(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">{editTask ? 'Update' : 'Create'} Task</button>
        </form>
    );
}

export default TaskForm;