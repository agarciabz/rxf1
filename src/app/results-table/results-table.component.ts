import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QualifyingResult } from '../api.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsTableComponent {
  @Input()
  public results: QualifyingResult[] = [];

  public displayedColumns = ['position', 'driver', 'q1', 'q2', 'q3'];
}
