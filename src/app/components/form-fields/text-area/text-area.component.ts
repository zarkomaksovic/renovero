import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    this.controls
  }

  get controls() {
    console.log(this.parentForm.controls)
    return this.parentForm.controls;
  }
}
