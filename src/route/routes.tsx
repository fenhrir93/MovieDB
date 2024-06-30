import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.page";
import Root from "./Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
