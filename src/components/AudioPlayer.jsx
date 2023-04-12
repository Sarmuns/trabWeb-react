import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const AudioPlayer = ({ audioPath, setAllPlayersToFalse, index, isPlaying }) => {
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
    }, [isPlaying]);

    return (
        <div>
            {isPlaying && isP ? (
                <FontAwesomeIcon onClick={handlePause} icon={faPause} />
            ) : (
                <FontAwesomeIcon onClick={handlePlay} icon={faPlay} />
            )}
        </div>
    );
};

export default AudioPlayer;

