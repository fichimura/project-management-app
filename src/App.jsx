import { useState } from "react"
import NewProject from "./components/NewProject"
import SideBar from "./components/SideBar"

function App() {
  const [newProjectClicked, setNewProjectClicked] = useState(false);
  
  function handleOnNewProjectState() {
    setNewProjectClicked(prevValue => !prevValue);
  }

  console.log(newProjectClicked);

  return (
    <main className="flex flex-row">
    <SideBar onCreateProjectClicked={handleOnNewProjectState}/>
    {newProjectClicked && <NewProject onCancelClicked={handleOnNewProjectState}/>}
    </main>
  )
}

export default App
