import { LetterModel, LetterState } from "./letter/letter.model";

export class WordModel {

  public current: boolean = false;
  public index: number = 0;
  private _letters: LetterModel[] = [];

  public get letters(): LetterModel[] {
    return this._letters.slice();
  }

  private get currentLetter(): LetterModel {
    return this._letters[this.index];
  }

  constructor(letters: LetterModel[]) {
    this._letters = letters.slice()
  }

  setCurrent(current: boolean) {
    this.current = current;
  }

  validIndex(): boolean {
    return this.index >= 0 && this.index < this.letters.length;
  }

  enterLetter(letter: string) {
    if (!this.validIndex()) {
      return;
    }
    this.currentLetter.letter = letter;
    this.index = Math.min(this.index + 1, this._letters.length - 1)
  }

  removeLetter() {
    if (!this.validIndex()) {
      return;
    }

    this.currentLetter.letter = undefined;
    this.index = Math.max(this.index - 1, 0);
  }
}
