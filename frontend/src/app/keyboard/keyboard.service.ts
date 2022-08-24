import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class KeyboardService {

  public keyClicked: Subject<string> = new Subject();

  clickLetter(key: string) {
    console.log(key);
    if (key.length != 1) {
      console.error("Can only click single letters");
      return;
    }

    this.keyClicked.next(key);
  }

  clickReturn() {
    console.log('return');

  }
  clickBackspace() {
    console.log('backspace');
  }
}
