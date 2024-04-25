import { useRef } from "react"
import Button from "./Button"
import LabelInputFields from "./LabelInputFields"

export default function NewProject({onCancelClicked, onCreateClicked}){
    const nameField  = useRef();
    const descriptionField  = useRef();
    const dueDateField  = useRef();
    
    return(
        <div className="flex flex-col ml-32 mt-24">
            <LabelInputFields ref={nameField} label='Project name' isTextArea={false}  />
            <LabelInputFields ref={descriptionField} label='Description' isTextArea={true} cols={50} rows={5}/>
            <LabelInputFields ref={dueDateField} label='Due date' isTextArea={false}  type='date'/>

            <div className="h- flex flex-row justify-between mt-8">
                <Button width='w-48' onClick={() => onCreateClicked(nameField.current.value, descriptionField.current.value, dueDateField.current.value)}>Create</Button>
                <Button width='w-48' onClick={onCancelClicked}>Cancel</Button>
            </div>
        </div>
    )
}