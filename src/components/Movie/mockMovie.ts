import mockPoster from "../../assets/next.svg";
import { Movie } from "../../models/Movie.interface";

export const movie: Movie = {
  actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  rated: "PG-13",
  awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
  genre: "Action, Adventure, Comedy",
  box_office: "$389,813,101",
  country: "USA",
  director: "James Gunn",
  plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
  ratings: [
    {
      source: "Internet Movie Database",
      values: "7.6/10",
    },
    {
      source: "Rotten Tomatoes",
      values: "85%",
    },
    {
      source: "Metacritic",
      values: "67/100",
    },
  ],
  imdbVotes: "762,391",
  imdbID: "tt3896198",
  released: "05 May 2017",
  runtime: "168 min",
  title: "Guardians of the Galaxy Vol. 2",
  types: "movie",
  year: "2017",
  writer: "James Gunn, Dan Abnett, Andy Lanning",
  poster: mockPoster,
};
