import { useState } from "react";
import Button from "./Button";

export default function NewTask({onAdd }){
    const [task, setTask] = useState('');
    
    function handleTaskChange(evt){
        setTask(evt.target.value);
    }

    function handleNewTaskClicked(){
        onAdd(task);
        setTask('');
    }

    return(
        <div className="flex items-center gap-4">
            <label>Task:</label>
            <input onChange={handleTaskChange} type="text" className="w-72 px-4 py-2 rounded-md bg-indigo-200" />
            <Button onClick={handleNewTaskClicked}>Add new task</Button>
        </div>
    );
}