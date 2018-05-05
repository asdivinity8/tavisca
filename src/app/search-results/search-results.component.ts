import { Component, OnInit } from '@angular/core';

import { Hotel } from '../hotel';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  hotel: Hotel = {
    image: '../../assets/images/travel.jpg',
    name: 'Taj Krishna',
    address: 'Banjara Hills, Hyderabad, Telangana',
    rating: 4.0
  };
  constructor() { }

  ngOnInit() {
  }

}
