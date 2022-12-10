import React from 'react';
import GeneralPagination from "../../components/pagination/GeneralPagination";
import Range from "../../components/elements/Range";
import GeneralContainer from "../../components/containers/GeneralContainer";
import Select from "../../components/elements/Select";

const ListingPageScreen = (props) => {
    return (
        <GeneralContainer className="mt-24">
            <Range title="Price" maxValue="1000"/>
            {props.hasPagination &&
                <>
                    <Select/>
                    <GeneralPagination/>
                </>
            }
        </GeneralContainer>
    )
}

export default ListingPageScreen;