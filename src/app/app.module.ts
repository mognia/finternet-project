import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageStepComponent } from './components/image-step/image-step.component';
import { FormStepComponent } from './components/form-step/form-step.component';
import { TableStepComponent } from './components/table-step/table-step.component';
import { SummaryStepComponent } from './components/summary-step/summary-step.component';
import {AppRoutingModule} from "./app-routing.module";
import {StepsModule} from "primeng/steps";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";
import { FooterBtnsComponent } from './components/footer-btns/footer-btns.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    ImageStepComponent,
    FormStepComponent,
    TableStepComponent,
    SummaryStepComponent,
    FooterBtnsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StepsModule,
    FileUploadModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
