import React from "react";
import { useNavigate } from "react-router-dom";

const GeneralTable = (props) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10">
      {props.items.length > 0 &&
        props.items.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() =>
                navigate(
                  `/${props.hasGames ? "game-listing" : "bundle-listing"}/${
                    item.id
                  }`
                )
              }
              className={`${
                index % 2 ? "md:ml-4" : "md:mr-4"
              } overflow-hidden shadow-sm hover:border hover:border-gray-200 mb-8 cursor-pointer hover:shadow-xl`}
            >
              <div className="font-bold text-xl mb-2 px-6 mt-8">
                {item.title}
              </div>
              <img
                className="w-full p-6"
                src={`https://localhost:7114/${
                  props.hasGames ? "Game/image" : "Bundle/image"
                }/${item.id}`}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-xl mb-2">{item.description}</div>
                <span className="text-gray-700 text-base">{item.price}$</span>
                <span className="text-gray-700 text-base ml-2 line-through font-extrabold">
                  {item.rrp}$
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GeneralTable;
