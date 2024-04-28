import Button from "./Button";

export default function SelectedProject({project, onDeleteProject}){
    return(
        <>
            <div className="flex flex-col ml-48 mt-32">
                <h1 className="font-extrabold text-indigo-900 text-5xl mb-4 ">{project.name}</h1>
                <p className="text-xl text-indigo-900 whitespace-pre-wrap mb-2">{project.description}</p>
                <p className="text-xl text-indigo-900 whitespace-pre-wrap mb-4">{project.dueDate}</p>
                
                <button onClick={() => onDeleteProject(project.id)} className="bg-red-600 rounded-md p-3 font-bold text-white hover:bg-red-300 hover:text-slate-950">Delete</button>
            </div>
        </>
    );
}