import { Component, OnInit } from '@angular/core';
import { SolveModel } from './solve/solve.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  solve: SolveModel = new SolveModel(5, 6);


  ngOnInit(): void {
    this.solve.nextWord();
  }

  OnClick() {
    this.solve.nextWord();
  }

  CanSubmit(): boolean {
    return !this.solve.finished;
  }
}
