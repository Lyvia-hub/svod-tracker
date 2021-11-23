import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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


  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getMovieDetails(this.id);
        this.getMovieCast(this.id);
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
}
