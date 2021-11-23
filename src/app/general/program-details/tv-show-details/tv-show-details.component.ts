import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvShowsService } from 'src/app/core/services/tv-shows.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {

  id: any;
  tvShow: any;
  video: any;
  relatedVideo: any;
  display: boolean = false;
  casts: any;

  constructor(
    private tvShowsService: TvShowsService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.getTvShowDetails(this.id);
        this.getTvShowVideos(this.id);
        this.getTvShowCast(this.id);
      }
    )
  }

  getTvShowDetails(id: number) {
    this.tvShowsService.getTVShowById(id).subscribe(
      (res: any) => {
        this.tvShow = res;
        console.log("La série est : ", this.tvShow);
      });
  }

  getTvShowVideos(id: number): void {
    this.tvShowsService.getTvShowsVideos(id).subscribe(
      (res: any) => {
        if (res.results.length) {
          this.video = res.results[0];
          this.relatedVideo = res.results;
          console.log(this.video);
          console.log(this.relatedVideo);
        }
      });
  }

  getTvShowCast(id: number) {
    this.tvShowsService.gettvShowCredits(id).subscribe(
      (res: any) => {
        this.casts = res.cast;
      }
    )
  }

  onVideoDisplayed(video: any) {
    this.display = true;
    console.log('Affichage de la boite de dialogue avec la vidéo de ', video);
    console.log(this.display);
  }

}
