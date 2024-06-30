import { createBrowserRouter } from "react-router-dom";
import MovieDetails from "../components/Movie/MovieDetails";
import { moviesImageLoader } from "../components/Movie/movieImageLoader";
import { movieLoader } from "../components/Movie/movieLoader";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import Root from "./Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie",
        element: <MoviePage />,
        loader: movieLoader,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
        loader: ({ params }) => moviesImageLoader(params.id),
      },
    ],
  },
]);
