import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";



@Injectable()
export class WordService {

  public letterChanged: Subject<{ index: number, letter: string }> = new Subject();

  public word: (String | null)[] = [null, null, null, null, null];

  public setLetter(index: number, letter: string) {
    console.log(index, letter);

    if (letter.length > 1) {
      console.error("Trying to set multiple characters at index %d", index)
      return;
    }

    if (index >= this.word.length) {
      console.error("Trying to set at index %d", index)
      return;
    }

    this.word[index] = letter;

    this.letterChanged.next({ index, letter });
  }
}
