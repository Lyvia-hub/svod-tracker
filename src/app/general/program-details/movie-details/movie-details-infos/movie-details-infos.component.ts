import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details-infos',
  templateUrl: './movie-details-infos.component.html',
  styleUrls: ['./movie-details-infos.component.scss']
})
export class MovieDetailsInfosComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
