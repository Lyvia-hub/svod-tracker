import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details-banner',
  templateUrl: './movie-details-banner.component.html',
  styleUrls: ['./movie-details-banner.component.scss']
})
export class MovieDetailsBannerComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
