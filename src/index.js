import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./navbar";
import Home from "./home";
import Kitchen from "./kitchen";
import ErrorPage from "./error-page";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },

  {
    path: "/kitchen",
    element: <Kitchen />
  }
]);

root.render(
  <StrictMode>
    {/*Adding a React component inside a React Tag*/}
    <NavBar />
    <RouterProvider router={router} />
  </StrictMode>
);
