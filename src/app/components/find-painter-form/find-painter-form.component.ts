import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IdropdownFieldInterface,
  ItextareaFieldInterface,
  IcommonFormInterface,
} from 'src/app/interfaces/form-fields-interfaces';
import { DataService } from 'src/app/services/data.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.getMockData(this.dataService.mockData);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  // used just for test purpose
  getMockData(mockData) {
    for (const [key, value] of Object.entries(mockData)) {
      this[key] = value;
    }
  }

  //create find painter form and define fields
  buildForm() {
    this.findPainterForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmitHandler() {
    this.dataService.postFormData(this.findPainterForm.value).subscribe({
      next(response) {
        console.log('Current response: ', response);
      },
      error(msg) {
        console.log('Error Getting response: ', msg);
      },
    });
  }
}
