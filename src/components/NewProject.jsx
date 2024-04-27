import { useRef } from "react"
import Button from "./Button"
import LabelInputFields from "./LabelInputFields"
import Modal from "./Modal";

export default function NewProject({onCancelClicked, onCreateClicked}){
    const modal = useRef();
    const nameField  = useRef();
    const descriptionField  = useRef();
    const dueDateField  = useRef();
    
    return(
        <>
            <Modal className="backdrop: p-28" ref={modal} buttonText='Close' >
                <h1 className="font-bold text-xl text-indigo-900 py-5">Error during the creation of the project</h1>
                <p className="text-lg text-indigo-900 py-5">It looks like you forgot to fill one of the fields</p>
            </Modal>
            
            <div className="flex flex-col ml-32 mt-24">
                <LabelInputFields ref={nameField} label='Project name' isTextArea={false}  />
                <LabelInputFields ref={descriptionField} label='Description' isTextArea={true} cols={50} rows={5}/>
                <LabelInputFields ref={dueDateField} label='Due date' isTextArea={false}  type='date'/>

                <div className="h- flex flex-row justify-between mt-8">
                    <Button width='w-48' onClick={
                        () =>{
                            if(nameField.current.value.trim() === '' || descriptionField.current.value.trim() === '' || dueDateField.current.value.trim() === ''){
                                modal.current.open();
                            }else{     
                                onCreateClicked(nameField.current.value, descriptionField.current.value, dueDateField.current.value)
                            }
                        }
                    }>
                        Create
                    </Button>
                    <Button width='w-48' onClick={onCancelClicked}>Cancel</Button>
                </div>
            </div>
        </>
    )
}