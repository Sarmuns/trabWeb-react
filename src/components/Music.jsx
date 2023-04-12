import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { useParams } from 'react-router-dom';

const Music = (props) => {
    const { data } = props;
    const { id } = useParams();
    const [playersState, setPlayersState] = useState(Array(data.playlists[id].musicas.length).fill(false));

    const setAllPlayersToFalse = (index) => {
        const newPlayersState = Array(playersState.length).fill(false);
            newPlayersState[index] = true;
            setPlayersState(newPlayersState);
    };

    return (
        <table className="table table-dark table-striped mb-0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Artista</th>
                    <th scope="col">Album</th>
                </tr>
            </thead>
            <tbody>
                {data.playlists[id].musicas.map((musica, i) => (
                    <tr key={i}>
                        <th scope="row">
                            <AudioPlayer 
                                audioPath={musica.audioFile}
                                setAllPlayersToFalse={setAllPlayersToFalse}
                                index={i}
                                isPlaying={playersState[i]}
                            />
                        </th>
                        <td>{musica.nome}</td>
                        <td>{musica.artista}</td>
                        <td>{musica.album}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}

export default Music;

