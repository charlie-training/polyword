export function storeScore(object) {
  let objectValues = JSON.stringify(Object.values(object)[0])
  window.localStorage.setItem(
    Object.keys((object))[0],
    objectValues
  );
}

export function removeScore(session) {
  window.localStorage.removeItem(session);
}

export function readScoreStorage(gameID) {
  try {
    let scoreObj = window.localStorage.getItem(gameID);
    scoreObj = JSON.parse(scoreObj);
    return scoreObj.score;
  } catch (error) {
    return 0
  }
}

export function readGuessStorage(gameID) {
  try {
    let guessObj = window.localStorage.getItem(gameID);
    guessObj = JSON.parse(guessObj);
    return guessObj.guesses;
  } catch (error) {
    return []
  }
}

export function clearAllScore() {
  window.localStorage.clear();
}

export function totalGamesPlayed() {
  let totalGames = window.localStorage.length
  return totalGames;
}

export function bestScore() {
  let bestScore = 0
  for (var i = 0; i <= window.localStorage.length; i++) {
    if (readScoreStorage(i) > bestScore) {
      bestScore = readScoreStorage(i)
    }
  }
  return bestScore
}