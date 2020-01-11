import { TestBed } from '@angular/core/testing';

import { PlacesService } from './places.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { places } from 'src/mocks/places';
import { UndefinedLocationHandlerPipe } from './undefined-location-handler.pipe';

describe('PlacesService', () => {
  let httpTestingController: HttpTestingController;
  let service: PlacesService;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
      ],
      declarations: [
        UndefinedLocationHandlerPipe
      ]
      });
      httpTestingController = TestBed.get(HttpTestingController);
      service = TestBed.get(PlacesService);
    }
  );

  function getURLForPlacesSearch(near: string) {
    let placesEndPoint = `${service.fourSquareBaseURL}venues/search?`;
    placesEndPoint += `&near=${near}`;
    placesEndPoint += `&limit=20`;
    placesEndPoint += `&radius=1000`;
    placesEndPoint += `&client_id=${service.fourSquareClientId}&client_secret=${service.fourSquareClientSecret}`;
    placesEndPoint += `&v=${service.fourSquareAPIVersion}`;
    return placesEndPoint;
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPlaces should return an observable that emits list of places near a location.', (done) => {
    const near = 'New York';
    service.getPlaces(near).subscribe((placesList) => {
      expect(placesList.length).toBe(3);
      done();
    });

    const placesEndPoint = getURLForPlacesSearch(near);
    const req = httpTestingController.expectOne(
      placesEndPoint
    );
    req.flush(places);
    httpTestingController.verify();
  });

  it('getPlaces should return an observable that emits blank array if no places near a location.', (done) => {
    const near = 'Gibberish Place';
    service.getPlaces(near).subscribe((placesList) => {
      expect(placesList.length).toBe(0);
      done();
    });

    const placesEndPoint = getURLForPlacesSearch(near);
    const req = httpTestingController.expectOne(
      placesEndPoint
    );
    req.flush({meta: {code: 400, errorType: 'invalid_auth', response: {}}}, {status: 200, statusText: 'Bad Request'});
    httpTestingController.verify();
  });



});
