import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-details-infos',
  templateUrl: './movie-details-infos.component.html',
  styleUrls: []
})
export class MovieDetailsInfosComponent {

  @Input() movie: any;
  @Input() relatedVideo: any;
  @Input() display: any;
  @Input() video: any;

  @Output() videoDisplayed = new EventEmitter<any>();

  showDialog(video: any) {
    this.videoDisplayed.emit(video);
  }

}
