import { Injectable } from "@angular/core";
import { PuzzleProviderService } from "./puzzleProvider.service";
import { LetterState } from "./word/letter/letter.model";

@Injectable({ providedIn: 'root' })
export class PuzzleService {

  constructor(puzzleProvider: PuzzleProviderService) {
    this.puzzles = puzzleProvider.providePuzzles();
  }

  puzzles: string[];

  check(id: number, solution: string): LetterState[] | undefined {

    // TODO MOVE TO BACKEND

    const puzzle = this.puzzles[id % this.puzzles.length];

    if (puzzle.length !== solution.length) {
      return undefined;
    }

    const puzzle_chars = puzzle.split('');
    const sol_chars = solution.split('');

    const states = new Array<LetterState>(puzzle.length).fill(LetterState.Invalid);


    for (let i = 0; i < puzzle_chars.length; i++) {
      const puzzle = puzzle_chars[i];
      const sol = sol_chars[i];

      if (puzzle === sol) {
        sol_chars[i] = '';
        puzzle_chars[i] = '';
        states[i] = LetterState.Correct;
      }
    }

    for (let i = 0; i < puzzle_chars.length; i++) {
      const sol = sol_chars[i];

      if (sol === '') {
        continue;
      }

      const foundIndex = puzzle_chars.findIndex(val => val === sol);

      if (foundIndex != -1) {
        puzzle_chars[foundIndex] = '';
        states[i] = LetterState.WrongPosition;
      } else {
        states[i] = LetterState.Invalid;
      }
    }


    return states;
  }
}
