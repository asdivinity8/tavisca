import { Component, OnInit } from '@angular/core';

export class Search {
  location: string;
  date: any;
  guest: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  search: Search = {
    location: 'type location..',
    date:'',
    guest:1
  };

  showHotels(search: Search): void {
    console.log(search);
  }

  ngOnInit(){}
}
