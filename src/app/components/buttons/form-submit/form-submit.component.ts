import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.scss']
})
export class FormSubmitComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() parentForm: FormGroup;
  @Output() onSubmitEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }


  onSubmit() {
    this.onSubmitEvent.emit(true);
  }
}
