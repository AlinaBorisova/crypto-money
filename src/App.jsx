import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Auth } from "./components/Auth/Auth";
import { NotFound } from "./components/NotFound/NotFound";
import { useSelector } from "react-redux";


const App = () => {
  const { accessToken } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header/>
          <main>{accessToken ? <h1>{"You are enter"}</h1> : <Navigate to="/auth" />}</main>
          <Footer/>
        </>
      ),
    },
    {
      path: "/auth",
      element: (
        <>
          <Header />
          <main>{accessToken ? <Navigate to="/" /> : <Auth />}</main>
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Header />
          <main>
            <NotFound />
          </main>
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
