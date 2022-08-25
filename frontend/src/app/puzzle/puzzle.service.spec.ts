import { TestBed } from "@angular/core/testing";
import { PuzzleService } from "./puzzle.service"
import { PuzzleProviderService } from "./puzzleProvider.service";
import { LetterState } from "./word/letter/letter.model";

class MockPuzzleProvider {
  providePuzzles(): string[] {
    return ['crane', 'offer'];
  }
}

describe('PuzzleService', () => {

  let service: PuzzleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PuzzleProviderService, useClass: MockPuzzleProvider }
      ]
    });
    service = TestBed.inject(PuzzleService);
  });

  it('should create', () => {
    expect(service).toBeDefined()
  })
  it('should reject invalid solution length', () => {
    let response = service?.check(0, '');
    expect(response).toBeUndefined();
  })
  it('should accept correct solution length', () => {
    let response = service?.check(0, 'aaaaa');
    expect(response).toBeDefined();
  })
  it('should identify correct solution', () => {
    let response = service?.check(0, 'crane');
    expect(response).toBeDefined();

    response?.forEach((s) => {
      expect(s).toBe(LetterState.Correct);
    })
  })

  it('should identify correct solution', () => {
    let response = service?.check(0, 'spoil');
    expect(response).toBeDefined();

    response?.forEach((s) => {
      expect(s).toBe(LetterState.Invalid);
    })
  })

  it('should identify correct letters', () => {
    let response = service?.check(0, 'crate');
    expect(response).toBeDefined();

    expect(response).toEqual([LetterState.Correct, LetterState.Correct, LetterState.Correct, LetterState.Invalid, LetterState.Correct]);
  })

  it('should identify wrong positions', () => {
    let response = service?.check(0, 'nasty');
    expect(response).toBeDefined();

    expect(response).toEqual([LetterState.WrongPosition, LetterState.WrongPosition, LetterState.Invalid, LetterState.Invalid, LetterState.Invalid]);
  })

  it('should correctly handle duplicate solution letters', () => {
    let response = service?.check(0, 'crack');
    expect(response).toBeDefined();

    expect(response).toEqual([LetterState.Correct, LetterState.Correct, LetterState.Correct, LetterState.Invalid, LetterState.Invalid]);
  })

  it('should correctly handle duplicate letters', () => {
    let response = service?.check(1, 'floof');
    expect(response).toBeDefined();

    expect(response).toEqual([LetterState.WrongPosition, LetterState.Invalid, LetterState.WrongPosition, LetterState.Invalid, LetterState.WrongPosition]);
  })
})
