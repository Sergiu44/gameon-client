import React from 'react';
import {Link, Outlet} from "react-router-dom";
import GeneralCarousel from "../../components/carousels/GeneralCarousel";

const MainScreen = (props) => {
    return (
        <div className="bg-gray-100 pt-10 h-screen">
            <div className="max-w-7xl mx-auto">
                <section className="bg-white dark:bg-gray-900">
                    <div
                        className="gap-8 items-center mx-auto w-full xl:gap-16 md:grid md:grid-cols-2">
                        <img className="w-full dark:hidden"
                             src="https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs="
                             alt="dashboard image" />
                        <img className="w-full hidden dark:block"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                             alt="dashboard image" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's
                                create more tools and ideas that brings us together.</h2>
                            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite
                                helps you connect with friends and communities of people who share your interests.
                                Connecting with your friends and family as well as discovering new ones is easy with
                                features like Groups.</p>
                            <Link to="/register"
                               className="inline-flex items-center text-white bg-cyan-800 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                                Get started
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <GeneralCarousel />
        </div>
    )
}
export default MainScreen;