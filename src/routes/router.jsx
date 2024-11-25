import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import CategoryNews from "../pages/CategoryNews";

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
          fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
  },
]);
export default router;
