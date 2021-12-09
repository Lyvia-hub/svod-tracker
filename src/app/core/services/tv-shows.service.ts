import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(
    private http: HttpClient) { }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}tv/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}`);
  }

  getTVShowById(id: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}tv/${id}?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`);
  }

  getTvShowsVideos(id: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}tv/${id}/videos?api_key=${environment.tmdb.apiKey}&language=en-US`);
  }

  gettvShowCredits(id: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}tv/${id}/credits?api_key=${environment.tmdb.apiKey}&language=en-US}`);
  }

  searchtvShows(searchTerm: string, page: number): Observable<any> {
    return this.http.get(`${environment.tmdb.baseUrl}search/tv?api_key=${environment.tmdb.apiKey}&page${page}&query=${searchTerm}`);
  }

}
