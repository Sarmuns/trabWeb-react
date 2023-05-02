import React from "react";
import { useParams } from "react-router-dom";

const UserPlaylistView = () => {
    const { id } = useParams(); //real music ID
    const data = JSON.parse(localStorage.getItem('userPlaylist'));
    const filteredData = data.filter(item => item.id == id);
    const samplePlaylist = '/playlist/sample.jpg' // eslint-disable-line


    return (
        <div className="bg-black py-3">


            <div className="container w-100 py-3 bg-dark border border-white">
                <div className="row align-items-center">
                    <div className="col-auto m-3">
                        <img src={filteredData[0].cover ? '/' + filteredData[0].cover : samplePlaylist} alt="Profile Pic" className="rounded-circle" width="100" height="100" />
                    </div>
                    <div className="col">
                        <h1 className="h2 text-white">{filteredData[0].name}</h1>
                        <button
                            type="button"
                            className="btn btn-warning mx-2"
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                        >
                            Deletar
                        </button>
                    </div>
                </div>
                <ul className="list-group list-group-flush ">
                    {filteredData[0].musics.map((music, i) => (
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
                                        type="button"
                                        className="btn btn-danger mx-2"
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>

                        </li>


                    ))}
                    <li className="list-group-item  bg-secondary" >
                        <button
                            type="button"
                            className="btn btn-success mx-2"
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
