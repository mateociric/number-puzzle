import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from 'component/Modal/Backdrop';
import Overlay from 'component/Modal/Overlay';

function Modal(props: { onClick: Function, msg: string }) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={() => props.onClick()} />, (document.getElementById('backdrop-root') as HTMLElement))}
            {ReactDOM.createPortal(<Overlay msg={props.msg} onClick={props.onClick} />, (document.getElementById('overlay-root') as HTMLElement))}
        </>
    )
}

export default Modal;