import { useState, useContext } from "react";
import { ProjectContext } from "../store/project-store-context";
import Button from "./Button";
import NewTask from "./NewTask";

export default function Tasks(){
    const {projects, handleDeleteTask} = useContext(ProjectContext);
    const [newTaskClicked, setNewTaskClicked] = useState(false);
    const projectTasks = projects.tasks.filter(task => task.projectId === projects.selectedProject ); 
    
    function handleNewTaskClicked(){
        setNewTaskClicked(prevState => !prevState);
    }

    return(
        <div className="flex flex-col justify-between border-s-4 border-indigo-900 p-20">
            <div className="flex justify-around w-80 h-14">
                <h2 className="text-4xl text-indigo-400 mb-12">Tasks</h2>
                <Button onClick={handleNewTaskClicked}>New Task</Button>
            </div>

            {projectTasks.length === 0 ?
             <p className="my-8">This project does not have tasks.</p> 
             :
             <ul className="my-8 bg-indigo-200 rounded-lg p-4" >
                {projectTasks.map((task) => (
                    <li key={task.id} className="flex justify-around mb-4">
                        <span className="text-indigo-900 text-2xl">{task.text}</span>
                        <button className="bg-red-600 rounded-md p-3 font-bold text-white hover:bg-red-300 hover:text-slate-950" onClick={() => handleDeleteTask(task.id)}>Remove</button>
                    </li>
                    ))}
            </ul> }
        
            {newTaskClicked && <NewTask onCancel={handleNewTaskClicked}/>}
        </div>

    );
}