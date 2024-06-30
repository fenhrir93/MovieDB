import { Typography } from "@mui/material";
import { movie } from "../mockMovie";

const FilmInfo = () => {
  return (
    <div className="info">
      <img className="poster" src={movie.poster} />
      <div className="film-info">
        <Typography>Rated: {movie.rated}</Typography>
        <Typography>Director: {movie.director}</Typography>
        <Typography>Writer: {movie.writer}</Typography>
        <Typography>Country: {movie.country}</Typography>
        <Typography>Genre: {movie.genre}</Typography>
        <Typography>Actors: {movie.actors}</Typography>
        <Typography>Runtime: {movie.runtime}</Typography>
        <Typography>Awards: {movie.awards}</Typography>
        <Typography>Box Office: {movie.box_office}</Typography>
        <Typography>Released: {movie.released}</Typography>
        <Typography>Ratings:</Typography>
        {movie.ratings.map((item, index) => {
          //TODO: Add imdbVotes
          const content = `${item.source}: ${item.values}`;
          if (item.source === "Internet Movie Database") {
            return (
              <Typography key={index}>
                {content}({movie.imdbVotes})
              </Typography>
            );
          }
          return <Typography key={index}>{content}</Typography>;
        })}
      </div>
    </div>
  );
};

export default FilmInfo;
