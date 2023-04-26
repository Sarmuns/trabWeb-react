import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const AudioPlayer = ({ audioPath, setAllPlayersToFalse, index, isPlaying, musica }) => {
    const audioRef = useRef(new Audio(audioPath));
    const [isP, setIsP] = useState(true) //controlar a renderização dos icones

    const handlePlay = () => {
        setAllPlayersToFalse(index);
        audioRef.current.play();
        setIsP(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsP(false);
    };

    useEffect(() => {
        if (isPlaying) {
            handlePlay();
        } else {
            handlePause();
        }
        /* eslint-disable-next-line */
    }, [isPlaying]);


    return (
        <tr>
            {isPlaying && isP ? (
                <td>
                    <FontAwesomeIcon onClick={handlePause} icon={faPause} />
                </td>

            ) : (
                <td>
                    <FontAwesomeIcon onClick={handlePlay} icon={faPlay} />
                </td>
            )}

            <td className={isPlaying && isP ? "text-success" : ""}>{musica.nome}</td>
            <td className={isPlaying && isP ? "text-success" : ""}>{musica.artista}</td>
            <td className={isPlaying && isP ? "text-success" : ""}>{musica.album}</td>


        </tr>

    );
};

export default AudioPlayer;

