import React, { useState, useEffect } from "react";
import GeneralContainer from "../../components/containers/GeneralContainer";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Table from "../../components/tables/Table";
const WishlistScreen = (props) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const token = useAuth();

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://localhost:7114/Wishlist/get", {
          headers: token,
        })
        .then(({ data }) => setWishlistItems(data));
    };
    getData();
    console.log(wishlistItems);
  }, []);
  return (
    <GeneralContainer className="mt-24">
      <h1 className="text-black text-4xl font-extrabold font-mono">
        My Wishlist
      </h1>
      {wishlistItems.length ? (
        <>
          <Table items={wishlistItems} isWishlist={true} />
        </>
      ) : (
        <div className="flex mx-auto flex-col items-center mt-44">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-36 h-36 text-red-200"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>

          <h1 className="text-gray-500 text-3xl font-bold">
            Your wishlist is empty!
          </h1>
        </div>
      )}
    </GeneralContainer>
  );
};

export default WishlistScreen;
