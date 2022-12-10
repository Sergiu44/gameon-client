import React, {useState} from 'react';

const Range = (props) => {
    const [value, setValue] = useState(props.maxValue);
    return (
        <div className="mb-8">
            <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900">{props.title}<span className="float-right">{value}</span></label>
            <input id="minmax-range" type="range" min="0" max={props.maxValue} value={value}
                   onChange={val => setValue(val.target.valueAsNumber)}
                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        </div>
    )
}

export default Range;