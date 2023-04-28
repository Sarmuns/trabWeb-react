import React, { useEffect } from "react";
import { useState } from "react";
import SearchBar from "../components/Playlist/SearchBar";
import axios from "axios";


const UserHome = () => {
    const url = 'http://localhost:3000/musics';
    const playlistUrl = 'http://localhost:3000/userPlaylists';
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    const [playlistData, setPlaylistData] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))

    const searchState = (state) => {
        setSearch(state);
        console.log(search)
    }

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setSearchData(response.data);
                localStorage.setItem('musics', JSON.stringify(response.data[0]))
            })
            .catch(error => {
                console.error(error)
            })

        axios.get(playlistUrl, { params: { userid: user.id } })
            .then(response => {
                setPlaylistData(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            }
            )
    }, [])



    useEffect(() => {
        if (search === '' || search === null || search === undefined || search === ' ') {
            setSearchData(data);
        } else {
            setSearchData(data.filter(obj => obj.nome.includes(search)));
            console.log(data)
            console.log(searchData)
        }

    }, [search])

    const handleMusicClick = (i) => {
        console.log(i);
    }





    return (
        <div className="bg-dark">
            <h1 className="text-light pt-3">Bem vindo, {user.username}</h1>
            <SearchBar state={searchState} />
            <h2 className="text-light pt-3">Músicas mais tocadas</h2>
            {loading ? (
                <div className="text-light">Carregando...</div>
            ) : (

                <div className="d-flex flex-row justify-content-center flex-wrap">
                    {searchData.slice(0, 10).map((music, i) => (
                        <div
                            className="text-light mx-3 my-3"
                            key={i}
                            onClick={() => handleMusicClick(i)}
                        >
                            {music.nome.charAt(0).toUpperCase() + music.nome.slice(1)}
                        </div>
                    ))
                    }
                </div>
            )
            }
            <h2 className="text-light pt-3">Playlists</h2>
            {loading ? (
                <div className="text-light">Carregando...</div>
            ) : (
                <div>
                    {playlistData.map((playlist, i) => (
                        <div
                            className="text-light mx-3 my-3"
                            key={i}
                            onClick={() => handleMusicClick(i)}
                        >
                            {playlist.nome.charAt(0).toUpperCase() + playlist.nome.slice(1)}
                        </div>

                    )
                    )}
                </div>

            )
            }
        </div >
    )
}
export default UserHome;