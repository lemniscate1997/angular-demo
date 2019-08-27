import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './person/person.module';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PersonModule,
    // CountryModule // This is removed for lazy loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
