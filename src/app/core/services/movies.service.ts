import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService) { }

  getPopular(page: number): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}movie/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}&region=${environment.tmdb.region}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getNowPlaying(page: number): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}movie/now_playing?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}&region=${environment.tmdb.region}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getGenres(): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}genre/movie/list?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getMoviesByGenre(id: string): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}genre/${id}/movies?api_key=${environment.tmdb.apiKey}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getMovie(id: string): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}movie/${id}?api_key=${environment.tmdb.apiKey}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  getMovieReviews(id: string): Observable<any> {
    this.loaderService.setLoading(true);
    return this.http.get(`${environment.tmdb.baseUrl}movie/${id}/reviews?api_key=${environment.tmdb.apiKey}`).pipe(
      finalize(() => this.loaderService.setLoading(false))
    );
  }


}
