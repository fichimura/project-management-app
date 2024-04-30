import { useState } from "react";
import Button from "./Button";
import NewTask from "./NewTask";

export default function Tasks({project, onAddTask, onDeleteTask }){
    const [newTaskClicked, setNewTaskClicked] = useState(false);

    function handleNewTaskClicked(){
        setNewTaskClicked(prevState => !prevState);
    }

    console.log('project', project);

    return(
        <div className="flex flex-col justify-between border-s-4 border-indigo-900 p-24">
            <h2 className="text-4xl text-indigo-400 mb-12">Tasks</h2>
            <Button onClick={handleNewTaskClicked}>New Task</Button>
            {!project.hasOwnProperty('tasks') && <p className="my-8">This project does not have tasks.</p>}

            {project.hasOwnProperty('tasks')}
            {newTaskClicked && <NewTask project={project} onCancel={handleNewTaskClicked} onAdd={onAddTask}/>}
        </div>

    );
}