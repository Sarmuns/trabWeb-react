import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const AudioPlayer = ({ audioPath, setAllPlayersToFalse, index, isPlaying }) => {
    const audioRef = useRef(new Audio(audioPath));
    const [isP, setIsP] = useState(true)

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
        console.log('isPlaying  '+isPlaying)
        console.log('index  '+index)
        if (isPlaying) {
            handlePlay();
        } else {
            handlePause();
        }
    }, [isPlaying]);

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    return (
        <div>
            {isPlaying && isP ? (
                <FontAwesomeIcon onClick={handlePause} icon={faPause} />
            ) : (
                <FontAwesomeIcon onClick={handlePlay} icon={faPlay} />
            )}
            <audio src={audioPath} />
        </div>
    );
};

export default AudioPlayer;

