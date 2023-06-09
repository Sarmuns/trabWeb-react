import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Music = (props) => {
    const { data } = props;
    const { id } = useParams();
    const [playersState, setPlayersState] = useState(Array(data[id].musicas.length).fill(false));
    if (data[id] == null) {
        return (
            <Navigate to="/error404" />
        )

    } else {

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
                    {data[0].musicas.map((musica, i) => (
                        <AudioPlayer
                            key={i}
                            audioPath={musica.audiofile}
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

