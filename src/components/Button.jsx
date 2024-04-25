export default function Button({children, width,...props}){
    let className = "bg-indigo-300 text-indigo-900 hover:text-indigo-100 rounded-md ml-2 p-2";

    if(width){
        className += ` ${width}`;
    }

    return(
        <button {...props} className={className}>{children}</button>
    );
}