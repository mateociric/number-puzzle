import React from 'react';
import 'component/Modal/Overlay.scss';

function Overlay(props: {msg: string}) {
    return (
        <div className='overlay fixed-center'>
            <h1>LOGIN ERROR</h1>
            <p>{props.msg}</p>
            <button>OK</button>
        </div>
    )
}

export default Overlay;