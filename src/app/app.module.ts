import { DataService } from './services/data.service';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { ContainerCenterComponent } from './components/container-center/container-center.component';
import { DropdownSelectComponent } from './components/form-fields/dropdown-select/dropdown-select.component';
import { TextAreaComponent } from './components/form-fields/text-area/text-area.component';
import { EmailInputComponent } from './components/form-fields/email-input/email-input.component';
import { FormSubmitComponent } from './components/buttons/form-submit/form-submit.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
import { DropdownOptionsComponent } from './components/form-fields/dropdown-select/dropdown-options/dropdown-options.component';

// Components registered in module
const components = [
  AppComponent,
  FormWrapperComponent,
  ContainerCenterComponent,
  DropdownSelectComponent,
];
@NgModule({
  declarations: [components, TextAreaComponent, EmailInputComponent, FormSubmitComponent, ErrorMessageComponent, DropdownOptionsComponent],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
