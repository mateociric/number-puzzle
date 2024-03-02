import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { Auth } from './component/Auth/auth.component';
import { SigninPageComponent } from './page/SigninPage/signin-page.component';
import { SignupPageComponent } from './page/SignupPage/signup-page.component';
import { GamePageComponent } from './page/GamePage/game-page.component';
import { Header } from './component/Header/header.component';
import { PuzzleTable } from './component/PuzzleTable/puzzle-table.component';
import { SinglePuzzle } from './component/PuzzleTable/SinglePuzzel/single-puzzle.component';
import { CreatePuzzles } from './component/CreatePuzzles/create-puzzles.component';

@NgModule({
  declarations: [
    AppComponent,
    Auth,
    Header,
    PuzzleTable,
    SinglePuzzle,
    CreatePuzzles,
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
