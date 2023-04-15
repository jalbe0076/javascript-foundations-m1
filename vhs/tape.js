function createTape(tapeTitle, readyToPlay) {
  return {
    title: tapeTitle,
    readyToPlay: readyToPlay
  }
}

function reset(tape) {
  if (!tape.readyToPlay) {
    tape.readyToPlay = true;
  }
  return tape;
}

function createCollection(tape) {
  var collection = [];
  if (!tape.length) {
    return "Your collection is empty";
  }

  for (var i = 0; i < tape.length; i++) {
    collection.push(tape[i].title);
  }

  return collection;
}

module.exports = {
  createTape,  
  reset,
  createCollection,
}
