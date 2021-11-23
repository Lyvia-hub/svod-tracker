import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tv-show-details-cast',
  templateUrl: './tv-show-details-cast.component.html',
  styleUrls: ['./tv-show-details-cast.component.scss']
})
export class TvShowDetailsCastComponent {

  responsiveOptions: any;

  @Input() casts: any;
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
