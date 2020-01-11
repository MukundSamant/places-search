import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchTextfieldComponent } from './search-textfield/search-textfield.component';
import { UndefinedLocationHandlerPipe } from './undefined-location-handler.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    SearchTextfieldComponent,
    UndefinedLocationHandlerPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
