import Button from "./Button";

export default function SideBar(){
    return(
        <aside className="w-64 bg-indigo-900 h-screen mt-32 rounded-md">
            <h1 className="text-2xl ml-2 mb-3 text-indigo-100">Projects</h1>
            <Button>New project</Button> 
     </aside>
    );
}