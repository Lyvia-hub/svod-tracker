import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popular: any;
  totalResults: any;
  searchResult: any;
  searchTerm: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getPopularMovies(1);
  }

  getPopularMovies(page: number) {
    this.moviesService.getPopular(page).pipe(delay(2000)).subscribe((res: any) => {
      this.popular = res.results;
      this.totalResults = res.total_results;
      // this.loader = false;
    },
      error => console.log(error));
  }

  searchMovies() {
    this.moviesService.searchMovies(this.searchTerm).subscribe(
      res => {
        this.searchResult = res.results;
        console.log(res);
      }
    );
  }

  changePage(event: { pageIndex: number; }) {
    this.getPopularMovies(event.pageIndex + 1);
  }



}
