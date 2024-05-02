import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import NewProject from "./components/NewProject"
import SideBar from "./components/SideBar"
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [newProjectClicked, setNewProjectClicked] = useState(false);
  const [projects, setProjects] = useState({
    projects: [],
    tasks: []
  });
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddTask(projectId, taskToAdd){
    setProjects(prevProjects => {
        return {
          projects: [...prevProjects.projects],
          tasks: prevProjects.tasks ? [...prevProjects.tasks, taskToAdd] : [taskToAdd]
        }
      }
    );
  }
  
  function handleDeleteTask(taskId){
    setProjects(prevProjects => {
      const projectsWithElementRemoved ={
        projects: [...prevProjects.projects],
        tasks: prevProjects.tasks.splice(taskId, 1)
      };

    return projectsWithElementRemoved;
    });
  }

  function handleOnNewProjectState() {
    setNewProjectClicked(prevProjectState => !prevProjectState);
  }
  
  function handleCreateProject(name, description, dueDate){
    setProjects(prevProjects => {
      return {
        projects: [...prevProjects.projects, {id: uuidv4(), name, description, dueDate}],
        tasks: prevProjects.tasks ? [...prevProjects.tasks] : []
      } 
    });

    handleOnNewProjectState();
  }

  function handleDeleteProject(projectId){
    setSelectedProject(null);

    setProjects(prevProjects => {
      const projectsWithElementRemoved ={
          projects: prevProjects.projects.splice(projectId, 1),
          tasks: prevProjects.tasks ? [...prevProjects.tasks] : []
        };

      return projectsWithElementRemoved;
    });
  }


  function handleSelectProject(projectId){
    if(newProjectClicked){
      handleOnNewProjectState();
    }
    setSelectedProject(projects.projects.find(project => project.id === projectId));
  }

  return (
    <main className="flex flex-row">
      <SideBar onProjectSelected={handleSelectProject} onCreateProjectClicked={handleOnNewProjectState} projects={projects}/>

      <section className="flex justify-center w-2/3">
        {newProjectClicked && <NewProject onCancelClicked={handleOnNewProjectState} onCreateClicked={handleCreateProject} />}
        
        {(!newProjectClicked && !selectedProject) && <NoProjectSelected onCreateProjectClicked={handleOnNewProjectState}/> }

        {(!newProjectClicked && selectedProject) && <SelectedProject project={selectedProject} tasks={projects.tasks} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>}
      </section>
    </main>
  )
}

export default App
