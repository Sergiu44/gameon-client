import axios from "axios";
import React, { useEffect, useState } from "react";
import Step0 from "../../components/steps/Step0";
import Step1 from "../../components/steps/Step1";

const RegisterScreen = (props) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    type: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios.post("https://localhost:7114/User/register", {
      ...form,
      dateOfBirth: new Date(form.dateOfBirth),
    });
  };
  return (
    <div className="bg-gray-800 w-full pt-20 pb-44">
      <div className="max-w-screen-md p-6 bg-white border border-gray-200 rounded-lg shadow-md mx-auto">
        <h1 className="mb-20 text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl lg:text-3xl text-center mt-6 mx-5">
          Log in first so that we can start the journey!
        </h1>

        <h1 className="text-xl font-bold">Progress {step}/1</h1>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: 100 * step + "%" }}
          ></div>
        </div>

        <form onSubmit={handleSubmitForm}>
          {step === 0 && <Step0 setForm={setForm} form={form} />}
          {step === 1 && <Step1 setForm={setForm} form={form} />}
          <div className="flex justify-between">
            {step > 0 && (
              <button
                onClick={() => setStep((prevState) => prevState - 1)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center relative"
              >
                Previous
              </button>
            )}
            {step === 1 && (
              <button
                type="submit"
                className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center relative border border-blue-600"
              >
                Submit
              </button>
            )}
            {step < 1 && (
              <button
                onClick={() => setStep((prevState) => prevState + 1)}
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center relative ${
                  step === 0 && "ml-auto"
                }`}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
