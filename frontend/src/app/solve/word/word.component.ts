import { Component, Input, OnInit } from '@angular/core';
import { WordModel } from './word.model';
import { WordService } from './word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  providers: [WordService]
})
export class WordComponent implements OnInit {

  @Input() model?: WordModel

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    if (!this.model) {
      console.error("please set wordmodel")
    }
  }

  // getLetterState(): LetterState {
  //   return LetterState.Enabled;
  // }
}
