import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { TAuthResponseData, TAuthResponseError } from "./auth.model";
import { throwError } from "rxjs";
import { User } from "./user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private urlSignup: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtYOvpeUQPxXNAttmbM2oC_2S2lN5D-30';
    private urlSignin: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtYOvpeUQPxXNAttmbM2oC_2S2lN5D-30';
    user = new BehaviorSubject<User>(null)
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
    onHandleError(errorRes: HttpErrorResponse, isSignin: boolean, authResError: TAuthResponseError) {
        authResError.message = `An error occurred during sign ${isSignin ? 'in' : 'up'}.`;
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => authResError.message);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                authResError.message = 'This email address is already used.'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                authResError.message = 'Wrong email address or password.';
                break;
        }
        return throwError(() => authResError.message);
    }
    onHandleAuth(email: string) {
        const user = new User(email);
        this.user.next(user);
    }
}