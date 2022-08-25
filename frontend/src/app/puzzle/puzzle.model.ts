import { KeyboardService } from "../keyboard/keyboard.service";
import { PuzzleService } from "./puzzle.service";
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

  constructor(private puzzleService: PuzzleService, private keyboardService: KeyboardService, public word_length: number, num_tries: number) {
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

  begin() {
    this._currentWord = 0;
    this._nextWord = 1;

    this.current.setCurrent(true);
    this.updateKeyboardState();
  }

  nextWord() {
    this.current.setCurrent(false);

    const newStates = this.puzzleService.check(0, this.current.solution!);

    if (!newStates) {
      return;
    }

    const solved = newStates.every(s => s === LetterState.Correct);

    for (let i = 0; i < newStates.length; i++) {
      this.current.letters[i].state = newStates[i];
    }

    if (solved) {
      this.solved();
      return;
    }

    this._currentWord = this._nextWord;

    if (this.finished) {
      this.keyboardService.setEnabled(false);
      return;
    }

    this.current.setCurrent(true);
    this.updateKeyboardState();
    this._nextWord++;
  }

  solved() {
    this.keyboardService.setEnabled(false);
  }

  private updateKeyboardState() {
    this.keyboardService.setReturnEnabled(this.current.letters.every(l => !!l.letter));
    this.keyboardService.setBackspaceEnabled(
      this.current.index > 0 ||
      !!this.current.letters[this.current.index].letter);
  }

  enterLetter(letter: string) {
    this.current.enterLetter(letter);
    this.updateKeyboardState();
  }
  removeLetter() {
    this.current.removeLetter();
    this.updateKeyboardState();
  }
}
