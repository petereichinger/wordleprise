import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './solve/word/letter/letter.component';
import { WordComponent } from './solve/word/word.component';
import { SolveComponent } from './solve/solve.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    WordComponent,
    SolveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
