import { AxiosError } from "axios";
import axiosInstace from "../axiosInstance/axiosInstance";
import { ImageConfig } from "../models/ImageConfig.interface";

export const imagePathConfigurator = async () => {
  const req = await axiosInstace.get<ImageConfig>(
    import.meta.env.VITE_API_CONFIGURATION
  );
  const {
    status,
    data: {
      images: { backdrop_sizes, base_url, poster_sizes },
    },
  } = req;

  if (status !== 200) {
    throw new AxiosError("Something went wrong");
  }
  return {
    backdrop_sizes,
    base_url,
    poster_sizes,
  };
};
