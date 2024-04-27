export default function SelectedProject({project}){
    return(
        <>
            <div className="flex flex-col ml-48 mt-32">
                <h1 className="font-extrabold text-indigo-900 text-5xl mb-4 ">{project.name}</h1>
                <p className="text-xl text-indigo-900 whitespace-pre-wrap mb-2">{project.description}</p>
                <p className="text-xl text-indigo-900 whitespace-pre-wrap">{project.dueDate}</p>
            </div>
        </>
    );
}