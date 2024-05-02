import Button from "./Button";

export default function SideBar({projects, onCreateProjectClicked, onProjectSelected}){
    return(
        <aside className="w-72 bg-indigo-900 h-screen mt-32 rounded-md">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl ml-2 mb-3 text-indigo-100">Projects</h1>
                <Button width='w-32' onClick={onCreateProjectClicked}>+ New project</Button> 
            </div>

                <div className="flex flex-col mt-8">
                    <ul className="text-indigo-900">{projects.projects && projects.projects.map(project => {
                        return <li key={project.id} className="mb-3">
                            <Button isListItem width='w-10/12' onClick={() => onProjectSelected(project.id)}>{project.name}</Button>
                        </li>
                    })}
                    </ul> 
                </div>
     </aside>
    );
}