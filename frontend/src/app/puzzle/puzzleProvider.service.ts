import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PuzzleProviderService {
  providePuzzles(): string[] {
    return ['alive', 'burnt', 'offer'];
  }
}
