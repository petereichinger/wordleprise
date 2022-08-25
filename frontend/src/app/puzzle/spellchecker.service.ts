import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SpellChecker {


  isCorrect(word: string): boolean {
    return true;
  }
}
