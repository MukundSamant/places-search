import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  @Input() places;

  constructor() { }

  ngOnInit() {

  }

}
