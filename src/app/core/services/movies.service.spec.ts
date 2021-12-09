import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let httpTestingController: HttpTestingController;
  let page: number = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    moviesService = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(moviesService).toBeTruthy();
  });

  it('should retrieve popular movies', () => {
    moviesService.getPopular(page).subscribe(movies => {
      expect(movies).toBeTruthy();
      expect(movies.length).toBe(1);
      const movie = movies.find((movie: { id: number; }) => movie.id === 580489);
      expect(movie.original_title).toBe("Venom");
    });

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}movie/popular?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}&region=${environment.tmdb.region}`);

    expect(req.request.method).toEqual("GET");
  });

  it('should retrieve now playing movies', () => {
    moviesService.getNowPlaying(page).subscribe(movies => {
      expect(movies).toBeTruthy();
      expect(movies.length).toBe(1);
      const movie = movies.find((movie: { id: number; }) => movie.id === 585245);
      expect(movie.original_title).toBe("Clifford the Big Red Dog");
    });

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}movie/now_playing?api_key=${environment.tmdb.apiKey}&page=${page}&language=${environment.tmdb.language}&region=${environment.tmdb.region}`);

    expect(req.request.method).toEqual("GET");
  });

  it('should find a movie by id', () => {
    moviesService.getMovie(524434).subscribe(
      movie => {
        expect(movie).toBeTruthy();
        expect(movie.id).toBe(524434);
        expect(movie.original_title).toBe("The Eternals");
      });
    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}movie/524434?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}`);

    expect(req.request.method).toEqual("GET");
  });

  it('should find a list of movies via searchTerm', () => {

    const searchTerm: string = "alien";
    moviesService.searchMovies(searchTerm).subscribe(
      movies => {
        expect(movies).toBeTruthy();
        const movie = movies.find((movie: { id: number; }) => movie.id === 348);
        expect(movie.original_title).toBe("Alien");
        expect(movie.id).toBe(348);
      }
    );

    const req = httpTestingController.expectOne(
      req => req.url == `${environment.tmdb.baseUrl}search/movie?api_key=${environment.tmdb.apiKey}&language=${environment.tmdb.language}&page=1&include_adult=false&query=${searchTerm}`
    );

    expect(req.request.method).toEqual("GET");
  });

  it('should give movie casting', () => {
    moviesService.getMovieCast(566525).subscribe(
      casts => {
        expect(casts).toBeTruthy();
        const actor = casts.find((actor: { id: number; }) => actor.id === 1489211);
        expect(actor.name).toBe("Simu Liu");
        expect(actor.id).toBe(566525);
      }
    );

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}movie/566525/credits?api_key=${environment.tmdb.apiKey}&language=fr-CA`);

    expect(req.request.method).toEqual("GET");
  });

  it('should give movie videos', () => {
    moviesService.getMovieVideos(634649).subscribe(
      videos => {
        expect(videos).toBeTruthy();
        const video = videos.find((video: { id: string; }) => video.id === "61a443780231f2002dc64107");
        expect(video.name).toBe("Bande annonce officielle");
        expect(video.id).toBe("61a443780231f2002dc64107");
      }
    );

    const req = httpTestingController.expectOne(`${environment.tmdb.baseUrl}movie/634649/videos?api_key=${environment.tmdb.apiKey}&language=en-US`);

    expect(req.request.method).toEqual("GET");
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});


