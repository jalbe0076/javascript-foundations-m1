function createCollection(collectionName, collectionDescription) {
  return {
    name: collectionName,
    description: collectionDescription,
    tracks: []
  }
}

function createTrack(trackTitle, trackArtist, trackDuration) {
  return {
    title: trackTitle || 'unknown',
    duration: trackDuration || 0,
    artist: trackArtist || 'unknown'
  }
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`;
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`;
  }
}

function addTrack(collection, track) {
  collection.tracks.push(track);
  return collection;
}

function getTotalDuration(collection) {
  var totalPlayTime = 0;
  for (var i = 0; i < collection.tracks.length; i++) {
    totalPlayTime += collection.tracks[i].duration;
  }
  return totalPlayTime;
}

function findTracksByArtist(collection, artist) {
  var tracksByArtist = [];
  for (var i = 0; i < collection.tracks.length; i++) {
    if (collection.tracks[i].artist === artist) {
      tracksByArtist.push(collection.tracks[i]);
    }
  }
  return tracksByArtist;
}

  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }