import React from 'react';
import Select from "../elements/Select";

const GeneralTable = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            {props.items.map((item, index) => {
                return <div
                    className={`${index % 2 ? 'md:ml-4' : 'md:mr-4'} overflow-hidden shadow-lg border border-gray-200 mb-8`}>
                    <img className="w-full p-6" src="https://v1.tailwindcss.com/img/card-top.jpg"
                         alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <span className="text-gray-700 text-base">
                            price
                        </span><span className="text-gray-700 text-base ml-2 line-through font-extrabold">rrp</span>
                    </div>
                    <Select className="mx-6 mt-4 mb-6"/>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-11 w-5/6 mb-4 px-5 py-2.5 text-center relative">Add to basket
                    </button>
                </div>
            })}
        </div>
    )
}

export default GeneralTable;