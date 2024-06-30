import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../models/Movie.interface";
import "./MovieCard.css";
import MovieInfo from "./MovieInfo";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();

  return (
    <Card className="card" onClick={() => navigate(`${movie.id}`, {})}>
      <Typography variant="h4" component="div">
        {movie.title}
      </Typography>
      <CardContent className="content">
        <MovieInfo movie={movie} />
        <Typography className="description" variant="h6" component="div">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
