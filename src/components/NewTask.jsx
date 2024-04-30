import { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

export default function NewTask({project, onAdd, onCancel }){
    const [task, setTask] = useState('');
    
    function handleTaskChange(evt){
        setTask(evt.target.value);
    }

    function handleNewTaskClicked(){
        const taskToAdd = {
            id:uuidv4(),
            task
        }
        onAdd(project.id, taskToAdd);
        setTask('');
    }

    return(
        <>
            <div className="flex items-center gap-4">
                <label>Add task:</label>
                <input onChange={handleTaskChange} type="text" className="w-72 px-4 py-2 rounded-md bg-indigo-200" />
            </div>
            <div className="mt-3 flex justify-between">
                <Button onClick={handleNewTaskClicked}>Add new task</Button>
                <button onClick={onCancel} className="bg-red-600 text-white w-32 rounded-md hover:bg-red-300 ">Cancel</button>
            </div>
        </>
    );
}