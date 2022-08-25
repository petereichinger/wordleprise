import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardService } from './keyboard/keyboard.service';
import { SolveModel } from './solve/solve.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private returnSub: Subscription;
  private letterSub: Subscription;
  private backspaceSub: Subscription;

  constructor(private keyboardService: KeyboardService) {
    this.returnSub = this.keyboardService.returnClicked.subscribe(() => {
      this.solve.nextWord();
    });

    this.backspaceSub = this.keyboardService.backspaceClicked.subscribe(() => {
      this.solve.removeLetter();
    });

    this.letterSub = this.keyboardService.letterClicked.subscribe((letter) => {
      this.solve.enterLetter(letter);
    });
  }
  ngOnDestroy(): void {
    this.returnSub.unsubscribe();
    this.backspaceSub.unsubscribe();
    this.letterSub.unsubscribe();
  }

  solve: SolveModel = new SolveModel(this.keyboardService, 5, 6);

  ngOnInit(): void {
    this.solve.nextWord();
  }
}
