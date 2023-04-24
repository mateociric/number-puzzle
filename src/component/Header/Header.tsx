import React from 'react';
import { useLocation } from 'react-router-dom';
import 'component/Header/Header.scss';

function Header() {
    const location = useLocation();
    let title = '';

    switch (location.pathname) {
        case '/':
            title = 'LOGIN';
            break;
        case '/Register':
            title = 'REGISTER';
            break;
        case '/PasswordRest':
            title = 'PASSWORD RESET';
            break;
        case '/Game':
            title = 'NUMBER PUZZLE';
            break;
    }

    return (
        <header className='header'>
            <h1 className='header__title'>{title}</h1>
        </header>
    )
}

export default Header;