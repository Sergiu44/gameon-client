import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Table = (props) => {
  const token = useAuth();
  const navigate = useNavigate();
  const handleRemoveItem = (id, isVariant) => {
    axios.delete(
      `https://localhost:7114/${
        props.isWishlist ? "Wishlist" : "Basket"
      }/delete/${isVariant ? "variant/" : "bundle/"}` + id,
      {
        headers: token,
      }
    );
    navigate(0);
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
          {props.items.map((item) => {
            if (item.item1) {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="font-bold">Variant:</span>{" "}
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
                      onClick={() => handleRemoveItem(item.item1.id, true)}
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
                  <span className="font-bold">Bundle:</span>{" "}
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
                    onClick={() => handleRemoveItem(item.item2.id, false)}
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

export default Table;
