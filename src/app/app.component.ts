import { Component } from '@angular/core';
import { Places } from './places';
import { Place } from './place';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list';
  uselessList: String[] = ["apple", "pineapple", "peach", "cocount", "strawberry"];
  places: Place[] = Places.places;
  selectedPlace: Place = this.places[0];
  selectedPlaceIndex: number = 0

  public onSumbit(f: NgForm): void{
    console.log(f.value);
    console.log(this.selectedPlaceIndex);
  }
}
