import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = (props) => {
    const { data } = props

    return (
        <div className='control d-flex flex-column'>
            <h1
                className='text-light mb-5 m-auto'
            >Para geral curtir de graça!</h1>
            <div className='cardList d-flex m-auto mb-5'>
                {data.map(playlist => (
                    <Link
                        className='mb-5'
                        to={`/playlist/${playlist.id}`}
                        key={playlist.id}
                    >
                        <img
                            src={playlist.fotoplaylist}
                            className="card bg-success"
                            alt={playlist.nome}
                        />
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default Card;