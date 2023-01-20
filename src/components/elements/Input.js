export const Input = (props) => {
  return (
    <div className={props.className}>
      <label for="price" class="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div class="relative mt-1 rounded-md shadow-sm">
        {props.textBefore && (
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
        )}
        <input
          type={props.type}
          name="price"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          id="price"
          class="block w-full py-2 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};
