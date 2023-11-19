export function storeScore(object) {
  let parsedObject = JSON.stringify(object.gameID)
  window.localStorage.setItem(
    Object.keys((object))[0],
    parsedObject
  );
}

export function removeScore(session) {
  window.localStorage.removeItem(session);
}

export function gameIDCheck(gameID) {
    return window.localStorage.getItem(gameID)
}

export function readScoreStorage(gameID) {
  let scoreObj = window.localStorage.getItem(gameID);
  scoreObj = JSON.parse(scoreObj);
  return scoreObj.gameID.score;
}

export function clearAllScore() {
  window.localStorage.clear();
}

export function encodeScore(gameID, guesses, score) {
  let storageObject = { gameID: { guesses: guesses, score: score } };
  return storageObject;
}

