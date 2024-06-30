import { AxiosError } from "axios";
import axiosInstace from "../../axiosInstance/axiosInstance";
import { MovieResponse } from "../../models/Movie.interface";
import { imagePathConfigurator } from "../../utils/imagePathConfigurator";

export const movieLoader = async () => {
  try {
    // const { backdrop_sizes, base_url, poster_sizes } =
    //   await imagePathConfigurator();
    // const movieReq = await axiosInstace.get<MovieResponse>(
    //   import.meta.env.VITE_API_MOVIES
    // );

    const [{ backdrop_sizes, base_url, poster_sizes }, movieReq] =
      await Promise.all([
        await imagePathConfigurator(),
        await axiosInstace.get<MovieResponse>(import.meta.env.VITE_API_MOVIES),
      ]);

    if (movieReq.status !== 200) {
      throw new AxiosError("Something went wrong");
    }

    const { page, results, total_pages, total_results } = movieReq.data;

    const moviesWithImages = results.map((movie) => {
      return {
        ...movie,
        backdrop_path: (movie.backdrop_path =
          base_url + backdrop_sizes[3] + movie.backdrop_path),
        poster_path: (movie.poster_path =
          base_url + poster_sizes[3] + movie.poster_path),
      };
    });

    const reponseData: MovieResponse = {
      results: moviesWithImages,
      page,
      total_pages,
      total_results,
    };

    return reponseData;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error("Network error occurred");
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
