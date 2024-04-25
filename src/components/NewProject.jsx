import Button from "./Button"
import LabelInputFields from "./LabelInputFields"

export default function NewProject({onCancelClicked}){

    return(
        <div className="flex flex-col ml-20 mt-24">
            <LabelInputFields label='Project name' isTextArea={false}  />
            <LabelInputFields label='Description' isTextArea={true} cols={70} rows={5}/>
            <LabelInputFields label='Due date' isTextArea={false}  type='date'/>

            <div className="h- flex flex-row justify-between mt-8">
                <Button width='w-48'>Create</Button>
                <Button width='w-48' onClick={onCancelClicked}>Cancel</Button>
            </div>
        </div>
    )
}