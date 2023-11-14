export function storeScore(score, session) {
    window.localStorage.setItem(session, score)
}

export function removeScore(session) {
    window.localStorage.removeItem(session)
}

export function readScoreStorage(session) {
    return parseInt(window.localStorage.getItem(session))
}

export function clearAllScore() {
    window.localStorage.clear()
}