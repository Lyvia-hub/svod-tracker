import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
import { MoviesService } from 'src/app/core/services/movies.service';
import { TvShowsService } from 'src/app/core/services/tv-shows.service';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  isLoading$: Observable<boolean> | undefined;

  tvShow: any;
  movieNowPlaying: any;
  moviesPath: string = '/movies';
  tvShowsPath: string = '/tv-shows';
  responsiveOptions: any;
  constructor(
    private tvShowsService: TvShowsService,
    private moviesService: MoviesService,
    private loaderService: LoaderService,
    private router: Router
  ) {
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

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.isLoading$;
    this.trendingMovies(1);
    this.trendingTVShows(1);
  }

  trendingMovies(page: number) {
    this.moviesService.getNowPlaying(page).pipe(
      delay(2000))
      .subscribe((res: any) => {
        this.movieNowPlaying = res.results;
      });
  }

  trendingTVShows(page: number) {
    this.tvShowsService.getPopularTVShow(page).pipe(
      delay(2000)).subscribe(
        (res: any) => {
          this.tvShow = res.results
        });
  }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }







}
