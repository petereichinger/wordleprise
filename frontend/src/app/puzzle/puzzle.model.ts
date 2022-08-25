import { KeyboardService } from "../keyboard/keyboard.service";
import { LetterModel, LetterState } from "./word/letter/letter.model";
import { WordModel } from "./word/word.model";

export class PuzzleModel {

  public get finished(): boolean { return this._currentWord >= this._tries.length; }

  private _tries: WordModel[] = [];
  private _nextWord: number = 0;
  private _currentWord: number = 0;

  public get tries(): WordModel[] {
    return this._tries.slice();
  }

  private get current(): WordModel {
    return this._tries[this._currentWord];
  }

  constructor(private keyboardService: KeyboardService, public word_length: number, num_tries: number) {
    for (let i = 0; i < num_tries; i++) {
      this._tries.push(new WordModel(this.generate_letter_model_array()));
    }
  }

  generate_letter_model_array(): LetterModel[] {
    const array = [];

    for (let i = 0; i < this.word_length; ++i) {
      array.push(new LetterModel(LetterState.Unsolved))
    }

    return array;
  }

  nextWord() {
    this.current.setCurrent(false);

    this._currentWord = this._nextWord;

    if (this.finished) {
      this.keyboardService.setEnabled(false);
      return;
    }

    this.current.setCurrent(true);

    this._nextWord++;
  }

  enterLetter(letter: string) {
    this.current.enterLetter(letter);
  }
  removeLetter() {
    this.current.removeLetter();
  }
}
