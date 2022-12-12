import React from 'react';

const BasketTable = (props) => {
    return (

        <div className="overflow-x-auto relative mt-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Product name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Variant
                    </th>
                    <th scope="col" className="py-3 px-6 text-right">
                        Quantity
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Price
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => {
                    return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">
                                Variant1222222222222222222222222222222222222
                            </td>
                            <td className="py-4 px-6">
                                <div className="">
                                    <div className="inline-flex rounded-md shadow-sm mb-4 justify-end" role="group">
                                        <button type="button"
                                                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ml-autos">
                                            +
                                        </button>
                                        <input type="text" id="quantity"
                                               className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-1/4"/>
                                        <button type="button"
                                                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                            -
                                        </button>
                                    </div></div>
                            </td>
                            <td className="py-4 px-6">
                                $2999
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    )
}

export default BasketTable;