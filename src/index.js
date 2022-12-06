import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainScreen from "./screens/main/MainScreen";
import LoginScreen from "./screens/main/LoginScreen";
import RegisterScreen from "./screens/main/RegisterScreen";
import HomeScreen from "./screens/general/HomeScreen";
import GeneralLayout from "./layouts/GeneralLayout";
import ProfileScreen from "./screens/general/ProfileScreen";
import GameListingPageScreen from "./screens/game/GameListingPageScreen";
import WishlistScreen from "./screens/general/WishlistScreen";
import CartScreen from "./screens/general/CartScreen";
import GameDetailsPageScreen from "./screens/game/GameDetailsPageScreen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainScreen />,
            },
            {
                path: 'login',
                element: <LoginScreen />
            },
            {
                path: 'register',
                element: <RegisterScreen />
            }
        ]
    },
    {
        element: <GeneralLayout />,
        // errorElement: <ErrorPage />
        children: [
            {
                path: '/home',
                element: <HomeScreen />
            },
            {
                path: '/profile',
                element: <ProfileScreen />
            },
            {
                path: '/wishlist',
                element: <WishlistScreen />
            },
            {
                path: '/cart',
                element: <CartScreen />
            },
            {
                path: '/game-listing',
                element: <GameListingPageScreen />
            },
            {
                path: '/game-listing/:gameId',
                element: <GameDetailsPageScreen />,
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
