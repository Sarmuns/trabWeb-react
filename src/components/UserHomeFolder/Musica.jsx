import React from 'react';

function Musica(props) {
  return (
    <div className="mx-4">
      <img
        src={props.music.imgpath}
        alt={props.music.nome}
        style={{ width: '180px', height: '180px', objectFit: 'cover' }}
        className="music"
        onClick={() => props.handleMusicClick(props.index)}
      />
      <div className="text-center text-white">{props.music.nome}</div>
    </div>
  );
}

export default Musica;
