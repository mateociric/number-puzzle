import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/component/Auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class Header implements OnInit {
    userEmail: string = '';
    private userSub: Subscription;
    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        if (!this.authService.user.value) {
            this.router.navigate(['/Signin'])
        } else {
            this.userSub = this.authService.user.subscribe((user) => {
                this.userEmail = user.email;
            })
        }
    }
}