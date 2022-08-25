import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class KeyboardService {

  private _enabled = true;
  private _returnEnabled = false;
  private _backspaceEnabled = false;

  public get enabled(): boolean { return this._enabled; }
  public get returnEnabled(): boolean { return this._returnEnabled; }
  public get backspaceEnabled(): boolean { return this._backspaceEnabled; }

  public letterClicked: Subject<string> = new Subject();
  public returnClicked: Subject<void> = new Subject();
  public backspaceClicked: Subject<void> = new Subject();

  clickLetter(key: string) {
    console.log(key);
    if (key.length != 1) {
      console.error("Can only click single letters");
      return;
    }

    this.letterClicked.next(key);
  }

  clickReturn() {
    console.log('return');
    this.returnClicked.next();
  }
  clickBackspace() {
    console.log('backspace');
    this.backspaceClicked.next();
  }

  setEnabled(enable: boolean) {
    this._enabled = enable;
  }

  setReturnEnabled(enable: boolean) {
    this._returnEnabled = enable;
  }

  setBackspaceEnabled(enable: boolean) {
    this._backspaceEnabled = enable;
  }
}
