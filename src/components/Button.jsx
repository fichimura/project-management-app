export default function Button({children, width, isListItem, ...props}){
    let className = " rounded-md ml-2 p-2";

    if(width){
        className += ` ${width}`;
    }
    if(isListItem){
        className += ' bg-indigo-500 text-indigo-100 hover:text-indigo-900'
    }else{
        className += ' bg-indigo-300 text-indigo-900 hover:text-indigo-100'
    }

    return(
        <button {...props} className={className}>{children}</button>
    );
}