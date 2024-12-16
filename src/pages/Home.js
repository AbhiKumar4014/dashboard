import { useState, useEffect } from 'react';
import { config } from '../config';
import { getAllPlaylists } from '../utils/playlist';
import './Home.css';

function Home() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllPlaylists();
            console.log("Result: ", result)
            setPlaylists(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <table className="home">
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
                        <tr>
                            <td>{playlist.playlist_id}</td>
                            <td>{playlist.title}</td>
                            <td>{playlist.description}</td>
                            <td>{JSON.stringify(playlist.media_id)}</td>
                            <td>{playlist.type}</td>
                            <td>{JSON.stringify(playlist.custom_parameters)}</td>
                            <td>{JSON.stringify(playlist.playlist_config)}</td>
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