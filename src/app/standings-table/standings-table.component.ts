import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DriverStandings } from '../api.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandingsTableComponent {
  @Input()
  public standings: DriverStandings[] = [];

  public displayedColumns = ['position', 'points', 'driver', 'constructor'];
}
