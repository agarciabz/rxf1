import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {
  BehaviorSubject,
  combineLatest,
  combineLatestWith,
  EMPTY,
  filter,
  map,
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
  public displayedStatus = ['Finished', 'Accident', '+1 Lap'];

  private yearSubject = new BehaviorSubject(this.yearOptions[0]);
  public year$ = this.yearSubject.asObservable();
  public raceSubject = new BehaviorSubject<Race | undefined>(undefined);
  public race$ = this.raceSubject.asObservable();

  public driversLimit = new BehaviorSubject(10);
  public driversOffset = new BehaviorSubject(0);

  public racesLimit = new BehaviorSubject(10);
  public racesOffset = new BehaviorSubject(0);

  public resultsLimit = new BehaviorSubject(10);
  public resultsOffset = new BehaviorSubject(0);

  public standingsLimit = new BehaviorSubject(10);
  public standingsOffset = new BehaviorSubject(0);

  public selectYear(year: string) {
    this.yearSubject.next(year);
    this.raceSubject.next(undefined);
  }

  public drivers$ = combineLatest([
    this.year$,
    this.driversLimit.asObservable(),
    this.driversOffset.asObservable(),
  ]).pipe(
    switchMap(([year, limit, offset]) =>
      this.api.getDrivers(year, limit, offset)
    )
  );

  public races$ = combineLatest([
    this.year$,
    this.racesLimit.asObservable(),
    this.racesOffset.asObservable(),
  ]).pipe(
    switchMap(([year, limit, offset]) => this.api.getRaces(year, limit, offset))
  );

  public qualifyingResults$ = this.race$.pipe(
    filter((race) => !!race),
    combineLatestWith(this.year$, this.resultsLimit, this.resultsOffset),
    switchMap(([race, year, limit, offset]) =>
      this.api.getRaceWithResults(year, race?.round || '1', limit, offset)
    )
  );

  public driverStandings$ = this.race$.pipe(
    filter((race) => !!race),
    combineLatestWith(this.year$, this.standingsLimit, this.standingsOffset),
    switchMap(([race, year, limit, offset]) =>
      this.api.getDriverStandings(year, race?.round || '1', limit, offset)
    )
  );

  public seasonStatus$ = this.year$.pipe(
    switchMap((year) =>
      this.api
        .getStatuses(year)
        .pipe(
          map((res) =>
            res.data.filter((status) =>
              this.displayedStatus.includes(status.status)
            )
          )
        )
    )
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

  resultsPageChange(event: PageEvent) {
    this.resultsLimit.next(event.pageSize);
    this.resultsOffset.next(event.pageIndex * event.pageSize);
  }

  standingsPageChange(event: PageEvent) {
    this.standingsLimit.next(event.pageSize);
    this.standingsOffset.next(event.pageIndex * event.pageSize);
  }
}
