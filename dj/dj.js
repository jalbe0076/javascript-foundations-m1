function createSong(song, artist, hasBeenPlayed) {
    return {
        name: song,
        artist: artist,
        hasBeenPlayed: hasBeenPlayed || false 
    }
}

function playSong(playedSong) {
    if (!playedSong.hasBeenPlayed) {
        playedSong.hasBeenPlayed = true;
    }
    return playedSong;
}

function makePlaylist(playlistName, playlistSong) {
    return {
        name: playlistName,
        songs: playlistSong
    }
}

function addSongToPlaylist(playlist, addSong) {
    playlist.songs.push(addSong);
    return playlist;
}

function playAllSongs(playSongs) {
    for (var i = 0; i < playSongs.songs.length; i++) {
        playSong(playSongs.songs[i]);
    }
    return playSongs;
}

module.exports = {
    createSong,
    playSong,
    makePlaylist,
    addSongToPlaylist,
    playAllSongs
 };
