import React, { useState } from "react";
import GeneralContainer from "../../components/containers/GeneralContainer";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SettingsScreen = (props) => {
  const token = useAuth();
  const [error, setError] = useState("");
  const [password, setPassword] = useState({
    old: "",
    new: "",
    newAgain: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.new !== password.newAgain) {
      setError("The passwords do not match!");
      return;
    }

    axios
      .put(
        "https://localhost:7114/User/put/password",
        {
          newPassword: password.new,
          currentPassword: password.old,
        },
        {
          headers: token,
        }
      )
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <GeneralContainer className="mx-44 my-44">
      {error}
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl text-gray-900 text-center">
          Change your password
        </h1>
        <div className="mb-6 flex w-3/4 mx-auto mt-20">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-900 w-56 mt-3"
          >
            Current password:{" "}
          </label>
          <input
            onChange={(e) =>
              setPassword((prev) => ({ ...prev, old: e.target.value }))
            }
            type="text"
            id="oldpassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6 flex w-3/4 mx-auto">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-900 w-56 mt-3"
          >
            New password:{" "}
          </label>
          <input
            onChange={(e) =>
              setPassword((prev) => ({ ...prev, new: e.target.value }))
            }
            type="text"
            id="newpassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6 flex w-3/4 mx-auto">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-900 w-56 mt-3"
          >
            Confirm new password:{" "}
          </label>
          <input
            onChange={(e) =>
              setPassword((prev) => ({ ...prev, newAgain: e.target.value }))
            }
            type="text"
            id="newpasswordagain"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-44 px-5 py-2.5 text-center relative mx-auto"
        >
          Save
        </button>
      </form>
    </GeneralContainer>
  );
};
export default SettingsScreen;
