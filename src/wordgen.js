import words from "./words.json"

// save highest index of word dictionary
let dictMax = Object.keys(words).length

function randomNum(max) {
  return Math.floor(Math.random() * max)
}

// choose a random index from that dictionary
const random_word_set = randomNum(dictMax)

// pick the word at that index and access the list of valid words relating to it
export const targetWord = (String(Object.keys(words)[random_word_set]))
const valid = words[targetWord]

export let validWords = {}

// assign an exponentially rising score to the word based on its length
valid.forEach(i => {
  validWords[i] = Math.floor(i.length ** 1.25)
});

let wordLetters = targetWord.split()[0]

const unique = a => [...new Set(a)]

// export unique, split out letters from target word
export const uniqueLetters = unique(wordLetters)

export const gameIndex = 1

// TODO: create the day index to choose the target word

let wordOrder = []

for (let i=0;i>dictMax;i++) {
  console.log(i)
  wordOrder.push(Object.keys(words)[randomNum(i)])
}  

console.log(dictMax)

// debugging feature to show pangram
console.log(targetWord)