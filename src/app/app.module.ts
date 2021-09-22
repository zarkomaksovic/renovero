import { DataService } from './services/data.service';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerCenterComponent } from './components/container-center/container-center.component';
import { DropdownSelectComponent } from './components/form-fields/dropdown-select/dropdown-select.component';
import { TextAreaComponent } from './components/form-fields/text-area/text-area.component';
import { EmailInputComponent } from './components/form-fields/email-input/email-input.component';
import { FormSubmitComponent } from './components/buttons/form-submit/form-submit.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
import { DropdownOptionsComponent } from './components/form-fields/dropdown-select/dropdown-options/dropdown-options.component';
import { ErrorHandlingService } from './services/error-handling.service';
import { FindPainterFormComponent } from './components/find-painter-form/find-painter-form.component';

// Components registered in module
const components = [
  AppComponent,
  ContainerCenterComponent,
  DropdownSelectComponent,
  TextAreaComponent,
  EmailInputComponent,
  FormSubmitComponent,
  ErrorMessageComponent,
  DropdownOptionsComponent,
  FindPainterFormComponent,
];
@NgModule({
  declarations: [components],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [DataService, ErrorHandlingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
