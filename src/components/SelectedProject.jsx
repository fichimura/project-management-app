import { useContext } from "react";
import { ProjectContext } from "../store/project-store-context";
import Tasks from "./Tasks";

export default function SelectedProject(){
    const {projects, handleDeleteProject} = useContext(ProjectContext);
    const selectedProject = projects.projects.find(project => project.id === projects.selectedProject );

    return(
        <>
            <div className="flex flex-col ml-48 mt-32 w-2/3">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-extrabold text-indigo-900 text-5xl mb-4 ">{selectedProject.name}</h1>
                        <p className="text-xl text-indigo-900 whitespace-pre-wrap mb-2">{selectedProject.description}</p>
                        <p className="text-xl text-indigo-900 whitespace-pre-wrap mb-4">{selectedProject.dueDate}</p>
                        <button onClick={() => handleDeleteProject(selectedProject.id)} className="bg-red-600 rounded-md p-3 font-bold text-white hover:bg-red-300 hover:text-slate-950">Delete</button>
                    </div>
                    <Tasks className="border-x-8 border-spacing-x-4" />
                </div>
            </div>
        </>
    );
}