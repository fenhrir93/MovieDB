import { ImageList, ImageListItem } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { ImageDetail } from "../../models/MovieImages.interface";

const MovieDetails = () => {
  const loaderData = useLoaderData() as { data: ImageDetail[] };
  return (
    <ImageList sx={{ width: 800, height: 600 }} variant="standard">
      {loaderData.data.map((image, index) => (
        <ImageListItem key={index}>
          <img src={image.file_path} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MovieDetails;
