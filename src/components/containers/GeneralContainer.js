import React from 'react';

const GeneralContainer = (props) => {
    return (
        <div className={`w-5/12 md:w-7/12 lg:w-9/12 mx-auto ${props.className}`}>
            {props.children}
        </div>
    )
}

export default GeneralContainer;