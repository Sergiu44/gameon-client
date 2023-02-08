import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = (props) => {
  const router = useNavigate();
  const [error, setError] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7114/User/login", credentials)
      .then(({ data }) => {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("expiration", data.expiration);
        sessionStorage.setItem("firstName", data.firstName);
        sessionStorage.setItem("lastName", data.lastName);
        sessionStorage.setItem("isAdmin", data.isAdmin);
        if (data.token) {
          router("/profile");
        }
      })
      .catch((err) => {
        console.error(err.message);
        setError(true);
      });
  };
  return (
    <div className="bg-gray-800 w-full h-screen pt-20 pb-44">
      s
      <div className="max-w-screen-md p-6 bg-white border border-gray-200 rounded-lg shadow-md mx-auto">
        <h1 className="mb-2 text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl lg:text-3xl text-center mt-6 mx-5">
          It's high time you started a new journey!
        </h1>
        <p className="mb-12 text-lg font-normal text-gray-500 text-sm text-center">
          Here at GameOn we focus on your demands, your preferences so that this
          gaming experience will be as enjoyable as possible.
        </p>
        {error && (
          <p className="bg-red-200 text-red-900 p-2 rounded rounded-lg mb-2">
            You credentials are not good!
          </p>
        )}
        <form onSubmit={handleSubmitForm}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) => {
                setError(false);
                const { id, value } = e.target;
                setCredentials({ ...credentials, [id]: value });
              }}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="test@test.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              onChange={(e) => {
                setError(false);
                const { id, value } = e.target;
                setCredentials({ ...credentials, [id]: value });
              }}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center relative left-1/2 -translate-x-1/2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
