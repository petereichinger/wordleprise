import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordService } from '../word.service';
import { LetterState } from './letter-state.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  constructor(private wordService: WordService) { }

  @Input() state: LetterState = LetterState.Enabled;
  @Input() index: number = 0;

  letter: string = "";

  ngOnInit(): void {
  }

  OnInput(event: Event) {
    const upperCaseLetter = this.letter.toUpperCase();

    if (upperCaseLetter != this.letter) {
      this.letter = upperCaseLetter;
    }

    this.wordService.setLetter(this.index, this.letter);
  }

  /**
   * Event called when new text is entered in the input. Allows only alphabetical characters to be entered
   * @param event EventParams
   * @returns True if letter can be entered, false otherwise.
   */
  OnKeyPress(event: KeyboardEvent): boolean {
    return !!event.key.match("[A-Za-z]")
  }

  /**
   * Get if this element should be disabled. It should be disabled when the letter is used for displaying results.
   * @returns True if the letter should be disabled, false otherwise.
   */
  getIsDisabled(): boolean {
    return this.state !== LetterState.Enabled;
  }
}
