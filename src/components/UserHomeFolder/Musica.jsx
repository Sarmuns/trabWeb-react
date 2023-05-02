import React from 'react';
import { useRef, useEffect } from 'react';

function Musica(props) {
  const { isPlaying } = props;
  const audioRef = useRef(new Audio(props.music.audiopath));

  const handlePlay = () => {
    audioRef.current.pause();
    props.setAllPlayersToFalse(props.index);
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
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
    <div className="mx-4">
      <img
        src={props.music.imgpath}
        alt={props.music.nome}
        style={{ width: '180px', height: '180px', objectFit: 'cover' }}
        className="music"
        onClick={isPlaying ? handlePause : handlePlay}
      />
      <div className="text-center text-white">{props.music.nome}</div>
    </div>
  );
}

export default Musica;
