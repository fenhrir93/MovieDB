export interface Movie {
  title: string;
  rated: string;
  year: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  // language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Rating[];
  types: string;
  box_office: string;
  genre: string;
  imdbVotes: string;
  imdbID: string;
}

export interface Rating {
  source: string;
  values: string;
}
