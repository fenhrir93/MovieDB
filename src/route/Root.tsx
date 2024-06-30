import { Outlet } from "react-router-dom";
import MovieCard from "../components/Movie/MovieCard/MovieCard";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <MovieCard />
      <Outlet />
    </div>
  );
};

export default Root;
