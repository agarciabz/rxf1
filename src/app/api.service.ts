import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import * as mocks from './mocks';

export type Driver = typeof mocks.drivers[number];
export type Race = typeof mocks.races[number];
export type QualifyingResult = typeof mocks.results[number];
export type DriverStandings = typeof mocks.standings[number];
export type Status = typeof mocks.status[number];
export interface ApiResponse<T> {
  limit: number;
  offset: number;
  total: number;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  api = 'https://ergast.com/api/f1';

  constructor(private httpClient: HttpClient) {}

  getDrivers(
    year: string,
    limit: number,
    offset: number
  ): Observable<ApiResponse<Driver[]>> {
    return this.httpClient
      .get(`${this.api}/${year}/drivers.json?limit=${limit}&offset=${offset}`)
      .pipe(
        map((res: any) => {
          const { limit, offset, total } = res.MRData;
          const data = res.MRData.DriverTable.Drivers;
          return {
            limit,
            offset,
            total,
            data,
          };
        })
      );
  }

  /**
   * Get list of races with results for a certain position.
   */
  getRaces(
    year: string,
    limit: number,
    offset: number,
    position = 1
  ): Observable<ApiResponse<Race[]>> {
    return this.httpClient
      .get(
        `${this.api}/${year}/results/${position}.json?limit=${limit}&offset=${offset}`
      )
      .pipe(
        map((res: any) => {
          const { limit, offset, total } = res.MRData;
          const data = res.MRData.RaceTable.Races;
          return {
            limit,
            offset,
            total,
            data,
          };
        })
      );
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
    round: string,
    limit: number,
    offset: number
  ): Observable<ApiResponse<QualifyingResult[]>> {
    return this.httpClient
      .get(
        `${this.api}/${year}/${round}/qualifying.json?limit=${limit}&offset=${offset}`
      )
      .pipe(
        map((res: any) => {
          const { limit, offset, total } = res.MRData;
          const data = res.MRData.RaceTable.Races[0].QualifyingResults;
          return {
            limit,
            offset,
            total,
            data,
          };
        })
      );
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
    round: string,
    limit: number,
    offset: number
  ): Observable<ApiResponse<DriverStandings[]>> {
    return this.httpClient
      .get(
        `${this.api}/${year}/${round}/driverStandings.json?limit=${limit}&offset=${offset}`
      )
      .pipe(
        map((res: any) => {
          const { limit, offset, total } = res.MRData;
          const data =
            res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          return {
            limit,
            offset,
            total,
            data,
          };
        })
      );
  }

  /**
   * Get statuses count for a year
   * @param year
   * @param limit
   * @param offset
   * @returns
   */
  getStatuses(year: string): Observable<ApiResponse<Status[]>> {
    return this.httpClient.get(`${this.api}/${year}/status.json`).pipe(
      map((res: any) => {
        const { limit, offset, total } = res.MRData;
        const data = res.MRData.StatusTable.Status;
        return {
          limit,
          offset,
          total,
          data,
        };
      })
    );
  }
}
