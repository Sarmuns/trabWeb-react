import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


const AudioPlayer = ({ audioPath }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioPath));

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    }

    return (
        <div>
            {isPlaying ? (
                <FontAwesomeIcon onClick={handlePause} icon={faPause} />
            ) : (
                <FontAwesomeIcon onClick={() => { stopAudio(); handlePlay() }} icon={faPlay} />
            )}
        </div>
    );
};

export default AudioPlayer;