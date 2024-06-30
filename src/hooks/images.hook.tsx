import { useEffect, useState } from "react";
import axiosInstace from "../axiosInstance/axiosInstance";

export const useImages = (movie_id?: string) => {
  const [movieImages, setMovieImages] = useState();
  useEffect(() => {
    const getImages = async () => {
      const req = await axiosInstace.get(`movie/${movie_id}/images`);

      const res = req.data;

      setMovieImages(res);
    };

    getImages();
  }, []);
  return { movieImages };
};
