/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserPlaylistView = () => {
    const { id } = useParams(); //real music ID
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(JSON.parse(localStorage.getItem('userPlaylist')));
    const musics = JSON.parse(localStorage.getItem('musics'));
    const user = JSON.parse(localStorage.getItem('user'));
    const [filteredData, setFilteredData] = useState(data.filter(item => item.id == id)); // eslint-disable-line
    const [musicIdList, setMusicIdList] = useState(filteredData[0].musics);
    const samplePlaylist = '/playlist/sample.jpg'
    const navigate = useNavigate();
    const [playlistMusics, setPlaylistMusics] = useState([]);
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState(filteredData[0].name);
    
    useEffect(() => { //update playlist musics when musicIdList change (add or delete)
        let musicList = [];
        musics.map((x) => {
            if (musicIdList.includes(parseInt(x.id))) {
                musicList.push(x)
            }
            return true;
        });
        setPlaylistMusics(musicList);
        setIsLoading(false);

    }, [musicIdList]); //eslint-disable-line
    useEffect(() => { //initial .get to get user playlists and filter them by id.
        axios.get(`http://localhost:3000/userplaylists`, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userid: user.id
            }
        })
            .then(response => {
                setData(response.data); //eslint-disable-line
                let filter = response.data.filter(item => item.id == id) //eslint-disable-line
                filter = [...filter] //eslint-disable-line
                setFilteredData(filter)
                localStorage.setItem('userPlaylist', JSON.stringify(response.data))

            })
            .catch(error => {
                console.error(error)
            }
            )
    }, [])
    const handleDelete = () => { //delete playlist
        axios.delete(`http://localhost:3000/userplaylists/${id}`)
            .then(response => {
                console.log(response.data);
                navigate('/dashboard');
            })
            .catch(error => {
                console.error(error);
                alert('Erro ao deletar playlist');
            });
    }
    const handleRemove = (i) => { //delete music
        let newIdList = [...musicIdList];
        let index = newIdList.indexOf(parseInt(i));
        if (index > -1) {
            newIdList.splice(index, 1);
        }
        //newIdList esta correto


        axios.put(`http://localhost:3000/userplaylists/${id}`, {
            name: filteredData[0].name,
            cover: filteredData[0].cover,
            musics: newIdList,
            userid: user.id
        })
            .then(function (response) {
                console.log(response);
                setMusicIdList(newIdList)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const handleAdd = () => { //add music
        let newIdList = [...musicIdList];
        let randomInt;
        do {
            randomInt = Math.floor((Math.random() * 20) + 1);
        } while (newIdList.includes(randomInt));
        newIdList.push(randomInt);


        axios.put(`http://localhost:3000/userplaylists/${id}`, {
            name: filteredData[0].name,
            cover: filteredData[0].cover,
            musics: newIdList,
            userid: user.id
        })
            .then(function (response) {
                console.log(response);
                setMusicIdList(newIdList);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const handleEditState = () => { //edit state for page
        setIsEdit(!isEdit);
    }
    const handleEdit = (name) => { //edit playlist name
        axios.put(`http://localhost:3000/userplaylists/${id}`, {
            name: name,
            cover: filteredData[0].cover,
            musics: filteredData[0].musics,
            userid: user.id
        })
        setIsEdit(!isEdit);
        setFilteredData([{ ...filteredData[0], name: name }])
    }
    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="bg-black py-3">


            <div className="container w-100 py-3 bg-dark border border-white">
                <div className="row align-items-center">
                    <div className="col-auto m-3">
                        <img src={data[0].cover ? '/' + filteredData[0].cover : samplePlaylist} alt="Profile Pic" className="rounded-circle" width="100" height="100" />
                    </div>
                    <div className="col">
                        {isEdit ? (
                            <>
                                <input type="text" className="form-control h2" defaultValue={filteredData[0].name} onChange={handleInputChange} />
                                <button className="btn btn-success" onClick={() => handleEdit(name)}>Enviar</button>
                            </>
                        ) : (
                            <h1 className="h2 text-white">{filteredData[0].name}</h1>
                        )
                        }
                        <button
                            type="button"
                            className="btn btn-warning mx-2"
                            onClick={handleEditState}
                        >
                            Editar
                        </button>
                        {isEdit ? (
                            <button
                            onClick={handleDelete}
                            type="button"
                            className="btn btn-danger"
                            >
                            Deletar Playlist
                        </button>
                        ) : null
                        }
                    </div>
                </div>
                <ul className="list-group list-group-flush ">
                    {isLoading ? (
                        <div>Carregando....</div>
                    ) : (


                        <>
                            {
                                playlistMusics.map((music, i) => (
                                    <li className="list-group-item bg-secondary" key={i}>
                                        <div className="row align-items-center ">
                                            <div className="col-auto">
                                                <img src={'/' + music.imgpath} alt={music.nome} style={{ objectFit: 'cover' }} className="rounded" width="64" height="64" />
                                            </div>
                                            <div className="col">
                                                <h3 className={music.nome}>{music.nome}</h3>
                                                <p className="mb-0">{music.artista}</p>
                                            </div>
                                            <div className="col-auto">
                                                <button
                                                    onClick={() => handleRemove(music.id)}
                                                    type="button"
                                                    className="btn btn-danger mx-2"
                                                >
                                                    Remover
                                                </button>
                                            </div>
                                        </div>

                                    </li>


                                ))
                            }
                        </>
                    )}
                    <li className="list-group-item  bg-secondary" >
                        <button
                            type="button"
                            className="btn btn-success mx-2"
                            onClick={handleAdd}
                        >
                            Adicionar musica
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserPlaylistView;
