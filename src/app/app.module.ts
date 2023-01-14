import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { RacesTableComponent } from './races-table/races-table.component';

@NgModule({
  declarations: [AppComponent, DriversTableComponent, RacesTableComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
