import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details-infos',
  templateUrl: './movie-details-infos.component.html',
  styleUrls: []
})
export class MovieDetailsInfosComponent {

  @Input() movie: any;

  constructor() { }

}
