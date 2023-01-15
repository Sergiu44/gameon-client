import FileInput from "../elements/FileInput";
import Select from "../elements/Select";

export const GameForm = (props) => {
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
          placeholder="Enter title for game"
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
            props.setForm((prevForm) => ({
              ...prevForm,
              Rrp: parseInt(e.target.value),
            }))
          }
        />
      </div>
      <Select
        options={props.categories}
        defaultText="Select a category"
        label="Select a category for this game"
        onChange={(e) =>
          props.setForm((prevForm) => ({ ...prevForm, Type: e.target.value }))
        }
      />
    </form>
  );
};
