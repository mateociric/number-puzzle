import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SigninPageComponent } from "./page/SigninPage/signin-page.component";
import { SignupPageComponent } from "./page/SignupPage/signup-page.component";
import { GamePageComponent } from "./page/GamePage/game-page.component";

const appRoutes: Routes = [
    { path: 'Signin', component: SigninPageComponent },
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