import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "../../components/elements/Select";
import useAuth from "../../hooks/useAuth";
import FileInput from "../../components/elements/FileInput";
import useIsAdmin from "../../hooks/useIsAdmin";
const ProductDetailsPage = (props) => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const token = useAuth();
  const isAdmin = useIsAdmin();
  const [selectedVariant, setSelectedVariant] = useState({
    title: "",
    description: "",
    price: 0,
    rrp: 0,
    image: "",
  });
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    rrp: 0,
    image: "",
    gameVariants: [],
  });

  const id = parseInt(window.location.href.split("/").at(-1));

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://localhost:7114/${
            !props.isBundle ? "Game/get/" : "Bundle/get/"
          }${id}`
        )
        .then(({ data }) => {
          setProduct(data);
          setSelectedVariant(data);
        });
    };
    getData();
  }, [id, props.isBundle]);

  const handleAddBasket = () => {
    if (selectedVariant.title !== product.title || props.isBundle) {
      axios.post(
        `https://localhost:7114/Basket/post/${
          props.isBundle
            ? "bundle/" + product.id
            : "variant/" + selectedVariant.id
        }`,
        [],
        {
          headers: token,
        }
      );
      navigate("/game-listing");
    }
  };

  const handleDeleteItem = () => {
    axios.delete(
      `https://localhost:7114/${props.isBundle ? "Bundle" : "Game"}/delete/` +
        product.id,
      [],
      {
        headers: token,
      }
    );
    navigate("/game-listing");
  };

  const handleAddWishlist = () => {
    if (selectedVariant.title !== product.title || props.isBundle) {
      axios.post(
        `https://localhost:7114/Wishlist/post/${
          props.isBundle
            ? "bundle/" + product.id
            : "variant/" + selectedVariant.id
        }`,
        [],
        {
          headers: token,
        }
      );
      navigate("/game-listing");
    }
  };

  const handleSubmitVariant = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("GameId", product.id);
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value);
      form[key] = "";
    }
    axios.post("https://localhost:7114/GameVariant/post", formData);
  };

  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={`https://localhost:7114/${
              selectedVariant.id === product.id ? "Game" : "GameVariant"
            }/image/${selectedVariant.id}`}
            onMouseEnter={(e) => {
              e.target.src = `https://localhost:7114/${
                selectedVariant.id === product.id ? "Game" : "GameVariant"
              }/hoverImage/${selectedVariant.id}`;
            }}
            onMouseLeave={(e) => {
              e.target.src = `https://localhost:7114/${
                selectedVariant.id === product.id ? "Game" : "GameVariant"
              }/image/${selectedVariant.id}`;
            }}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {selectedVariant.title || product.title || ""}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p class="leading-relaxed">
              {selectedVariant.description || product.description || ""}
            </p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <Select
                active
                options={product.gameVariants.map((variant) => ({
                  id: variant.id,
                  value: variant.title,
                }))}
                onChange={(e) => {
                  const variant = product.gameVariants.find((gv) => {
                    return (
                      gv.id ===
                      parseInt(e.target.options[e.target.selectedIndex].value)
                    );
                  });
                  if (variant) {
                    setSelectedVariant(variant);
                  } else {
                    setSelectedVariant(product);
                  }
                }}
              />
            </div>
            <div class="flex">
              <span class="mr-4 title-font font-medium text-2xl text-gray-900">
                {selectedVariant.price || product.price || ""}$
              </span>
              <span className="title-font text-2xl">rrp:</span>
              <span class="title-font font-medium text-2xl text-gray-900 line-through">
                {selectedVariant.rrp || product.rrp || ""}$
              </span>
              <button
                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                onClick={handleAddBasket}
              >
                Add to basket
              </button>
              <button
                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                onClick={handleAddWishlist}
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            {isAdmin && (
              <button
                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mt-2"
                onClick={handleDeleteItem}
              >
                Delete item
              </button>
            )}
          </div>
          {isAdmin && (
            <div className="mt-8">
              <h2 className="text-3xl text-bold mb-4">
                Add variant for {product.title}
              </h2>
              <form onSubmit={handleSubmitVariant}>
                <div class="form-group mb-6 flex items-center">
                  <label for="Title" class="form-label mr-2 text-gray-700">
                    Title
                  </label>
                  <input
                    value={form.Title}
                    type="text"
                    class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="Title"
                    aria-describedby="title"
                    placeholder="Enter title for game"
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        Title: e.target.value,
                      }))
                    }
                  />
                </div>
                <div class="form-group mb-6 flex items-center">
                  <label
                    for="Description"
                    class="form-label mr-2 text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    value={form.Description}
                    type="text"
                    class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="Description"
                    placeholder="Description"
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        Description: e.target.value,
                      }))
                    }
                  />
                </div>
                <FileInput
                  value={form.Image}
                  id={"Image"}
                  label={"* Select Image for game"}
                  onChange={(file) =>
                    setForm((prevForm) => ({ ...prevForm, Image: file }))
                  }
                />
                <FileInput
                  value={form.HoverImage}
                  id={"HoverImage"}
                  label={"Select HoverImage for game"}
                  onChange={(file) =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      HoverImage: file,
                    }))
                  }
                />
                <div class="form-group mb-6 flex items-center">
                  <label for="Price" class="form-label mr-2 text-gray-700">
                    Price
                  </label>
                  <input
                    value={form.Price}
                    type="number"
                    class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="Price"
                    aria-describedby="price"
                    placeholder="Price"
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        Price: parseInt(e.target.value, 10),
                      }))
                    }
                  />
                </div>
                <div class="form-group mb-6 flex items-center">
                  <label for="Rrp" class="form-label mr-2 text-gray-700">
                    Rrp
                  </label>
                  <input
                    value={form.Rrp}
                    type="number"
                    class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="Rrp"
                    aria-describedby="rrp"
                    placeholder="Rrp"
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        Rrp: parseInt(e.target.value),
                      }))
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add form
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
