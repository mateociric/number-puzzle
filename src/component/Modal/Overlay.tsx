import 'component/Modal/Overlay.scss';
import { NavLink } from 'react-router-dom';
import TModalParams from 'page/model/modal-params';

function Overlay(props: { onClick: Function, modalParams: TModalParams }) {

    return (
        <div className='overlay fixed-center'>
            <h1>{props.modalParams['title']}</h1>
            <p>{props.modalParams['message']}</p>
            <button onClick={() => props.onClick()}>OK</button>
            <NavLink to={props.modalParams['navLinkPath']} state={{userName: props.modalParams.userName, truePassword: props.modalParams.truePassword}} > { props.modalParams['navLinkText'] }</NavLink>
        </div >
    )
}

export default Overlay;