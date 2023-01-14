import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Race } from '../api.service';

@Component({
  selector: 'app-races-table',
  templateUrl: './races-table.component.html',
  styleUrls: ['./races-table.component.css'],
})
export class RacesTableComponent {
  @Input()
  public races: Race[] = [];

  @Output()
  public selectRace = new EventEmitter<Race>();

  public displayedColumns = [
    'round',
    'name',
    'date',
    'circuit',
    'winner',
    'time',
  ];
}
