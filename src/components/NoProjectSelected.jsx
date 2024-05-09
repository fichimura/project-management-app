import { useContext } from "react";
import { ProjectContext } from "../store/project-store-context";
import Button from "./Button";

export default function NoProjectSelected(){
    const {handleOnNewProjectState} = useContext(ProjectContext);
    return(
        <div className="ml-64 mt-72">
            <h2 className="text-indigo-900 font-bold mb-6">No projects selected yet.</h2>
            <Button onClick={handleOnNewProjectState}>Create new project</Button>
        </div>
    ); 
}