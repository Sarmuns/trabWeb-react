import React, { useEffect, useState } from "react";
import Musica from "../components/UserHomeFolder/Musica";
import SearchBar from "../components/Playlist/SearchBar";
import axios from "axios";
import "./userhome.css"


const UserHome = () => {
    const url = 'http://localhost:3000/musics';
    const playlistUrl = 'http://localhost:3000/userPlaylists';
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    const [playlistData, setPlaylistData] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
         setUser(JSON.parse(localStorage.getItem('user')));
    }, []) // eslint-disable-line
        

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
            <h1 className="text-light mx-3 pt-3">Bem vindo, {user.username}</h1>
            <SearchBar state={searchState} />
            <h2 className="text-light mx-3 mb-5">Músicas mais tocadas</h2>
            {loading ? (
                <div className="text-light">Carregando...</div>
            ) : (

                <div className="d-flex flex-row justify-content-center flex-wrap text-center">
                    {searchData.slice(0, 16).map((music, i) => (
                        <Musica
                           
                            key={i}
                            music={music}
                            index={i}
                            handleMusicClick={handleMusicClick}
                        />
                    ))}
                </div>

            )
            }
            <h2 className="text-light mx-3 pt-3">Playlists</h2>
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