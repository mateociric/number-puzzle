import React from 'react';
import { useLocation } from 'react-router-dom';
import 'component/Header/Header.scss';
import getHeaderTitle from './utility/get-header-title';

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <h1 className='header__title'>{getHeaderTitle(location.pathname)}</h1>
        </header>
    )
}

export default Header;