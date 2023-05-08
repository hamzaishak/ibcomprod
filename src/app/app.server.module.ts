import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FormsModule, NgForm, NgModel,ReactiveFormsModule, FormArray } from "@angular/forms";
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppModule,
    ServerModule,
    ReactiveFormsModule,
    NgModel,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class AppServerModule {}
