import Select from "../elements/Select";
import FileInput from "../elements/FileInput";
import { useState } from "react";

export const BundleForm = (props) => {
  return (
    <form>
      <div class="form-group mb-6 flex items-center">
        <label for="Title" class="form-label mr-2 text-gray-700">
          Title
        </label>
        <input
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
          placeholder="Enter title for bundle"
          onChange={(e) =>
            props.setForm((prevForm) => ({
              ...prevForm,
              Title: e.target.value,
            }))
          }
        />
      </div>
      <div class="form-group mb-6 flex items-center">
        <label for="Description" class="form-label mr-2 text-gray-700">
          Description
        </label>
        <input
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
            props.setForm((prevForm) => ({
              ...prevForm,
              Description: e.target.value,
            }))
          }
        />
      </div>
      <FileInput
        id={"Image"}
        label={"* Select Image for game"}
        onChange={(file) =>
          props.setForm((prevForm) => ({ ...prevForm, Image: file }))
        }
      />
      <FileInput
        id={"HoverImage"}
        label={"Select HoverImage for game"}
        onChange={(file) =>
          props.setForm((prevForm) => ({
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
            props.setForm((prevForm) => ({
              ...prevForm,
              Price: e.target.value,
            }))
          }
        />
      </div>
      <div class="form-group mb-6 flex items-center">
        <label for="Rrp" class="form-label mr-2 text-gray-700">
          Rrp
        </label>
        <input
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
            props.setForm((prevForm) => ({ ...prevForm, Rrp: e.target.value }))
          }
        />
      </div>
      <Select
        id="variants"
        className={"mt-3"}
        variantSelect={false}
        options={props.categories}
        defaultText="Select a category"
        label="Select a category for this game"
        onChange={(e) => {
          props.setForm((prevForm) => ({ ...prevForm, Type: e.target.value }));
        }}
      />
      <Select
        className={"mt-5"}
        variantSelect={true}
        multiselect
        onChange={(ev) => {
          props.setForm((prevForm) => ({
            ...prevForm,
            GameVariantsId: [...prevForm.GameVariantsId, ev.target.value],
          }));
          const variants = [
            ...props.selectedVariants,
            {
              id: parseInt(ev.target.value, 10),
              text: ev.target.options[ev.target.selectedIndex].text.split(
                " "
              )[0],
            },
          ];
          props.setSelectedVariants(variants);
        }}
        options={props.variants}
        defaultText="Select a category"
        label="Select a category for this game"
      />
      <div className="flex my-2">
        {props.selectedVariants.length > 0 &&
          props.selectedVariants.map((variant, index) => {
            return (
              <span
                key={index}
                className="bg-blue-200 flex rounded rounded-lg p-2"
              >
                <span>{variant.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                  onClick={() => {
                    const variantId = props.selectedVariants.findIndex(
                      (el) => el.id === variant.id
                    );
                    props.setSelectedVariants((prev) =>
                      prev.splice(variantId, 1)
                    );
                    const el = document.getElementById("variants");
                    el.selectedIndex = 0;
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            );
          })}
      </div>
    </form>
  );
};
