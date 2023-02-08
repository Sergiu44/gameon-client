import React, { useEffect, useState } from "react";
import GeneralPagination from "../../components/pagination/GeneralPagination";
import Range from "../../components/elements/Range";
import GeneralContainer from "../../components/containers/GeneralContainer";
import GeneralTable from "../../components/tables/GeneralTable";
import axios from "axios";
import GeneralModal from "../../components/modals/GeneralModal";
import { GameForm } from "../../components/forms/GameForm";
import { BundleForm } from "../../components/forms/BundleForm";
import useIsAdmin from "../../hooks/useIsAdmin";

const ListingPageScreen = (props) => {
  const isAdmin = useIsAdmin();
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
  }, [props.hasGames]);

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
    setShowModal(false);
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
        {isAdmin && (
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            class="block flex ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add {props.hasGames ? "Game" : "Bundle"}
          </button>
        )}
        <GeneralTable
          hasGames={props.hasGames}
          items={products.filter((product) => product.price <= priceValue)}
        />
        {props.hasPagination && <GeneralPagination />}
      </GeneralContainer>
      {showModal && (
        <GeneralModal
          handleSubmit={handleOnClick}
          setShowModal={setShowModal}
          hasGames={props.hasGames}
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
      )}
    </>
  );
};

export default ListingPageScreen;
