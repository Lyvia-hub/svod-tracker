import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  topRated: any;
  totalResults: any;
  searchResult: any;
  searchTerm: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getTopRatedMovies(1);
  }

  getTopRatedMovies(page: number) {
    this.moviesService.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
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
    this.getTopRatedMovies(event.pageIndex + 1);
  }



}
