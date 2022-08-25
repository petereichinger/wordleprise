import { LetterModel, LetterState } from "./letter/letter.model";

export class WordModel {

  public current: boolean = false;
  public index: number = 0;
  private _letters: LetterModel[] = [];

  public get letters(): LetterModel[] {
    return this._letters.slice();
  }

  public get solution(): string | undefined {
    return this._letters.every(l => l.letter) ? this._letters.map(l => l.letter).join('') : undefined
  }

  private get currentLetter(): LetterModel | undefined {
    return this.validIndex() ? this._letters[this.index] : undefined;
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
    if (!this.currentLetter) {
      return;
    }
    this.currentLetter.letter = letter;
    this.index = Math.min(this.index + 1, this._letters.length - 1)
  }

  removeLetter() {

    if (!this.currentLetter) {
      return;
    }

    if (!this.currentLetter.letter) {
      this.index = Math.max(this.index - 1, 0);
    }
    this._letters[this.index].letter = undefined;
  }
}
