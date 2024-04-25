import { forwardRef, useState } from "react";


 const LabelInputFields = forwardRef(function LabelInputFields({isTextArea, label,...props}, ref){
    let textClass = 'p-3';
    const [text, setText] = useState('');

    function handleTextChange(evt){
        setText(evt.target.value);
    }

    return(
        <>
            <label className="text-indigo-900 text-xl">{label}</label>
            {isTextArea ? <textarea ref={ref} value={text} onChange={handleTextChange} className={textClass} {...props}></textarea> : <input ref={ref} className={textClass} {...props}></input>  }
        </>
    );
})

export default LabelInputFields;