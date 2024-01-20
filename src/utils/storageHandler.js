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

export function averageScore() {
  let totalScore = 0
  let noOfGames = 0
  let gameIDs = Object.keys(localStorage)
  gameIDs.forEach(game => {
    noOfGames++;
    totalScore = totalScore + readScoreStorage(game)
  })
  return Math.floor(totalScore/noOfGames)
}

export function bestScore() {
  let bestScore = 0
  let gameIDs = Object.keys(localStorage)
  gameIDs.forEach(game => {
    if (readScoreStorage(game) > bestScore) {
      bestScore = readScoreStorage(game)
    }
  });
  return bestScore
  }
  
