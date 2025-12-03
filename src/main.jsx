import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./ClientSide/AboutUs/AboutUs";
import Contact from "./ClientSide/ContactUs/contact";
import Home from "./ClientSide/Home/Home";
import Portfolio from "./ClientSide/Portfolio/Portfolio";
import PortfolioDetails from "./ClientSide/PortfolioDetail/portfolioDetails";
import Service from "./ClientSide/Service/Service";
import "./index.css";
import Products from "./ClientSide/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/portfolio/:id",
    element: <PortfolioDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
