export class Program {
  readonly id: string | null;
  title: string;
  type: string;
  genres: string[];
  numberOfSeasons: number;
  actors: string[];
  synopsis: string;
  releaseDate: string;
  platform: string;
  rate: number;
  viewingDate: string;
  seen: boolean;

  constructor(
    id?: string,
    title?: string,
    type?: string,
    genres?: string[],
    numberOfSeasons?: number,
    actors?: string[],
    synopsis?: string,
    releaseDate?: string,
    platform?: string,
    rate?: number,
    viewingDate?: string,
    seen?: boolean
  ) {
    this.id = id || null;
    this.title = title || '';
    this.type = type || '';
    this.genres = genres || [];
    this.numberOfSeasons = numberOfSeasons || 0;
    this.actors = actors || [];
    this.synopsis = synopsis || '';
    this.releaseDate = releaseDate || '';
    this.platform = platform || '';
    this.rate = rate || 0;
    this.viewingDate = viewingDate || '';
    this.seen = seen || false;
  }
}
