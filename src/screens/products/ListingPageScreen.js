import React from 'react';
import GeneralPagination from "../../components/pagination/GeneralPagination";
import Range from "../../components/elements/Range";
import GeneralContainer from "../../components/containers/GeneralContainer";
import Select from "../../components/elements/Select";
import GeneralTable from "../../components/tables/GeneralTable";

const ListingPageScreen = (props) => {
    return (
        <GeneralContainer className="mt-24">
            <Range title="Price" maxValue="1000"/>
            {props.hasPagination &&
                    <Select/>
            }
            <GeneralTable items={[1, 2,3]} />
            {props.hasPagination &&
                <GeneralPagination/>
            }
        </GeneralContainer>
    )
}

export default ListingPageScreen;