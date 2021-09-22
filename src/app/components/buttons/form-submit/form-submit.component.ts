import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.scss'],
})
export class FormSubmitComponent {
  @Input() buttonLabel: string;
  @Input() parentForm: FormGroup;
  @Output() onSubmitEvent = new EventEmitter<boolean>();

  onSubmit() {
    this.onSubmitEvent.emit(true);
  }
}
