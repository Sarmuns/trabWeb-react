import React from "react";
import Music from "../components/Music";
import data from "../assets/playlists.json";

const PlaylistMusics = () => {

    return(<Music data={data}/>)
}

export default PlaylistMusics