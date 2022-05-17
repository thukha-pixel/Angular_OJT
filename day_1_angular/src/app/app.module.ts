import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material.module';
import { DayOneCheckboxComponent } from './day-one-checkbox/day-one-checkbox.component';
import { DayOneDateComponent } from './day-one-date/day-one-date.component';
import { DayOnButtonComponent } from './day-one-button/day-one-button.component';
@NgModule({
  declarations: [
    AppComponent,
    DayOneCheckboxComponent,
    DayOneDateComponent,
    DayOnButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
