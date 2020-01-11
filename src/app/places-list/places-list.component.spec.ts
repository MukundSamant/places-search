import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesListComponent } from './places-list.component';
import { By } from '@angular/platform-browser';
import { places } from '../../mocks/places';
import { UndefinedLocationHandlerPipe } from '../undefined-location-handler.pipe';

describe('PlacesListComponent', () => {
  let component: PlacesListComponent;
  let fixture: ComponentFixture<PlacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ PlacesListComponent, UndefinedLocationHandlerPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('PlacesListComponent should display list of places passed in input.', () => {
    const placesList = places.response.venues;
    component.places = placesList;
    fixture.detectChanges();
    placesList.forEach((place) => {
      expect(fixture.nativeElement.querySelector(`[data-place-name="${place.id}"`)).toBeDefined();
    });
  });
});
