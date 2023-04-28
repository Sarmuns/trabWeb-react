import React, { useState } from "react";


const SearchBar = ({state}) => {

    const handleChange = (event) => {
        state(event.target.value);
    }

    return (
        <div className="w-75 py-5 input-group d-flex mx-auto">
            <input
                type="text"
                className="form-control bg-dark-subtle"
                placeholder="Busque uma música"
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;