import React from 'react';
import GeneralContainer from "../../components/containers/GeneralContainer";
import BasketTable from "../../components/tables/BasketTable";

const BasketScreen = (props) => {
    return (
        <GeneralContainer className="mt-24">
            {[].length ? <>
                <BasketTable items={[1, 2, 3]}/>
                <h1 className="text-black text-4xl font-extrabold font-mono">My Bag</h1>
            </> : <div className="flex mx-auto flex-col items-center mt-44">
                <svg className="w-36 h-36 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h1 className="text-gray-500 text-3xl font-bold">Your basket is empty!</h1>
            </div>}
        </GeneralContainer>
    )
}

export default BasketScreen;