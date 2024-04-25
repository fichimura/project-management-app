import { useState } from "react"
import NewProject from "./components/NewProject"
import SideBar from "./components/SideBar"
import NoProjectSelected from "./components/NoProjectSelected";
import { v4 as uuid } from 'uuid';

function App() {
  const [newProjectClicked, setNewProjectClicked] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleOnNewProjectState() {
    setNewProjectClicked(prevValue => !prevValue);
  }

  function handleCreateProject(name, description, dueDate){
    setProjects(prevProjects => 
      [
        ...prevProjects,
        {
          id: uuid(),
          name,
          description,
          dueDate
        }
      ]);
      handleOnNewProjectState();
  }

  console.log(projects);

  return (
    <main className="flex flex-row">
    <SideBar onCreateProjectClicked={handleOnNewProjectState} projects={projects}/>
    {newProjectClicked && <NewProject onCreateClicked={handleCreateProject} onCancelClicked={handleOnNewProjectState}/>}
    
    {(projects.length === 0 || !newProjectClicked)&& <NoProjectSelected onCreateProjectClicked={handleOnNewProjectState}/> }
    </main>
  )
}

export default App
