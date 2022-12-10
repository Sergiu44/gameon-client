import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <header className="shadow shadow-lg border-b-2 border-gray-300">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 my-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <span
                            className="self-center text-4xl whitespace-nowrap dark:text-white">Game</span><span className="text-cyan-600 text-4xl font-semibold self-center uppercase -tracking-[.2rem] ">On</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="/login"
                              className="text-gray-700 bg-gray-100 border border-3 border-gray-300 dark:text-white hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-6 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
                            in</Link>
                        <Link to="/register"
                              className="bg-cyan-500 hover:bg-cyan-400 text-white ml-2 focus:ring-2 focus:ring-black font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
                            started</Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/game-listing"
                                      className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                      aria-current="page">Games</Link>
                            </li>
                            <li>
                                <Link to="/bundle-listing"
                                      className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                      aria-current="page">Bundles</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader;