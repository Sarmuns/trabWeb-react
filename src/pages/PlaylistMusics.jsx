import React from "react";
import Music from "../components/Music";
import { useState, useEffect } from "react";
import axios from "axios";

const PlaylistMusics = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3000/playlists")
            .then((response) => {
                setData(response.data);
                console.log(response.data)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading ? <h1>Loading...</h1> : <Music data={data} />}
            {/* <Music data={data} /> */}
        </>
    )
}

export default PlaylistMusics