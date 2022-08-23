import { Component, Input, OnInit } from '@angular/core';
import { LetterState } from './letter/letter-state.model';
import { WordService } from './word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  providers: [WordService]
})
export class WordComponent implements OnInit {

  @Input() characters : number = 0

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
  }

  getLetterState() : LetterState {
    return LetterState.Enabled;
  }
}
