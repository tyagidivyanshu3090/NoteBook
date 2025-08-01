import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/redux_Store/appStore";

const Grocery = lazy(() =>
  import("./components/lazyLoadingComponent/GroceryComponent")
);

import UserContext from "./utils/context/UserContext"; // Importing UserContext
const AppLayout = () => {
  // Dynamic value used for the Provider
  const [data, setData] = useState({
    isLoggedIn: true,
    loggedInUser: "Divyanshu Tyagi",
  });

  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ data, setData }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Renders HomePage when path is exactly '/'
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading component...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
