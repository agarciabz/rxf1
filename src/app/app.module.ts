import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { RacesTableComponent } from './races-table/races-table.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { StandingsTableComponent } from './standings-table/standings-table.component';

@NgModule({
  declarations: [AppComponent, DriversTableComponent, RacesTableComponent, ResultsTableComponent, StandingsTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
