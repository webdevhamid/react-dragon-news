import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import CategoryNews from "../pages/CategoryNews";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
