import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
