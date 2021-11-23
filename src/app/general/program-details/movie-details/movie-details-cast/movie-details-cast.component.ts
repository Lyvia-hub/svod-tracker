import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details-cast',
  templateUrl: './movie-details-cast.component.html',
  styleUrls: []
})
export class MovieDetailsCastComponent {

  @Input() casts: any;

  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
