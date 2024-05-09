import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewProject from "../components/NewProject"
import SideBar from "../components/SideBar"
import NoProjectSelected from "../components/NoProjectSelected";
import SelectedProject from "../components/SelectedProject";

export const ProjectContext = createContext({
    projects: [],
    handleCreateProject: () => {},
    handleSelectProject: () => {},
    handleOnNewProjectState: () => {},
    handleDeleteProject: () => {},
    handleAddTask: () => {},
    handleDeleteTask: () => {}
}); 

export default function ProjectContextProvider() {
    const [projects, setProjects] = useState({
      projects: [],
      tasks: [],
      newProjectClicked: false,
      selectedProject: null
    });
  
    function handleOnNewProjectState() {
      setProjects(prevProjects => {
        return {
          ...prevProjects,
          newProjectClicked: !prevProjects.newProjectClicked
        }
      });
    }
    
    function handleCreateProject(name, description, dueDate){
      handleOnNewProjectState();

      setProjects(prevProjects => {
        return {
          projects: [...prevProjects.projects, {id: uuidv4(), name, description, dueDate}],
          tasks: prevProjects.tasks ? [...prevProjects.tasks] : [],
          newProjectClicked: prevProjects.newProjectClicked,
          selectedProject: prevProjects.selectedProject
        } 
      });
    }
  
    function handleDeleteProject(projectId){
      setProjects(prevProjects => {
        const projectsWithElementRemoved = {
            projects: prevProjects.projects.filter(project => project.id !== projectId),
            tasks: prevProjects.tasks.filter(task => task.projectId !== projectId),
            newProjectClicked: prevProjects.newProjectClicked,
            selectedProject: null,
          };

        return projectsWithElementRemoved;
      });
    }
  
    function handleSelectProject(projectId){
      if(projects.newProjectClicked){
        handleOnNewProjectState();
      }
      setProjects(prevProjects => {
        return{
          ...prevProjects,
          selectedProject: projectId
        }
      });
    }

    function handleAddTask(taskToAdd){
      setProjects(prevProjects => {
          return {
            projects: [...prevProjects.projects],
            tasks: prevProjects.tasks ? [...prevProjects.tasks, taskToAdd] : [taskToAdd],
            newProjectClicked: prevProjects.newProjectClicked,
            selectedProject: prevProjects.selectedProject
          }
        }
      );
    }
    
    function handleDeleteTask(taskId){
      setProjects(prevProjects => {
        const projectsWithElementRemoved ={
          projects: [...prevProjects.projects],
          tasks: prevProjects.tasks.filter(task => task.id !== taskId),
          newProjectClicked: prevProjects.newProjectClicked,
          selectedProject: prevProjects.selectedProject
        };
  
      return projectsWithElementRemoved;
      });
    }
  
    const projectCtxValue = {
        projects: projects,
        handleCreateProject: handleCreateProject,
        handleSelectProject: handleSelectProject,
        handleOnNewProjectState: handleOnNewProjectState,
        handleDeleteProject: handleDeleteProject,
        handleAddTask: handleAddTask,
        handleDeleteTask: handleDeleteTask
      }

    return <ProjectContext.Provider value={projectCtxValue}>
      <main className="flex flex-row">
        <SideBar/>

        <section className="flex justify-center w-2/3">
          {projects.newProjectClicked && <NewProject/>}
          
          {(!projects.newProjectClicked && !projects.selectedProject) && <NoProjectSelected/> }

          {(!projects.newProjectClicked && projects.selectedProject) && <SelectedProject/>}
        </section>
      </main>
    </ProjectContext.Provider>
} 