import { Component, OnInit, Type } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})

export class Auth implements OnInit {
    isSignin = true;

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        this.route.url.subscribe(pathname => {
            const currPathname = pathname.join('');
            if (currPathname === 'Signin') {
                this.isSignin = true
            } else {
                this.isSignin = false
            }
        });
    }

    onRedirect() {
        this.isSignin ? this.router.navigate(['/Signup']) : this.router.navigate(['/Signin']);
    }
    onSubmit(authForm: NgForm) {
        if (!authForm.valid) {
            return
        }
        const email = authForm.value.email;
        const password = authForm.value.password;
        if (this.isSignin) {
            this.authService.signIn(email, password).subscribe({
                next: (resData) => console.log(resData),
                error: (errorRes) => this.authService.onHandleError(errorRes, this.isSignin),
            })
        } else {
            this.authService.signUp(email, password).subscribe({
                next: (resData) => console.log(resData),
                error: (errorRes) => this.authService.onHandleError(errorRes, this.isSignin),
            })
        }
        authForm.reset();
    }
}