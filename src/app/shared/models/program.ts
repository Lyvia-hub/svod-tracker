export class Program {
  readonly id: string | null;
  name: string;
  type: string;
  genres: string[];
  numberOfSeasons: number;
  actors: string[];
  synopsis: string;
  releaseDate: string;
  platform: string;
  rate: number;

  constructor(
    id?: string,
    name?: string,
    type?: string,
    genres?: string[],
    numberOfSeasons?: number,
    actors?: string[],
    synopsis?: string,
    releaseDate?: string,
    platform?: string,
    rate?: number,
  ) {
    this.id = id || null;
    this.name = name || '';
    this.type = type || '';
    this.genres = genres || [];
    this.numberOfSeasons = numberOfSeasons || 0;
    this.actors = actors || [];
    this.synopsis = synopsis || '';
    this.releaseDate = releaseDate || '';
    this.platform = platform || '';
    this.rate = rate || 0;
  }
}
