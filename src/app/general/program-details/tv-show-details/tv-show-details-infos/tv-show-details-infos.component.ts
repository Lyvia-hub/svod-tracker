import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tv-show-details-infos',
  templateUrl: './tv-show-details-infos.component.html',
  styleUrls: ['./tv-show-details-infos.component.scss']
})
export class TvShowDetailsInfosComponent {

  @Input() tvShow: any;
  @Input() video: any;
  @Input() relatedVideo: any;
  @Input() display: any;

  @Output() videoDisplayed = new EventEmitter<any>();

  constructor() { }

  showDialog(video: any) {
    this.videoDisplayed.emit(video);
  }

}
