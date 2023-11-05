import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/enviroment/firebase.config';
import { PlayerLoginFormComponent } from './component/Player/player-login-form.component';
import { LoginPageComponent } from './page/LoginPage/login-page.component';
import { SignupPageComponent } from './page/SignupPage/signup-page.component';
import { GamePageComponent } from './page/GamePage/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerLoginFormComponent,
    LoginPageComponent,
    SignupPageComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
