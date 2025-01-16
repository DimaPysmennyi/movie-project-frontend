import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './Modal.css';

interface IModalProps{
    children: ReactNode,
    allowModalCloseOutside: boolean,
    onClose: () => void,
    container?: Element,
    className: string
}

export function Modal(props: IModalProps){
    let {children, allowModalCloseOutside, onClose, container=document.body, className} = props;
    function handleClickOutside(event: MouseEvent){
        if (modalRef.current != event.target && !modalRef.current?.contains(event.target as Node)){
            onClose();
        }
    }

    useEffect(() => {
        if (!allowModalCloseOutside){
            return;
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [])

    const modalRef = useRef<HTMLDivElement>(null);
    const classModal = "modal ";
    const classNames = classModal + className;

    return createPortal(
        <div ref = {modalRef} className={classNames}>{children}</div>,
        container
    )
}