import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { SearchTextfieldComponent } from './search-textfield/search-textfield.component';
import { UndefinedLocationHandlerPipe } from './undefined-location-handler.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { places } from '../mocks/places';
import { PlacesService } from './places.service';
import { componentFactoryName } from '@angular/compiler';

@Injectable()
class MockPlacesService {
  getPlaces(near: string): Observable<Array<any>> {
    return of(places.response.venues);
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlacesListComponent,
        SearchTextfieldComponent,
        UndefinedLocationHandlerPipe
      ],
      imports: [HttpClientModule],
      providers: [
        {
          provide: PlacesService,
          useClass: MockPlacesService
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'places-search'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('places-search');
  });

  it(`template should have places list and textfield component tags`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector(`app-places-list`)).toBeDefined();
    expect(fixture.nativeElement.querySelector(`app-search-textfield`)).toBeDefined();
  });

  it(`searchValueChange should set placesList property`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.searchValueChange('dummy search');
    expect(app.placesList.length).toBe(3);
  });

});
