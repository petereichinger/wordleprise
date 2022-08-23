import { Injectable } from "@angular/core";

@Injectable()
export class WordService {

  public setLetter(index: number, character: string) {
    console.log(index, character);
  }
}
