import { Typography } from "@mui/material";
import { Movie } from "../../../models/Movie.interface";

const MovieInfo = ({ movie }: { movie: Movie }) => {
  return (
    <div className="info">
      <img className="poster" src={movie.poster_path} />
      <div className="film-info">
        {/* <Typography>Rated: {movie.adult}</Typography> */}
        {/* <Typography>Director: {movie.}</Typography>
        <Typography>Writer: {movie.writer}</Typography>
        <Typography>Country: {movie.country}</Typography>
        <Typography>Genre: {movie.genre}</Typography>
        <Typography>Actors: {movie.actors}</Typography>
        <Typography>Runtime: {movie.runtime}</Typography>
        <Typography>Awards: {movie.awards}</Typography>
        <Typography>Box Office: {movie.box_office}</Typography>
        <Typography>Released: {movie.released}</Typography> */}
        <Typography>Ratings:</Typography>
      </div>
    </div>
  );
};

export default MovieInfo;
