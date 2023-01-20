import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    id: "profile",
    to: "/profile",
    sgv: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
    ),
    title: "Profile",
    text: "Personal Data Overview",
    hasBorder: true,
  },
  {
    id: "game-listing",
    to: "/game-listing",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        ></path>
      </svg>
    ),
    title: "Games",
    text: "List of games",
    hasBorder: false,
  },
  {
    id: "bundle-listing",
    to: "/bundle-listing",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    title: "Bundles",
    text: "Subscriptions for your favorite games",
    hasBorder: true,
  },
  {
    id: "basket",
    to: "/basket",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        ></path>
      </svg>
    ),
    title: "Basket",
    text: "See your basket",
    hasBorder: false,
  },
  {
    id: "wishlist",
    to: "/wishlist",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    ),
    title: "Wishlist",
    text: "See your wishlist",
    hasBorder: true,
  },
  {
    id: "settings",
    to: "/settings",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
    title: "Settings",
    text: "",
    hasBorder: false,
  },
  {
    id: "users",
    to: "/users",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: "Users",
    text: "",
    hasBorder: false,
  },
];
const GeneralDashboard = () => {
  const location = useLocation();
  console.log(location);
  const [activeItem, setActiveItem] = useState(
    location.pathname.slice(1, location.pathname.length)
  );

  return (
    <div className=" overflow-y-scroll h-screen w-4/12 md:w-3/12 lg:w-2/12 antialiased text-slate-800 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-col relative">
        <div
          id="menu"
          className="bg-gray-900 z-10 text-slate-300 w-4/12 md:w-3/12 lg:w-2/12 fixed left-0 h-screen"
        >
          <div
            id="logo"
            className="px-6 py-4 border-4 border-gray-900 text-center"
          >
            <Link to="/" className="flex justify-center">
              <span className="self-center text-4xl whitespace-nowrap dark:text-white">
                Game
              </span>
              <span className="text-cyan-600 text-4xl font-semibold self-center uppercase -tracking-[.2rem] ">
                On
              </span>
            </Link>
            <p className="text-slate-500 text-sm">
              Manage your actions and activities
            </p>
          </div>
          <div id="nav" className="w-full px-6 mt-8">
            {items.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                onClick={() => setActiveItem(item.id)}
                className={`w-full px-2 inline-flex space-x-2 items-center ${
                  item.hasBorder && "border-b border-slate-700"
                } ${
                  activeItem === item.id ? "bg-blue-800" : "hover:bg-white/5"
                }  py-3 transition ease-linear duration-150`}
              >
                <div>{item.svg}</div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-white">
                    {item.title}
                  </span>
                  <span className="text-sm text-white/50 hidden md:block">
                    {item.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDashboard;
