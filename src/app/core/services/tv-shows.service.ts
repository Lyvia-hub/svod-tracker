import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService) { }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}tv/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}`);
  }

  getTopRatedTVShows(page: number): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}tv/top_rated?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}&page=${page}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getTvOnTheAir(page: number): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}tv/on_the_air?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getTVShowById(id: string): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}tv/${id}?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}genre/tv/list?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`);
  }

  getTVShowByGenre(id: string): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}discover/tv?api_key=${environment.tmdb.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`);
  }

  getTVShowsProviders(): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}watch/providers/tv?api_key=${environment.tmdb.apiKey}&language=en-US`);
  }

  searchtvShows(searchTerm: string, page: number): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}search/tv?api_key=${environment.tmdb.apiKey}&page${page}&query=${searchTerm}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

}
