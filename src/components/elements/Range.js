const Range = (props) => {
  return (
    <div className="mb-8">
      <label
        htmlFor="minmax-range"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.title}
        <span className="float-right">{props.value}</span>
      </label>
      <input
        id="minmax-range"
        type="range"
        min="0"
        max={props.maxValue}
        value={props.value}
        onChange={(val) => props.onChange(val.target.valueAsNumber)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default Range;
