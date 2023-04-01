import React from "react";
import SearchBar from "../components/Playlist/SearchBar";
import Card from "../components/Playlist/Card";
import data from "../assets/playlists.json";

const Playlist = () => {
    return (
        <div className="bg bg-dark d-flex flex-column">
            <SearchBar />
            <Card data={data}/>
        </div>
    )

}

export default Playlist