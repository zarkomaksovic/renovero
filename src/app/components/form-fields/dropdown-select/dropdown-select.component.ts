import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
})
export class DropdownSelectComponent implements OnInit {
  @Input()
  label: string | undefined;

  @Input()
  formFieldTitle: string | undefined;

  @Input()
  options: string[] = [];

  @Input() placeholder: string | undefined;

  @Input() parentForm: FormGroup;

  focused: boolean = false;
  optionsToFilter: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.optionsToFilter = this.options;
  }

  filterOptionsHandler(event: Event) {
    this.options = this.optionsToFilter.filter((option) =>
      option.startsWith((event.target as HTMLInputElement).value)
    );
    this.checkTypedValue()
  }

  switchFocus() {
    this.focused = !this.focused;
  }

  set value(val) {
    this.parentForm.get(this.formFieldTitle).setValue(val);
  }

  get control() {
    return this.parentForm.get(this.formFieldTitle) as FormControl;
  }

  updateInput(option, event) {
    // event.preventDefault()
    // event.stopPropagation()
    this.value = option;
    this.focused = false;
  }

  checkTypedValue(event?: Event) {

    const currentInput = this.control.value;
    const isMatching = this.optionsToFilter.includes(currentInput);
    if (!isMatching) {
      this.control.setErrors({required: true})

    } else {
      this.focused = false;
    }
  }
}
