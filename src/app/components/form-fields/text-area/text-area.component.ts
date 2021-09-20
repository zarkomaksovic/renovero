import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input()
  label: string | undefined;

  @Input()
  formFieldTitle: string | undefined;

  @Input()
  rows: string | undefined;

  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get control() {
    return this.parentForm.get(this.formFieldTitle) as FormControl;
  }

  // check if entered text is not all spaces, breaks
  checkText() {
    if (!this.control.value.trim()) {
      this.control.setErrors({required: true})
    }
  }
}
