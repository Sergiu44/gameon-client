import React from 'react';
import {Outlet} from "react-router-dom";
import MainHeader from "../components/headers/MainHeader";
import GeneralFooter from "../components/footers/GeneralFooter";

const MainLayout = (props) => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <GeneralFooter />
        </>
    )
}

export default MainLayout;