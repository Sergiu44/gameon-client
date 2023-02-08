import axios from "axios";
import GeneralContainer from "../../components/containers/GeneralContainer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UsersScreen = (props) => {
  const token = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = () => {
      axios
        .get("https://localhost:7114/User/get", {
          headers: token,
        })
        .then(({ data }) => {
          setUsers(data);
        })
        .catch((err) => {
          setError(true);
        });
    };
    getUsers();
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`https://localhost:7114/User/delete/${id}`)
      .catch((err) => setError(true));
    navigate(0);
  };
  return (
    <GeneralContainer className="mt-44">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Full name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr class="bg-white dark:bg-gray-800" key={user.id}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.firstName + " " + user.lastName}
                  </th>
                  <td class="px-6 py-4">{user.email}</td>
                  <td class="px-6 py-4">
                    {user.isAdmin ? "Admin" : "Customer"}
                  </td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 py-2 px-5 rounded rounded-lg text-white"
                    >
                      Delete user
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </GeneralContainer>
  );
};

export default UsersScreen;
