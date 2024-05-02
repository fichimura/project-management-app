import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "./Button";
import Modal from "./Modal";

export default function NewTask({project, onAdd, onCancel }){
    const modal = useRef();
    const [task, setTask] = useState('');
    
    function handleTaskChange(evt){
        setTask(evt.target.value);
    }

    function handleNewTaskClicked(){
        if(task.trim() === ''){
            modal.current.open();
        }else{
            const taskToAdd = {
                id: uuidv4(),
                projectId: project.id,
                text: task
            }
            onAdd(project.id, taskToAdd);
            setTask('');
            onCancel();
        }
    }

    return(
        <>
            <Modal className="backdrop: p-28" ref={modal} buttonText='Close' >
                <h1 className="font-bold text-xl text-indigo-900 py-5">Error during the creation of the project</h1>
                <p className="text-lg text-indigo-900 py-5">It looks like you forgot to fill one of the fields</p>
            </Modal>

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