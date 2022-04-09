import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotesModule } from './notes/notes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
