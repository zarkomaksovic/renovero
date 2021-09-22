import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IdropdownFieldInterface,
  ItextareaFieldInterface,
  IcommonFormInterface,
} from 'src/app/interfaces/form-fields-interfaces';
import { DataService } from 'src/app/services/data.service';
import { IfindPainterResponse } from './../../interfaces/find-painter-response';
@Component({
  selector: 'app-find-painter-form',
  templateUrl: './find-painter-form.component.html',
  styleUrls: ['./find-painter-form.component.scss'],
})
export class FindPainterFormComponent implements OnInit {
  findPainterForm: FormGroup;
  dropdownProps: IdropdownFieldInterface;
  textareaProps: ItextareaFieldInterface;
  emailProps: IcommonFormInterface;
  formTitle: string;
  buttonLabel: string;
  showCustomMessageContainer = false;
  message: string;
  isSuccess: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.getMockData(this.dataService.mockData);
  }

  ngOnInit(): void {
    this.findPainterForm = this.buildForm();
  }

  // used just for test purpose
  getMockData(mockData) {
    for (const [key, value] of Object.entries(mockData)) {
      this[key] = value;
    }
  }

  //create find painter form and define fields
  buildForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // display message to user
  showCustomerMessage(message) {
    this.message = message;
    this.showCustomMessageContainer = true;
  }

  // submit form data
  onSubmitHandler() {
    this.dataService.postFormData(this.findPainterForm.value).subscribe(
      (response: IfindPainterResponse) => {
        this.isSuccess = true;
        const message =
          'Your request for ' + response.task.title + 'has been accepted.';
        this.showCustomerMessage(message);
      },
      (error) => {
        this.isSuccess = false;
        const message =
          'Something is wrong with your request, please try again later';
        this.showCustomerMessage(message);
        console.error(error);
      }
    );
  }
}
