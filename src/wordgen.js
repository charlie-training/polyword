import words from "./words.json"
  // TODO
  // 
let dictMax = Object.keys(words).length

function randomNum(max) {
    return Math.floor(Math.random() * max)
}

const random_word_set = randomNum(dictMax)

export const targetWord = (String(Object.keys(words)[random_word_set]))
const valid = words[targetWord]

export let validWords = {}

valid.forEach(i => {
  validWords[i] = Math.floor(i.length ** 1.25)
});


let wordLetters = targetWord.split()[0]

const unique = a => [...new Set(a)]

export const uniqueLetters = unique(wordLetters)

export const gameIndex = 1

console.log(targetWord)