import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'player-login-form',
    templateUrl: './player-login-form.component.html',
    styleUrls: ['./player-login-form.component.css']
})

export class PlayerLoginFormComponent implements OnInit {
    title: string = '';
    btnText: string = '';
    link: string = '';

    constructor(private route: ActivatedRoute, private router: Router) {

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

}