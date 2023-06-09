/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import Musica from "../components/UserHomeFolder/Musica";
import UserPlaylistCard from "../components/UserHomeFolder/UserPlaylistCard";
import SearchBar from "../components/Playlist/SearchBar";
import axios from "axios";
import "./userhome.css"


const UserHome = () => {
    const url = 'http://localhost:3000/musics';
    const playlistUrl = 'http://localhost:3000/userplaylists';
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    const [playlistData, setPlaylistData] = useState([]);
    const [hasPlaylists, setHasPlaylists] = useState(false);
    const [playersState, setPlayersState] = useState(Array(searchData.length).fill(false));
    const user = JSON.parse(localStorage.getItem('user'));


    const searchState = (state) => {
        setSearch(state);
        console.log(search)
    }

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setSearchData(response.data);
                localStorage.setItem('musics', JSON.stringify(response.data))
            })
            .catch(error => {
                console.error(error)
            })

        axios.get(`http://localhost:3000/userplaylists`, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userid: user.id
            }
        })
            .then(response => {
                setPlaylistData(response.data);
                localStorage.setItem('userPlaylist', JSON.stringify(response.data))
                setHasPlaylists(true)
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

    const setAllPlayersToFalse = (index) => {
        const newPlayersState = Array(playersState.length).fill(false);
        newPlayersState[index] = true;
        setPlayersState(newPlayersState);
    };

    const handleCreatePlaylist = () => {
        const putData = {
            userid: user.id,
            name: "Nova Playlist",
            musics: []
          };
          
          axios.post(playlistUrl, putData)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              // handle error
              console.log(error);
            });
            window.location.reload()
    }










    return (
        <div className="bg-dark">
            <h1 className="text-light mx-3 pt-3">Bem vindo, {user.username}</h1>
            <SearchBar state={searchState} />
            <>
                <h2 className="text-light mx-3 mb-5">Músicas mais tocadas</h2>
                {loading ? (
                    <div className="text-light">Carregando...</div>
                ) : (

                    <div className="d-flex flex-row justify-content-center flex-wrap text-center">
                        {searchData.slice(0, 16).map((music, i) => (
                            <Musica
                                setAllPlayersToFalse={setAllPlayersToFalse}
                                key={i}
                                music={music}
                                index={i}
                                isPlaying={playersState[i]}
                            />
                        ))}
                    </div>

                )
                }
            </>
            <>
                <h2 className="text-light mx-3 mb-5">Suas Playlists</h2>
                {loading ? (
                    <div className="text-light">Carregando...</div>
                ) : (

                    <div className="d-flex flex-row justify-content-center flex-wrap text-center">
                        {playlistData.map((playlist, i) => (
                            <UserPlaylistCard
                                key={i}
                                playlist={playlist}
                            />
                        ))}
                        <div
                            onClick={handleCreatePlaylist}
                            className="mx-4">
                            <img
                                src={'playlist/addSign.png'}
                                alt='adicione uma playlist'
                                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                                className="playcover"
                            />
                            <div 
                            onClick={handleCreatePlaylist}
                            className="text-center text-white"
                            >Crie uma nova playlist</div>
                        </div>
                    </div>

                )
                }
            </>
        </div >
    )
}
export default UserHome;