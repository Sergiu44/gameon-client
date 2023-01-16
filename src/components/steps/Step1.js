import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "../elements/Select";

const Step1 = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = () => {
      axios.get(`https://localhost:7114/Category/get`).then(({ data }) => {
        const categoryData = data.map((category) => ({
          value: category.categoryName,
          id: category.id,
        }));
        setCategories(categoryData);
      });
    };
    getCategories();
  }, []);
  return (
    <>
      <div className="flex">
        <div className="mb-6 w-1/2 mr-2">
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            value={props.form.firstName}
            type="text"
            id="firstname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) =>
              props.setForm((prevForm) => ({
                ...prevForm,
                firstName: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-6 w-1/2 ml-2">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            value={props.form.lastName}
            type="text"
            id="lastname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) =>
              props.setForm((prevForm) => ({
                ...prevForm,
                lastName: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="mobileNumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mobile number *
        </label>
        <input
          value={props.form.phoneNumber}
          type="text"
          id="mobileNumber"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="+407721166042"
          onChange={(e) =>
            props.setForm((prevForm) => ({
              ...prevForm,
              phoneNumber: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Which type of gamer suits you the best?
        </label>
        <Select
          options={categories}
          onChange={(e) =>
            props.setForm((prevForm) => ({
              ...prevForm,
              type: e.target.options[e.target.selectedIndex].text,
            }))
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="dateOfBirth"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date of birth
        </label>
        <input
          value={props.form.dateOfBirth}
          type="date"
          id="dateOfBirth"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) =>
            props.setForm((prevForm) => ({
              ...prevForm,
              dateOfBirth: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
};
export default Step1;
