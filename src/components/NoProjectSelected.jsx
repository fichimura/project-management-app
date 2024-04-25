import Button from "./Button";

export default function NoProjectSelected({onCreateProjectClicked}){
    return(
        <div className="ml-64 mt-72">
            <h2 className="text-indigo-900 font-bold mb-6">No projects selected yet.</h2>
            <Button onClick={onCreateProjectClicked} >Create new project</Button>
        </div>
    ); 
}