import React from "react";

const SearchBar = () => {

    return (
    <div class="w-75 py-5 input-group d-flex mx-auto">
        <input type="text" class="form-control bg-dark-subtle" placeholder="Busque uma música"
            aria-label="Busque uma música" aria-describedby="basic-addon2"/>
            <div class="input-group-append mx-3">
                <button type="button" class="btn btn-success btn-lg">Buscar</button>
            </div>
    </div>
    )
}

export default SearchBar;