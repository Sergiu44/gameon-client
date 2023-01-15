import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainScreen from "./screens/main/MainScreen";
import LoginScreen from "./screens/main/LoginScreen";
import RegisterScreen from "./screens/main/RegisterScreen";
import GeneralLayout from "./layouts/GeneralLayout";
import ProfileScreen from "./screens/general/ProfileScreen";
import WishlistScreen from "./screens/general/WishlistScreen";
import BasketScreen from "./screens/general/BasketScreen";
import ListingPageScreen from "./screens/products/ListingPageScreen";
import SettingsScreen from "./screens/general/SettingsScreen";
import ProductDetailsPage from "./screens/products/ProductDetailsPageScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainScreen />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "register",
        element: <RegisterScreen />,
      },
    ],
  },
  {
    element: <GeneralLayout />,
    // errorElement: <ErrorPage />
    children: [
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/wishlist",
        element: <WishlistScreen />,
      },
      {
        path: "/basket",
        element: <BasketScreen />,
      },
      {
        path: "/settings",
        element: <SettingsScreen />,
      },
      {
        path: "/game-listing",
        element: <ListingPageScreen hasGames />,
      },
      {
        path: "/game-listing/:gameId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/bundle-listing",
        element: <ListingPageScreen />,
      },
      {
        path: "/bundle-listing/:bundleId",
        element: <ProductDetailsPage isBundle />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
