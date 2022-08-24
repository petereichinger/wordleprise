import { Component, Input, OnInit } from '@angular/core';
import { KeyboardService } from '../keyboard.service';

@Component({
  selector: 'app-keyboard-row',
  templateUrl: './keyboard-row.component.html',
  styleUrls: ['./keyboard-row.component.css']
})
export class KeyboardRowComponent implements OnInit {

  @Input() keys?: string

  @Input() enterButton = false;
  @Input() backspaceButton = false;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
  }

  OnClick(key: string) {
    this.keyboardService.clickLetter(key);
  }

  OnReturn() {
    this.keyboardService.clickReturn();
  }

  OnBackspace() {
    this.keyboardService.clickBackspace();
  }
}
