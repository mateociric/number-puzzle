import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //da bi se izbjegla greška 'NULL injector ...' mora se u app.module.ts import HttpClientModule. Ova greška se javlja kad se koristi HttpClient u drugim component. 
import { Auth } from './component/Auth/auth.component';
import { SigninPageComponent } from './page/SigninPage/signin-page.component';
import { SignupPageComponent } from './page/SignupPage/signup-page.component';
import { GamePageComponent } from './page/GamePage/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Auth,
    SigninPageComponent,
    SignupPageComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
