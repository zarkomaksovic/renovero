import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IdropdownFieldInterface,
  ItextareaFieldInterface,
  IcommonFormInterface,
} from 'src/app/interfaces/form-fields-interfaces';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss'],
})
export class FormWrapperComponent implements OnInit {
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
      this[key] = value
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
    this.dataService.postFormData().subscribe((res) => {
      console.log(res);
    });
  }
  
}
