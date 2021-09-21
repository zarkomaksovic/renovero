import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
})
export class DropdownSelectComponent implements OnInit {
  @Input() label: string;

  @Input() formFieldTitle: string;

  @Input() options: string[] = [];

  @Input() placeholder: string;

  @Input() parentForm: FormGroup;

  focused: boolean = false;
  optionsToFilter: string[] = [];
  constructor() {}

  ngOnInit(): void {
    // make a copy of all options from @input and use it later for filtering
    this.optionsToFilter = this.options;
  }

  optionSelectedHandler(event) { 
    this.value = event;
    this.focused = false;
  }

  // filter options when user types
  filterOptionsHandler(event: Event) { 
    this.focused = true;
    const typedValue = (event.target as HTMLInputElement).value;
    this.options = this.optionsToFilter.filter((option) =>
      option.toLowerCase().includes(typedValue.toLowerCase())
    );
    // this.checkTypedValue(typedValue);
  }

  // check if typed value matches with some in predefined options
  checkTypedValue(typedValue) {
    const isMatching = this.optionsToFilter.includes(typedValue);
    // no match - error
    if (!isMatching) {
      this.control.setErrors({ required: true });
    }
  }

  switchFocus() {
    this.focused = !this.focused;
  }

  // setter for the selected value
  set value(val) {
    this.parentForm.get(this.formFieldTitle).setValue(val);
  }

  // control getter
  get control() {
    return this.parentForm.get(this.formFieldTitle) as FormControl;
  }
}
