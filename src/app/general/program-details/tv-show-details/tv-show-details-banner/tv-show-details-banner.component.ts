import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tv-show-details-banner',
  templateUrl: './tv-show-details-banner.component.html',
  styleUrls: ['./tv-show-details-banner.component.scss']
})
export class TvShowDetailsBannerComponent {

  @Input() tvShow: any;

}
