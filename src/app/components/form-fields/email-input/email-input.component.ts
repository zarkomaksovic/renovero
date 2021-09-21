import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
})
export class EmailInputComponent implements OnInit {
  @Input() label: string;

  @Input() formFieldTitle: string;

  @Input() parentForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.setEmailValidation();
  }

  // parent form sets other types of validation,
  // since this is an email field component, 
  // email validator added at this level
  setEmailValidation() {
    this.control.addValidators(Validators.email);
  }

  get control() {
    return this.parentForm.get(this.formFieldTitle) as FormControl;
  }
}
