import { useLoaderData } from "react-router-dom";
import { MovieResponse } from "../../models/Movie.interface";
import MovieCard from "./MovieCard/MovieCard";

const Movie = () => {
  const { results: movies } = useLoaderData() as MovieResponse;
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default Movie;
