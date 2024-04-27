import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({children, buttonText, ...props}, ref) {
    const dialog = useRef();
    
    useImperativeHandle(ref, ()  =>{
        return{
            open() {
                dialog.current.showModal();
            }
        }
    });

    
    return createPortal(
        <dialog {...props} ref={dialog}>
            {children}
            <form method="dialog">
                <Button width='w-32'>{buttonText}</Button>
            </form>
        </dialog>,
        document.getElementById('div-modal')
    );  
});

export default Modal;