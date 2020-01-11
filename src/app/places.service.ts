import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  fourSquareClientId: string;
  fourSquareClientSecret: string;
  fourSquareBaseURL: string;
  fourSquareAPIVersion: string;

  constructor(private httpClient: HttpClient) {
    // clientSecret should not be exposed to the browser ideally. Solution is to make this call through
    // a proxy service.

    this.fourSquareClientId = 'XSJRWYSU4SZB0TUJZPHAISPWHIANB23QB5HILIF3CARENPXX';
    this.fourSquareClientSecret = 'KX02GYRLAD442IURTSRWZZBWDBPWFOJANXDKFD4SRJQ3PFCW';
    this.fourSquareBaseURL = 'https://api.foursquare.com/v2/';
    this.fourSquareAPIVersion = '20180323';
  }

  /**
   * Calls Foursquare API to retrieve place list. In case of error,
   * returning back blank places array.
   */
  getPlaces(near: string): Observable<Array<any>> {
    let placesEndPoint = `${this.fourSquareBaseURL}venues/search?`;

    placesEndPoint += `&near=${near}`;
    placesEndPoint += `&limit=20`;
    placesEndPoint += `&radius=1000`;
    placesEndPoint = this.getEndpointWithAuthCredentials(placesEndPoint);
    placesEndPoint = this.getEndpointWithVersion(placesEndPoint);

    return this.httpClient.get(placesEndPoint).pipe(map((venueSearchData: any) => {
      if (venueSearchData.meta.code !== 200) {
        return new Array();
      }

      return venueSearchData.response.venues;
    }), catchError((err: any) => {
      return of(new Array());
    }));

  }

  /**
   * Append credentials
   */
  private getEndpointWithAuthCredentials(endpoint: string): string {
    return `${endpoint}&client_id=${this.fourSquareClientId}&client_secret=${this.fourSquareClientSecret}`;
  }

  /**
   * Append API version of Foursquare
   */
  private getEndpointWithVersion(endpoint: string): string {
    return `${endpoint}&v=${this.fourSquareAPIVersion}`;
  }
}
