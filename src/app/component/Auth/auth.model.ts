export type TAuthResponseData = {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean,
}

export type TAuthResponseError = {
    message: string
}