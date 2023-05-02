import React from 'react';
import { Link } from 'react-router-dom';

function UserPlaylistCard({ playlist }) {
    const samplePlaylist = '/playlist/sample.jpg'
    return (
        <Link
        className='text-decoration-none'
            to={`/userPlaylist/${playlist.id}`} //userplaylistview
        >
            <div className="mx-4">
                <img
                    src={playlist.cover ? playlist.cover : samplePlaylist}
                    alt={playlist.name}
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                    className="playcover rounded-circle"
                />
                <div className="text-center text-white">{playlist.name}</div>
            </div>
        </Link>
    );
}

export default UserPlaylistCard;