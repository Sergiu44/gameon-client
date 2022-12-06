import React from 'react';
import {Outlet} from "react-router-dom";

const GeneralLayout = (props) => {
    return (
        <>
        General layout
            <Outlet />
        </>
    )
}

export default GeneralLayout;