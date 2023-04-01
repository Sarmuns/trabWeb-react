import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = (props) => {
    const {data} = props

    return (
        <div className='control h-25 w-50 d-flex flex-column m-auto justify-content-between'>
            <h1 className='text-light m-auto mb-5'>Para geral curtir de graça!</h1>
            <div className='d-flex d-row'>
            {data.playlists.map(playlist => (
                <Link to={`/playlist/${playlist.id}`} key={playlist.id}className="link m-auto">
                    
                <img src={playlist.fotoPlaylist} className="card bg-success mx-1 my-2" alt={playlist.nome} />
                </Link>

))}
</div>
        </div>
    );
}

export default Card;