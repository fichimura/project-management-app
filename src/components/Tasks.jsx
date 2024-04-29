import Button from "./Button";
import NewTask from "./NewTask";

export default function Tasks({onAddTask, onDeleteTask }){
    return(
        <div className="flex flex-col justify-between border-s-4 border-indigo-900 p-24">
            <h2 className="text-4xl text-indigo-400 mb-12">Tasks</h2>
            <Button>New Task</Button>
            <p className="my-8">This project does not have tasks.</p>

            <NewTask onAdd={onAddTask}/>
        </div>

    );
}