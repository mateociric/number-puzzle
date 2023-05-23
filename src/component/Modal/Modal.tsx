import ReactDOM from 'react-dom';
import Backdrop from 'component/Modal/Backdrop';
import Overlay from 'component/Modal/Overlay';
import TModalParams from 'page/model/modal-params';

function Modal(props: { modalParams: TModalParams, onClick: Function }) {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, (document.getElementById('backdrop-root') as HTMLElement))}
            {ReactDOM.createPortal(<Overlay onClick={props.onClick} modalParams={props.modalParams} />, (document.getElementById('overlay-root') as HTMLElement))}
        </>
    )
}

export default Modal;