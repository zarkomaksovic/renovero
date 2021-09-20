import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {
  @Input()
  label: string | undefined;

  @Input()
  formFieldTitle: string | undefined;

  @Input()
  rows: string | undefined;

  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.setEmailValidation()
  }
  setEmailValidation() {
    console.log(this.parentForm.controls[this.formFieldTitle])
    // this.parentForm.controls[this.formFieldTitle].addValidators(Validators.email);

  }

  get controls() {
    return this.parentForm.controls;
  }

}