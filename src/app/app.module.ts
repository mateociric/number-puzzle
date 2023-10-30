import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './component/User/user-form.component';
import { LoginPageComponent } from './page/LoginPage/login-page.component';
import { SignupPageComponent } from './page/SignupPage/signup-page.component';
import { GamePageComponent } from './page/GamePage/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoginPageComponent,
    SignupPageComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
