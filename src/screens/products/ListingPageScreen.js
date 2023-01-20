import React, { useEffect, useState } from "react";
import GeneralPagination from "../../components/pagination/GeneralPagination";
import Range from "../../components/elements/Range";
import GeneralContainer from "../../components/containers/GeneralContainer";
import GeneralTable from "../../components/tables/GeneralTable";
import axios from "axios";
import GeneralModal from "../../components/modals/GeneralModal";
import { GameForm } from "../../components/forms/GameForm";
import { BundleForm } from "../../components/forms/BundleForm";

const ListingPageScreen = (props) => {
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [variants, setVariants] = useState([]);
  const [priceValue, setPriceValue] = useState(1000);
  const [form, setForm] = useState(
    props.hasGames
      ? {
          Title: "",
          Description: "",
          Image: "",
          HoverImage: "",
          Price: 0,
          Rrp: 0,
          Type: "",
        }
      : {
          Title: "",
          Description: "",
          Category: "",
          Price: 0,
          Rrp: 0,
          Image: "",
          HoverImage: "",
          GameVariantsId: [],
        }
  );
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://localhost:7114/${props.hasGames ? "Game" : "Bundle"}/get`)
        .then(({ data }) => {
          setProducts(data);
        });
    };
    getData();

    const getCategories = () => {
      axios.get(`https://localhost:7114/Category/get`).then(({ data }) => {
        const categoryData = data.map((category) => ({
          value: category.categoryName,
          id: category.id,
        }));
        setCategories(categoryData);
      });
    };

    const getVariants = () => {
      axios.get(`https://localhost:7114/GameVariant/get`).then(({ data }) => {
        setVariants(data);
      });
    };

    getCategories();
    getVariants();
  }, []);

  const handleOnClick = () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value);
      form[key] = "";
    }
    axios.post(
      `https://localhost:7114/${props.hasGames ? "Game" : "Bundle"}/post`,
      formData
    );
  };

  return (
    <>
      <GeneralContainer className="mt-24">
        <Range
          title="Price"
          maxValue="1000"
          value={priceValue}
          onChange={(value) => setPriceValue(value)}
        />
        <button
          type="button"
          class="px-6
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
          Add {props.hasGames ? "Game" : "Bundle"}
        </button>
        <GeneralTable
          hasGames={props.hasGames}
          items={products.filter((product) => product.price <= priceValue)}
        />
        {props.hasPagination && <GeneralPagination />}
      </GeneralContainer>
      <GeneralModal
        handleOnClick={handleOnClick}
        title={
          props.hasGames ? "Add Game to the list" : "Add Bundle to the list"
        }
      >
        {props.hasGames ? (
          <GameForm setForm={setForm} categories={categories} />
        ) : (
          <BundleForm
            setForm={setForm}
            categories={categories}
            variants={variants}
            selectedVariants={selectedVariants}
            setSelectedVariants={setSelectedVariants}
          />
        )}
      </GeneralModal>
    </>
  );
};

export default ListingPageScreen;
