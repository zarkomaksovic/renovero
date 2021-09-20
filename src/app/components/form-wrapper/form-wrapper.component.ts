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
  myForm: FormGroup;
  dropdownProps: IdropdownFieldInterface;
  textareaProps: ItextareaFieldInterface;
  emailProps: IcommonFormInterface;
  formTitle: string;
  buttonLabel: string;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    // create mock data for test
    const mockData = {
      formTitle: 'Maler finden',
      buttonLabel: 'Kontaktdaten angeben',
      dropdownData: {
        label: 'Welche Arbeit soll ausgeführt werden?*',
        formFieldTitle: 'title',
        placeholder: 'Leistung auswählen oder anfangen zu tippen',
        options: [
          'Kueche streichen',
          'Wand streichen',
          'Haus streichen, malen',
          'Zimmer streichen',
          'Wohnung streichen, malen',
          'Malerarbeiten',
          'Decke verputzen',
          'Wand verputzen',
        ],
      },
      textareaProps: {
        label: 'Beschreiben Sie die auszuführende Arbeiten:* ',
        formFieldTitle: 'description',
        rows: '10',
      },
      emailProps: {
        label: 'Email*',
        formFieldTitle: 'email',
      },
    };
    this.getMockData(mockData);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  getMockData(mockData) {
    this.dropdownProps = mockData.dropdownData;
    this.textareaProps = mockData.textareaProps;
    this.emailProps = mockData.emailProps;
    this.formTitle = mockData.formTitle;
    this.buttonLabel = mockData.buttonLabel;
  }
  buildForm() {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmitHandler() {
    console.log(this.myForm.value);
    this.dataService.postFormData().subscribe((res) => {
      console.log(res);
    });
  }
  submit() {}
}
