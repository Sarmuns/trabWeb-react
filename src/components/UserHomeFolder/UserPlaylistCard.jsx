import React from 'react';

function UserPlaylistCard({ playlist }) {
    const samplePlaylist = '/playlist/sample.jpg'
    return (
        <div className="mx-4">
            <img
                src={playlist.cover ? playlist.cover : samplePlaylist}
                alt={playlist.name}
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                className="playcover"
            />
            <div className="text-center text-white">{playlist.name}</div>
        </div>
    );
}

export default UserPlaylistCard;