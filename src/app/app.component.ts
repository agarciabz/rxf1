import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ApiService, Driver, Race } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  year = '2018';
  title = 'rxf1';
  limit = 10;
  offset = 0;

  public drivers$: Observable<Driver[]> = EMPTY;
  public races$: Observable<Race[]> = EMPTY;

  constructor(private api: ApiService) {
    this.api.getStatuses('2020').subscribe(console.log);
  }

  ngOnInit(): void {
    this.drivers$ = this.api.getDrivers(this.year, this.limit, this.offset);
    this.races$ = this.api.getRaces(this.year, this.limit, this.offset);
  }
}
