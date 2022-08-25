import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './puzzle/word/letter/letter.component';
import { WordComponent } from './puzzle/word/word.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardRowComponent } from './keyboard/keyboard-row/keyboard-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    WordComponent,
    PuzzleComponent,
    KeyboardComponent,
    KeyboardRowComponent
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
