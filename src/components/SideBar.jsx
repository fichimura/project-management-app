import { useContext } from "react";
import { ProjectContext } from "../store/project-store-context"; 
import Button from "./Button";

export default function SideBar(){
    const {projects, handleOnNewProjectState, handleSelectProject } = useContext(ProjectContext);

    return(
        <aside className="w-72 bg-indigo-900 h-screen mt-32 rounded-md">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl ml-2 mb-3 text-indigo-100">Projects</h1>
                <Button width='w-32'onClick={handleOnNewProjectState}>+ New project</Button> 
            </div>

                <div className="flex flex-col mt-8">
                    <ul className="text-indigo-900">{projects.projects.length > 0 && projects.projects.map(project => {
                        return <li key={project.id} className="mb-3">
                            <Button isListItem width='w-10/12' onClick={() => handleSelectProject(project.id)}>{project.name}</Button>
                        </li>
                    })}
                    </ul> 
                </div>
     </aside>
    );
}