import { useEffect, useState } from "react";
import { Movie } from "../models/Movie.interface";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  useEffect(() => {
    // async function req() {
    //   try {
    //     const req = await axiosInstace.get<MovieResponse>(
    //       import.meta.env.VITE_API_MOVIES
    //     );
    //     const confReq = await axiosInstace.get<ImageConfig>(
    //       import.meta.env.VITE_API_CONFIGURATION
    //     );
    //     const {
    //       images: { backdrop_sizes, base_url, poster_sizes },
    //     } = confReq.data;
    //     const { page, results, total_pages, total_results } = req.data;
    //     const moviesWithImages = results.map((movie) => {
    //       return {
    //         ...movie,
    //         backdrop_path: (movie.backdrop_path =
    //           base_url + backdrop_sizes[3] + movie.backdrop_path),
    //         poster_path: (movie.poster_path =
    //           base_url + poster_sizes[3] + movie.poster_path),
    //       };
    //     });
    //     setMovies(moviesWithImages);
    //     setPage(page);
    //     setTotalPages(total_pages);
    //     setTotalResults(total_results);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // req();
  }, []);

  return {
    movies,
    page,
    totalPages,
    totalResults,
    setPage,
  };
};
