import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IdropdownFieldInterface,
  ItextareaFieldInterface,
  IcommonFormInterface,
} from 'src/app/interfaces/form-fields-interfaces';
import * as data from '../../json-data/mock-data.json';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss'],
})
export class FormWrapperComponent implements OnInit {
  myForm: FormGroup;
  dropdownProps: IdropdownFieldInterface;
  textareaProps: ItextareaFieldInterface;
  emailProps: IcommonFormInterface;
  formTitle: string;

  constructor(private formBuilder: FormBuilder) {
    this.getMockData();
    console.log(data);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  getMockData() {
    this.dropdownProps = data.dropdownData;
    this.textareaProps = data.textareaProps;
    this.emailProps = data.emailProps;
    this.formTitle = data.formTitle;
  }
  buildForm() {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.myForm.valueChanges.subscribe((change) =>
      console.log(11111, this.myForm.value)
    );
  }

  onSubmitHandler() {
    console.log(this.myForm);

    console.log(this.myForm.value);



  }
  submit() {}
}
