import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordService } from '../word.service';
import { LetterModel, LetterState } from './letter.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {


  @Input() current: boolean = false;
  @Input() model?: LetterModel;


  ngOnInit(): void {
    if (!this.model) {
      console.error("Please set model");
    }
  }

  getButtonText(): string {
    return this?.model?.letter ?? ' ';
  }

  getStateClass(): string {
    return this.model?.state ?? ''
  }

  getIsDisabled(): boolean {
    return !this.current;
  }


  // constructor(private wordService: WordService) {

  //   this.letterChangedSubscription = wordService.letterChanged.subscribe(({ index, letter }) => {
  //     console.log(index);
  //     let index_offset = -1;
  //     if (letter.length === 0) {
  //       index_offset = 1;
  //     }

  //     if (index === (this.index + index_offset)) {
  //       this.letterInput?.nativeElement.focus();
  //     }
  //   })
  // }

  // letterChangedSubscription: Subscription

  // @ViewChild('letterInput', { static: false }) letterInput: ElementRef | null = null;
  // @Input() letter?: LetterModel;
  // @Input() index: number = 0;

  // OnInput(event: Event) {
  //   if (!this.letter) {
  //     return;
  //   }
  //   const upperCaseLetter = this.letter?.letter.toUpperCase();

  //   if (upperCaseLetter != this.letter.letter) {
  //     this.letter.letter = upperCaseLetter;
  //   }
  // }

  // EnsureUpperCaseLetter(letter: string) {

  // }

  // OnKeyPress(event: KeyboardEvent): boolean {
  //   return !!event.key.match("^[A-Za-z]$")
  // }

  // OnKeyUp(event: KeyboardEvent): boolean {
  //   if (!this.letter) {
  //     return false;
  //   }
  //   if (this.letter.letter === '' && event.key === 'Backspace') {
  //     this.wordService.setLetter(this.index, '');
  //     return true;
  //   }

  //   if (!event.key.match("^[A-Za-z]$")) {
  //     return false;
  //   }

  //   const upperCaseLetter = event.key.toUpperCase();

  //   if (upperCaseLetter !== this.letter.letter) {
  //     this.letter.letter = upperCaseLetter;
  //   }


  //   this.wordService.setLetter(this.index, this.letter)

  //   return true;
  // }

  // /**
  //  * Get if this element should be disabled. It should be disabled when the letter is used for displaying results.
  //  * @returns True if the letter should be disabled, false otherwise.
  //  */
  // getIsDisabled(): boolean {
  //   return this.state !== LetterState.Enabled;
  // }
}
