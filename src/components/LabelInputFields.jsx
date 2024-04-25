export default function LabelInputFields({isTextArea, label,...props}){
    let textClass = 'p-3';
    
    return(
        <>
            <label className="text-indigo-900 text-xl">{label}</label>
            {isTextArea ? <textarea className={textClass} {...props}></textarea> : <input className={textClass} {...props}></input>  }
        </>
    );
}