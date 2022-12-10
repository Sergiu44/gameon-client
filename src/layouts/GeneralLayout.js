import React from 'react';
import {Outlet} from "react-router-dom";
import GeneralDashboard from "../components/dashboards/GeneralDashboard";

const GeneralLayout = (props) => {
    return (
        <div className="flex">
            <GeneralDashboard />
            <Outlet />
        </div>
    )
}

export default GeneralLayout;