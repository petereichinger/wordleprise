import { LetterModel, LetterState } from "./word/letter/letter.model";
import { WordModel } from "./word/word.model";

export class SolveModel {

  public get finished(): boolean { return this._currentWord >= this._tries.length; }

  private _tries: WordModel[] = [];
  private _nextWord: number = 0;
  private _currentWord: number = 0;

  public get tries(): WordModel[] {
    return this._tries.slice();
  }


  constructor(public word_length: number, num_tries: number) {
    for (let i = 0; i < num_tries; i++) {
      this._tries.push(new WordModel(this.generate_letter_model_array()));
    }
  }

  generate_letter_model_array(): LetterModel[] {
    return new Array(this.word_length).fill(new LetterModel(LetterState.Unsolved));
  }

  nextWord() {

    this._tries[this._currentWord].setCurrent(false);

    this._currentWord = this._nextWord;

    if (this.finished) {
      return;
    }

    this._tries[this._currentWord].setCurrent(true);

    this._nextWord++;
  }
}
