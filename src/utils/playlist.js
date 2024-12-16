import { config } from "../config";

async function getAllPlaylists() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: "query Query {\r\n  playlist\r\n}",
        variables: {}
    })
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow"
    };

    const result = await fetch("http://localhost:5000/graphql", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data?.data?.playlist;
        })
        .catch(error => {
            console.error("Error: ", error);
            return null;
        });

    return result;
}

function getPlaylistById(playlistId) {

}

function createPlaylist(playlistInput) {

}

function updatePlaylist(playlistId, playlistUpdates) {

}

export {
    getAllPlaylists,
    getPlaylistById,
    createPlaylist,
    updatePlaylist
};