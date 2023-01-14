import { Component, Input } from '@angular/core';
import { Driver } from '../api.service';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css'],
})
export class DriversTableComponent {
  @Input()
  public drivers: Driver[] | null = [];
}
