import { useState } from "react"
import NewProject from "./components/NewProject"
import SideBar from "./components/SideBar"
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [newProjectClicked, setNewProjectClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleOnNewProjectState() {
    setNewProjectClicked(prevValue => !prevValue);
  }
  
  function handleCreateProject(name, description, dueDate){
    setProjects(prevValue => {
      return [
        ...prevValue,
        {
          name,
          description,
          dueDate
        }
      ]
    });

    handleOnNewProjectState();
  }

  function handleSelectProject(projectId){
    setSelectedProject(projects.find( project => project.id === projectId));
  }

  console.log(newProjectClicked);

  return (
    <main className="flex flex-row">
    <SideBar onProjectSelected={handleSelectProject} onCreateProjectClicked={handleOnNewProjectState} projects={projects}/>
    {newProjectClicked && <NewProject onCancelClicked={handleOnNewProjectState} onCreateClicked={handleCreateProject} />}
    
    {(projects.length === 0 || (!newProjectClicked && !selectedProject) )&& <NoProjectSelected onCreateProjectClicked={handleOnNewProjectState}/> }

    {/* //TODO - THIS IS NOT SHOWING THE CORRESPONDING PROJECT WHEN CLICKED. IT STAYS STATIC IN A SINGLE PROJECT */}
    {(!newProjectClicked && selectedProject) && <SelectedProject project={selectedProject}/>}
    </main>
  )
}

export default App
