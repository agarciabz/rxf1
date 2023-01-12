import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  api = 'https://ergast.com/api/f1';

  constructor(private httpClient: HttpClient) {}

  getDrivers(year: string, limit: number, offset: number): Observable<any[]> {
    return this.httpClient
      .get(`${this.api}/${year}/drivers.json?limit=${limit}&offset=${offset}`)
      .pipe(map((res: any) => res.MRData.DriverTable.Drivers));
  }

  /**
   * Get list of races with results for a certain position.
   */
  getRaces(
    year: string,
    limit: number,
    offset: number,
    position = 1
  ): Observable<any[]> {
    return this.httpClient
      .get(
        `${this.api}/${year}/results/${position}.json?limit=${limit}&offset=${offset}`
      )
      .pipe(map((res: any) => res.MRData.RaceTable.Races));
  }

  /**
   * Qualifying Results per race.
   * @param year
   * @param round
   * @param limit
   * @param offset
   * @returns
   */
  getRaceWithResults(
    year: string,
    round: number,
    limit: number,
    offset: number
  ) {
    return this.httpClient
      .get(
        `${this.api}/${year}/${round}/qualifying.json?limit=${limit}&offset=${offset}`
      )
      .pipe(map((res: any) => res.MRData.RaceTable.Races));
  }

  /**
   * Driver Standings after a race
   * @param year
   * @param round
   * @param limit
   * @param offset
   * @returns
   */
  getDriverStandings(
    year: string,
    round: number,
    limit: number,
    offset: number
  ) {
    return this.httpClient
      .get(
        `${this.api}/${year}/${round}/driverStandings.json?limit=${limit}&offset=${offset}`
      )
      .pipe(
        map(
          (res: any) =>
            res.MRData.StandingsTable.StandingsLists[0].DriverStandings
        )
      );
  }

  /**
   * Get statuses count for a year
   * @param year
   * @param limit
   * @param offset
   * @returns
   */
  getStatuses(year: string) {
    return this.httpClient
      .get(`${this.api}/${year}/status.json`)
      .pipe(map((res: any) => res.MRData.StatusTable.Status));
  }
}
