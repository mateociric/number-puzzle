import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { TAuthResponseData } from "./auth.model";
import { throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private urlSignup: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtYOvpeUQPxXNAttmbM2oC_2S2lN5D-30';
    private urlSignin: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtYOvpeUQPxXNAttmbM2oC_2S2lN5D-30';

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http
            .post<TAuthResponseData>(this.urlSignup, {
                email,
                password,
                returnSecureToken: true
            })
    }
    signIn(email: string, password: string) {
        return this.http
            .post<TAuthResponseData>(this.urlSignin, {
                email,
                password,
                returnSecureToken: true,
            })
    }
    onHandleError(errorRes: HttpErrorResponse, isSignin: boolean) {
        let errorMsg = `An error occurred during sign ${isSignin ? 'in' : 'up'}.`;
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => errorMsg);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMsg = 'This email address is already used.'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMsg = 'Wrong email address or password.';
                break;
        }
        console.log(errorMsg);
        return throwError(() => errorMsg);
    }
}