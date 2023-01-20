import axios from "axios";
import React from "react";
import useAuth from "../../hooks/useAuth";

const BasketTable = (props) => {
  const token = useAuth();
  const handleRemoveItem = (id) => {
    axios.delete("https://localhost:7114/Basket/delete/" + id, {
      headers: token,
    });
  };
  return (
    <div className="overflow-x-auto relative mt-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            if (item.item1) {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.item1.title || ""}
                  </th>
                  <td className="py-4 px-6">{item.item1.description || ""}</td>
                  <td className="py-4 px-6">
                    <span className="mr-6">{item.item1.price}$</span>
                    <span className="line-through">rrp: {item.item1.rrp}$</span>
                  </td>
                  <td>
                    <button
                      className="bg-red-600 rounded rounded-lg py-2 px-4 text-white"
                      onClick={() => handleRemoveItem(item.item1.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.item2.title || ""}
                </th>
                <td className="py-4 px-6">{item.item2.description || ""}</td>
                <td className="py-4 px-6">
                  <span className="mr-6">{item.item2.price}$</span>
                  <span className="line-through">rrp: {item.item2.rrp}$</span>
                </td>
                <td>
                  <button
                    className="bg-red-600 rounded rounded-lg py-2 px-4 text-white"
                    onClick={() => handleRemoveItem(item.item2.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasketTable;
