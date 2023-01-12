import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxf1';
  limit = 10;
  offset = 0;

  constructor(private api: ApiService) {
    this.api.getStatuses('2020').subscribe(console.log);
  }
}
