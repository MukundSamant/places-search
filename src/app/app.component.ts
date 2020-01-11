import { Component } from '@angular/core';
import {PlacesService} from './places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'places-search';
  placesList: Array<any>;

  constructor(private placesService: PlacesService) {
  }

  /**
   * Event handler for app-search-textfield value changes.
   */
  searchValueChange(value: string) {
    this.placesService.getPlaces(value).subscribe((places) => {
      this.placesList = places;
    });
  }

}
