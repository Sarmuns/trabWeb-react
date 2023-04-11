import React from "react";
import { useParams } from 'react-router-dom';

const Music = (props) => {
    const { data } = props;
    const { id } = useParams();
    return (<>
        <table class="table table-dark table-striped mb-0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Artista</th>
                    <th scope="col">Album</th>
                </tr>
            </thead>
            <tbody>
                {data.playlists[id].musicas.map((musica, i) => (
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{musica.nome}</td>
                        <td>{musica.artista}</td>
                        <td>{musica.album}</td>
                    </tr>

                ))}
            </tbody>
        </table>

    </>
    )
}

export default Music