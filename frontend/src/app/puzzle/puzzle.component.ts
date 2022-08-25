import { Component, Input, OnInit } from '@angular/core';
import { PuzzleModel } from './puzzle.model';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {


  @Input() puzzle?: PuzzleModel

  constructor() {
  }

  ngOnInit(): void {

  }

}
