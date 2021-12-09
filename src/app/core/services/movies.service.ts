import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient) { }

  getPopular(page: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}movie/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}&region=${environment.tmdb.region}`);
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}movie/now_playing?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}&region=${environment.tmdb.region}`);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}movie/${id}?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`);
  }

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}search/movie?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}&page=1&include_adult=false&query=${searchTerm}`);
  }

  getMovieCast(id: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}movie/${id}/credits?api_key=${environment.tmdb.apiKey}&language=fr-CA`);
  }

  getMovieVideos(id: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}movie/${id}/videos?api_key=${environment.tmdb.apiKey}&language=en-US`)
  }

}
