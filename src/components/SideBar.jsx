import Button from "./Button";

export default function SideBar({projects, onCreateProjectClicked}){
    return(
        <aside className="w-72 bg-indigo-900 h-screen mt-32 rounded-md">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl ml-2 mb-3 text-indigo-100">Projects</h1>
                <Button width='w-32' onClick={onCreateProjectClicked}>+ New project</Button> 
            </div>

            {projects.length > 0 && 
                <div className="flex flex-col">
                <h1 className="text-indigo-900 font-bold mb-5">Projects</h1>
                <ul className="text-indigo-900">{projects.map(project => {
                    return <li key={project.id} className="mb-3">
                        <Button isListItem width='w-1/3'>{project.name}</Button>
                    </li>
                })}
                </ul> 
                </div>}
     </aside>
    );
}