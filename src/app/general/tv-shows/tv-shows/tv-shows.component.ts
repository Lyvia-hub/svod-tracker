import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TvShowsService } from 'src/app/core/services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  searchTerm: any;
  searchResult: any;
  popular: any;
  totalResults: any;

  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit(): void {
    this.getPopularTVShow(1);
  }

  getPopularTVShow(page: number) {
    this.tvShowsService.getPopularTVShow(page).pipe(
      delay(2000)).subscribe(
        (res: any) => {
          this.popular = res.results;
          this.totalResults = res.total_results;
          console.log(this.popular);
          //Gérer le loader
        },
        error => console.log(error)
      );
  }

  searchTvShows(page: number) {
    console.log("le sujet de la recherche est :" + this.searchTerm);
    this.tvShowsService.searchtvShows(this.searchTerm, page).subscribe(
      res => {
        this.searchResult = res.results;

        if (res.total_results === 0) {
          console.log("Aucun résultat à afficher");
        }
        console.log(res);
      }
    );
  }

  changePage(event: { pageIndex: number; }) {
    this.getPopularTVShow(event.pageIndex + 1);
  }

}
