import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Music = (props) => {
    const { data } = props;
    const { id } = useParams();
    if (data.playlists[id] == null) {
        return (
            <Navigate to="/error404" />
        )

    } else {
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
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Artista</th>
                        <th scope="col">Album</th>
                    </tr>
                </thead>
                <tbody>
                    {data.playlists[id].musicas.map((musica, i) => (
                        <AudioPlayer
                            key={i}
                            audioPath={musica.audioFile}
                            musica={musica}
                            setAllPlayersToFalse={setAllPlayersToFalse}
                            index={i}
                            isPlaying={playersState[i]}
                        />

                    ))}
                </tbody>
            </table>
        )
    }
}

export default Music;

