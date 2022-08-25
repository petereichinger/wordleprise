export enum LetterState {
  Unsolved = 'btn-dark',
  Invalid = 'btn-secondary',
  WrongPosition = 'btn-warning',
  Correct = 'btn-success'
}

export class LetterModel {
  constructor(public state: LetterState, public letter?: string) {

  }
}
