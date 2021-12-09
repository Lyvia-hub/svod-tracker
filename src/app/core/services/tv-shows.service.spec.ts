import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TvShowsService } from './tv-shows.service';
import { environment } from './../../../environments/environment';

describe('TvShowsService', () => {
  let service: TvShowsService;
  let httpTestingController: HttpTestingController;
  let page: number = 2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvShowsService]
    });
    service = TestBed.inject(TvShowsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve popular tv Shows', () => {
    service.getPopularTVShow(page).subscribe(
      tvShows => {
        expect(tvShows).toBeTruthy();
        expect(tvShows.length).toBe(2);
        const tvShow = tvShows.find((tvShow: { id: number; }
        ) => tvShow.id === 88329);
        expect(tvShow.first_air_date).toBe("2021-11 -24")
      });

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}tv/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}`);
    expect(req.request.method).toBe("GET");
  });

  it('should retrieve popular tv Shows', () => {
    service.getPopularTVShow(page).subscribe(
      tvShows => {
        expect(tvShows).toBeTruthy();
        expect(tvShows.length).toBe(2);
        const tvShow = tvShows.find((tvShow: { id: number; }
        ) => tvShow.id === 88329);
        expect(tvShow.first_air_date).toBe("2021-11 -24")
      });

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}tv/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}`);
    expect(req.request.method).toBe("GET");
  });

  it('should find a tv show by id', () => {
    service.getTVShowById(132719).subscribe(
      tvShow => {
        expect(tvShow).toBeTruthy();
        expect(tvShow.id).toBe(132719);
        expect(tvShow.original_title).toBe("La Casa de Papel: de Tokio a Berlín");
      });
    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}tv/${132719}?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`);

    expect(req.request.method).toEqual("GET");
  });

  //Test à retravailler
  it('should find a list of tv Shows via searchTerm', () => {

    const searchTerm: string = "you";
    service.searchtvShows(searchTerm, 1).subscribe(
      tvShows => {
        expect(tvShows).toBeTruthy();
        const tvShow = tvShows.find((tvShow: { id: number; }) => tvShow.id === 78191);
        expect(tvShow.original_title).toBe("you");
        expect(tvShow.id).toBe(78191);
      }
    );

    const req = httpTestingController.expectOne(
      req => req.url == `${environment.tmdb.baseUrl}search/tv?api_key=${environment.tmdb.apiKey}&page${page}&query=${searchTerm}`
    );

    expect(req.request.method).toEqual("GET");
  });

  it('should give tv show casting', () => {
    let id: number = 71446;
    service.gettvShowCredits(id).subscribe(
      casts => {
        expect(casts).toBeTruthy();
        const actor = casts.find((actor: { id: number; }) => actor.id === 1340020);
        expect(actor.name).toBe("Álvaro Morte");
        expect(actor.id).toBe(1340020);
      }
    );

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}tv/${id}/credits?api_key=${environment.tmdb.apiKey}&language=en-US}`);

    expect(req.request.method).toEqual("GET");
  });

  it('should give tv show videos', () => {
    let id: number = 88329;
    service.getTvShowsVideos(id).subscribe(
      videos => {
        expect(videos).toBeTruthy();
        const video = videos.find((video: { id: string; }) => video.id === "619ed7fff90b1900428724e5");
        expect(video.name).toBe("Legacy");
        expect(video.id).toBe("619ed7fff90b1900428724e5");
      }
    );

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}tv/${id}/videos?api_key=${environment.tmdb.apiKey}&language=en-US`);

    expect(req.request.method).toEqual("GET");
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
