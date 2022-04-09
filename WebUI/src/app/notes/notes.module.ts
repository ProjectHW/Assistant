import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { NotesComponent } from './notes.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
 exports: [
   NotesComponent
 ]
})

export class NotesModule { }
