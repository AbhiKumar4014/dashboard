import { useState, useEffect } from 'react';
import { config } from '../config';

function Home() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {

        fetch(config.apiBaseUrl + ``)
            .then(response => response.json())
            .then(data => setPlaylists(data));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Playlist ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Playlist</th>
                        <th>Type</th>
                        <th>Custom Parameters</th>
                        <th>Playlist Config</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {playlists.map(playlist => (
                        <tr key={playlist.id}>
                            <td>{playlist.id}</td>
                            <td>{playlist.title}</td>
                            <td>{playlist.description}</td>
                            <td>{playlist.playlist}</td>
                            <td>{playlist.type}</td>
                            <td>{playlist.custom_parameters}</td>
                            <td>{playlist.playlist_config}</td>
                            <td>{playlist.created_at}</td>
                            <td>{playlist.updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;