export default function Button({children}){
    let className = "bg-indigo-300 text-indigo-900 hover:text-indigo-100 rounded-md ml-2 p-2";
    return(
        <button className={className}>{children}</button>
    );
}