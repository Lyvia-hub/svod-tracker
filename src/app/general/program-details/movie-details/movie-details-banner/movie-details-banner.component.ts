import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details-banner',
  templateUrl: './movie-details-banner.component.html',
  styleUrls: []
})
export class MovieDetailsBannerComponent {

  @Input() movie: any;

  constructor() { }

}
