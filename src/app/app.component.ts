import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {
  BehaviorSubject,
  combineLatest,
  EMPTY,
  Observable,
  switchMap,
} from 'rxjs';
import { ApiService, Driver, Race } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public yearOptions = ['2018', '2019', '2020', '2021', '2022'];
  public paginatorOptions = [10, 15, 25];

  public year = new BehaviorSubject(this.yearOptions[0]);

  public driversLimit = new BehaviorSubject(10);
  public driversOffset = new BehaviorSubject(0);

  public racesLimit = new BehaviorSubject(10);
  public racesOffset = new BehaviorSubject(0);

  public drivers$ = combineLatest([
    this.year.asObservable(),
    this.driversLimit.asObservable(),
    this.driversOffset.asObservable(),
  ]).pipe(
    switchMap(([year, limit, offset]) =>
      this.api.getDrivers(year, limit, offset)
    )
  );

  public races$ = combineLatest([
    this.year.asObservable(),
    this.racesLimit.asObservable(),
    this.racesOffset.asObservable(),
  ]).pipe(
    switchMap(([year, limit, offset]) => this.api.getRaces(year, limit, offset))
  );

  constructor(private api: ApiService) {}

  driversPageChange(event: PageEvent) {
    this.driversLimit.next(event.pageSize);
    this.driversOffset.next(event.pageIndex * event.pageSize);
  }

  racesPageChange(event: PageEvent) {
    this.racesLimit.next(event.pageSize);
    this.racesOffset.next(event.pageIndex * event.pageSize);
  }
}
