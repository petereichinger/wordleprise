import { LetterModel, LetterState } from "./letter/letter.model";

export class WordModel {

  public current: boolean = false;

  private _letters: LetterModel[] = [];

  public get letters(): LetterModel[] {
    return this._letters.slice();
  }

  constructor(letters: LetterModel[]) {
    this._letters = letters.slice()
  }

  setCurrent(current: boolean) {
    this.current = current;
  }
}
