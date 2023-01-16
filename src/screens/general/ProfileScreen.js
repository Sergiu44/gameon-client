import axios from "axios";
import React, { useEffect, useState } from "react";
import GeneralContainer from "../../components/containers/GeneralContainer";
import GeneralModal from "../../components/modals/GeneralModal";

const ProfileScreen = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = () => {
      axios
        .get("https://localhost:7114/User/getCurrentUserf")
        .then(({ data }) => setUser(data));
    };
    getUser();
  }, []);

  console.log(user);
  return (
    <GeneralContainer className="mt-44">
      <div className="overflow-hidden bg-gradient-to-br from-cyan-200 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              User Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <button
            type="button"
            className="px-6
                    flex
                    ml-auto
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit Details
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </span>
          </button>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {/* {user} */}
              </dd>
            </div>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </GeneralContainer>
  );
};

export default ProfileScreen;
