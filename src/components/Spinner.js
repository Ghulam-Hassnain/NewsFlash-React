import React from 'react';
import loader from "./newLoader.gif";
const Spinner = () => {
    return (
        <div className="text-center">
            <img width="60px" height="60px" src={loader} alt="Spinner" />
        </div>
    )
}

export default Spinner;