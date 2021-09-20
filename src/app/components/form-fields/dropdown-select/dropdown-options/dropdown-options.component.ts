import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss']
})
export class DropdownOptionsComponent implements OnInit {
  @Input() options: string[];
  @Input() focused: boolean;
  @Output() onOptionSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  updateInput(option) {
    this.onOptionSelect.emit(option);
  }
}
