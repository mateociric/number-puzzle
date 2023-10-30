import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginPageComponent } from "./page/LoginPage/login-page.component";
import { SignupPageComponent } from "./page/SignupPage/signup-page.component";
import { GamePageComponent } from "./page/GamePage/game-page.component";

const appRoutes: Routes = [
    { path: 'Login', component: LoginPageComponent },
    { path: 'Signup', component: SignupPageComponent },
    { path: 'Game', component: GamePageComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {

}