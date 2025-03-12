import React,{useState} from 'react'

function Assignment6() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (!task.trim()) return;

        setTasks((prevTasks) =>
            [...prevTasks, task].sort((a, b) => a.localeCompare(b))
        );
        setTask("");
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Assignment6