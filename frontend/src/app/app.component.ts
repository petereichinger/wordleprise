import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardService } from './keyboard/keyboard.service';
import { PuzzleModel } from './puzzle/puzzle.model';
import { PuzzleService } from './puzzle/puzzle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private returnSub: Subscription;
  private letterSub: Subscription;
  private backspaceSub: Subscription;

  constructor(private puzzleService: PuzzleService, private keyboardService: KeyboardService) {
    this.returnSub = this.keyboardService.returnClicked.subscribe(() => {
      this.puzzle.nextWord();
    });

    this.backspaceSub = this.keyboardService.backspaceClicked.subscribe(() => {
      this.puzzle.removeLetter();
    });

    this.letterSub = this.keyboardService.letterClicked.subscribe((letter) => {
      this.puzzle.enterLetter(letter);
    });
  }
  ngOnDestroy(): void {
    this.returnSub.unsubscribe();
    this.backspaceSub.unsubscribe();
    this.letterSub.unsubscribe();
  }

  puzzle: PuzzleModel = new PuzzleModel(this.puzzleService, this.keyboardService, 5, 6);

  ngOnInit(): void {
    this.puzzle.begin();
  }
}
