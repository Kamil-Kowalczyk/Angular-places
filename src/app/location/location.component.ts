import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../place';
import { Places } from '../places';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() selected!: number;

  locations: Place[] = Places.places;
}
