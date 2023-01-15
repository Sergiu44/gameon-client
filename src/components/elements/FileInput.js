const FileInput = (props) => {
  return (
    <div class="flex justify-center">
      <div class="mb-3 w-full">
        <label
          for="formFile"
          class="form-label inline-block mb-2 text-gray-700"
        >
          {props.label}
        </label>
        <input
          onChange={(e) => props.onChange(e.target.files[0])}
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
          type="file"
          id="formFile"
        />
      </div>
    </div>
  );
};

export default FileInput;
