import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = (props) => {
    return (
        <>
        <div>
            <div className="bg-black text-white">
                ddadadada
            </div>
        </div>
            <Outlet />
        </>
    )
}

export default MainLayout;