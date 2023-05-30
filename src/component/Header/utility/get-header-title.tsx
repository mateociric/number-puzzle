function getHeaderTitle(pathname: string) {
    switch (pathname) {
        case '/':
            return 'LOGIN';
        case '/Register':
            return 'REGISTER';
        case '/PasswordRecovery':
            return 'PASSWORD RECOVERY';
        case '/Game':
            return 'NUMBER PUZZLE';
        default:
            return '';
    }
}

export default getHeaderTitle;