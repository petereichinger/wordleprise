import { Component, Input, OnInit } from '@angular/core';
import { KeyboardService } from '../keyboard.service';

@Component({
  selector: 'app-keyboard-row',
  templateUrl: './keyboard-row.component.html',
  styleUrls: ['./keyboard-row.component.css']
})
export class KeyboardRowComponent implements OnInit {

  @Input() enabled = true;
  @Input() keys?: string;
  @Input() enterButton = false;
  @Input() backspaceButton = false;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
  }

  onClick(key: string) {
    this.keyboardService.clickLetter(key);
  }

  onReturn() {
    this.keyboardService.clickReturn();
  }

  onBackspace() {
    this.keyboardService.clickBackspace();
  }

  isDisabled() {
    return !this.keyboardService.enabled;
  }

  isReturnDisabled() {
    return this.isDisabled() || !this.keyboardService.returnEnabled;
  }
  isBackspaceDisabled() {
    return this.isDisabled() || !this.keyboardService.backspaceEnabled;
  }
}
