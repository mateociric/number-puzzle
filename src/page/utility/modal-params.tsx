import TModalParams from 'page/model/modal-params';

const initial: TModalParams = {
    title: '',
    message: '',
    navLinkPath: '',
    navLinkText: '',
}

const loginError: TModalParams = {
    title: 'LOGIN ERROR',
    message: 'User don\'t exists.',
    navLinkPath: '/Register',
    navLinkText: 'don\'t have account?',
}

const fetchError: TModalParams = {
    title: 'ERROR',
    message: 'Something went wrong. Please try again.',
    navLinkPath: '',
    navLinkText: '',
}

export { initial, loginError, fetchError };