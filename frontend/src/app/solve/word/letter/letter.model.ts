export enum LetterState {
  // Enabled = 'btn-light',
  // Disabled = 'btn-secondary',
  Unsolved = 'btn-dark',
  Invalid = 'btn-danger',
  WrongPosition = 'btn-warning',
  Correct = 'btn-success'
}

export class LetterModel {
  constructor(public state: LetterState, public letter?: string) {

  }
}
