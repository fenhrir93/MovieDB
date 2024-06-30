import { Card, CardContent, Typography } from "@mui/material";
import { movie } from "../mockMovie";
import FilmInfo from "./FilmInfo";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <Card className="card">
      <Typography variant="h4" component="div">
        {movie.title}
      </Typography>
      <CardContent className="content">
        <FilmInfo />
        <Typography className="description" variant="h6" component="div">
          {movie.plot}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
