import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {


  @Input() enabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
