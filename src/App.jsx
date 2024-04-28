import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import NewProject from "./components/NewProject"
import SideBar from "./components/SideBar"
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [newProjectClicked, setNewProjectClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleOnNewProjectState() {
    setNewProjectClicked(prevProjectState => !prevProjectState);
  }
  
  function handleCreateProject(name, description, dueDate){
    setProjects(prevProjects => {
      return [
        ...prevProjects,
        {
          id: uuidv4(),
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

  function handleDeleteProject(projectId){
    setProjects(prevProjects => {
      console.log('prev',prevProjects);

      //TODO - FIX THIS FILTER. AT THE MOMENT ITS REMOVING ALL THE ITEMS IN THE ARRAY
      return prevProjects.filter((project) =>{
        project.id !== projectId;
      });
    });

    setSelectedProject(null);
  }


  return (
    <main className="flex flex-row">
    <SideBar onProjectSelected={handleSelectProject} onCreateProjectClicked={handleOnNewProjectState} projects={projects}/>
    {newProjectClicked && <NewProject onCancelClicked={handleOnNewProjectState} onCreateClicked={handleCreateProject} />}
    
    {(!newProjectClicked && !selectedProject) && <NoProjectSelected onCreateProjectClicked={handleOnNewProjectState}/> }

    {/* //TODO - THIS IS NOT SHOWING THE CORRESPONDING PROJECT WHEN CLICKED. IT STAYS STATIC IN A SINGLE PROJECT */}
    {(!newProjectClicked && selectedProject) && <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject}/>}
    </main>
  )
}

export default App
