import React from "react";

const Select = (props) => {
  return (
    <div className={props.className}>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <select
        id={props.id}
        multiple={props.multiselect}
        onChange={
          !props.multiselect ? props.onChange : (e) => props.onChange(e)
        }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled selected>
          -- click the elements you want to add --
        </option>
        {props.options &&
          props.options.length > 0 &&
          props.options.map((option) => {
            return (
              <option
                value={option.id}
                className={props.variantSelect && "flex justify-between"}
                key={option.id}
              >
                {props.variantSelect
                  ? `${option.title} ${option.price}$`
                  : option.value}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
