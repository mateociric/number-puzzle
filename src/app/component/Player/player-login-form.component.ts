import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'player-login-form',
    templateUrl: './player-login-form.component.html',
    styleUrls: ['./player-login-form.component.css']
})

export class PlayerLoginFormComponent implements OnInit {
    title: string = '';
    btnText: string = '';
    link: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
        this.route.url.subscribe(pathname => {
            const currPathname = pathname.join('');
            if (currPathname === 'Login') {
                this.title = 'Login';
                this.btnText = 'LOGIN';
                this.link = "Don't have account? Signup";
            } else {
                this.title = 'Signup';
                this.btnText = 'SIGNUP';
                this.link = 'Back to login';
            }
        });
    }
    onRedirect() {
        this.link === "Don't have account? Signup" ? this.router.navigate(['/Signup']) : this.router.navigate(['/Login']);
    }
    onSignup(email: string, password: string) {
        this.afAuth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log('OK');
            })
            .catch(error => {
                console.log('WRONG');
            })
    }
    onLogin(email: string, password: string) {
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log('OK');
            })
            .catch(error => {
                console.log('WRONG');
            })
    }

}