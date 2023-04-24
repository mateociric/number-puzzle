import React from 'react';
import 'component/Modal/Overlay.scss';
import { NavLink } from 'react-router-dom';

function Overlay(props: { msg: string, onClick: Function }) {
    return (
        <div className='overlay fixed-center'>
            <h1>LOGIN ERROR</h1>
            <p>{props.msg}</p>
            <button onClick={() => props.onClick()}>OK</button>
            <NavLink to='PasswordRest'>forgot password?</NavLink>
        </div>
    )
}

export default Overlay;