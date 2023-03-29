import React, { useState } from "react";


const SearchBar = () => {

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    return (
        <div className="w-75 py-5 input-group d-flex mx-auto">
            <input
                type="text"
                className="form-control bg-dark-subtle"
                placeholder="Busque uma música"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-group-append mx-3">
                <button type="button" className="btn btn-success btn-lg">Buscar</button>
            </div>
        </div>
    )
}

export default SearchBar;