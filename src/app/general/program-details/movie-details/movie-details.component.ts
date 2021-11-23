import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id: any;
  movie: any;
  casts: any = [];
  officialTrailer: any;
  relatedVideo: any;
  display: boolean = false;
  video: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';


  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getMovieDetails(this.id);
        this.getMovieCast(this.id);
        this.getMovieVideos(this.id);
      }
    );
  }

  getMovieDetails(id: any) {
    this.moviesService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
      console.log(res);
    });
  }

  getMovieCast(id: any) {
    this.moviesService.getMovieCast(id).subscribe((res: any) => {
      this.casts = res.cast;
      console.log(res.cast);
    });
  }

  getMovieVideos(id: any) {
    this.moviesService.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.officialTrailer = res.results[0];
        this.relatedVideo = res.results;
      }
    });
  }

  onVideoDisplayed(video: any): void {
    this.display = true;
    // this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + video.key + this.autoplay);
    console.log('Ouvrir boite de dialogue pour afficher la vidéo', video);
    console.log(this.display);
  }
}
