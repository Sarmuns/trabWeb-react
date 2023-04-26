import React, { useState, useEffect } from "react";
import SearchBar from "../components/Playlist/SearchBar";
import Card from "../components/Playlist/Card";
import axios from "axios";

const Playlist = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/playlists")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg bg-dark d-flex flex-column">
      <SearchBar />
      {isLoading ? <h1>Loading...</h1> : <Card data={data} />}
      
    </div>
  );
};

export default Playlist;
