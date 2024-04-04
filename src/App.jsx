import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Offers from "./Components/Offers";
import Error from "./Components/Error";
import "./index.css";
import Help from "./Components/Help";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import SignupPage from "./Components/SignUpPage";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },

      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
