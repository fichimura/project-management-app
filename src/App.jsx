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

  //TODO - ADD THE NEW TASK TO THE SELECTED PROJECT
  function handleAddTask(projectId, taskToAdd){
    setProjects(prevProjects => {
        const finalProjects = [];
        prevProjects.map(project => {
          if( project === projectId ){
            if(project.tasks){
              finalProjects.concat({...project, project.tasks.concat(taskToAdd)});
            }else{
              finalProjects.concat({...project, task: [taskToAdd]});
            }
          }
        });

       return finalProjects;
      }
    );
  }

  function handleDeleteTask(){

  }

  function handleOnNewProjectState() {
    setNewProjectClicked(prevProjectState => !prevProjectState);
  }
  
  function handleCreateProject(name, description, dueDate){
    setProjects(prevProjects => {
      return [
        ...prevProjects, {id: uuidv4(), name, description, dueDate}
      ]
    });

    handleOnNewProjectState();
  }

  function handleSelectProject(projectId){
    setSelectedProject(projects.find(project => project.id === projectId));
  }

  function handleDeleteProject(projectId){
    setSelectedProject(null);

    const previousProjects = [...projects];
    previousProjects.projects.splice(projectId, 1);
    setProjects(previousProjects);
  }


  return (
    <main className="flex flex-row">
      <SideBar onProjectSelected={handleSelectProject} onCreateProjectClicked={handleOnNewProjectState} projects={projects}/>

      <section className="flex justify-center w-2/3">
        {newProjectClicked && <NewProject onCancelClicked={handleOnNewProjectState} onCreateClicked={handleCreateProject} />}
        
        {(!newProjectClicked && !selectedProject) && <NoProjectSelected onCreateProjectClicked={handleOnNewProjectState}/> }

        {(!newProjectClicked && selectedProject) && <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onDeleteAddTask={handleDeleteTask}/>}
      </section>
    </main>
  )
}

export default App
