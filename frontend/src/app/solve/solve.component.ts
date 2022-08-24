import { Component, Input, OnInit } from '@angular/core';
import { SolveModel } from './solve.model';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {


  @Input() solve?: SolveModel

  constructor() {
  }

  ngOnInit(): void {

  }
}
