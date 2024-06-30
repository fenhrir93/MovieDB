import { AxiosError } from "axios";
import { defer, json } from "react-router-dom";
import axiosInstace from "../../axiosInstance/axiosInstance";
import { ImageDetail, ImageResponse } from "../../models/MovieImages.interface";
import { imagePathConfigurator } from "../../utils/imagePathConfigurator";

export const moviesImageLoader = async (id: string | undefined) => {
  try {
    if (!id) throw new AxiosError("Something went wrong");
    const [{ base_url, poster_sizes }, req] = await Promise.all([
      imagePathConfigurator(),
      axiosInstace.get<ImageResponse>(`movie/${id}/images`),
    ]);
    const imagesWithPath: ImageDetail[] = req.data.backdrops.map((image) => {
      return {
        ...image,
        file_path: (image.file_path =
          base_url + poster_sizes[3] + image.file_path),
      };
    });
    return defer({
      data: imagesWithPath.slice(0, 50),
    });
  } catch (error) {
    return json({ error: "Something went wrong" });
  }
};
