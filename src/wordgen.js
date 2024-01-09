import words from "./words.json"
import vettedWords from "../src/utils/vettedWords.json"
import dateIndex from "./utils/dateParser"

// save highest index of word dictionary
// let dictMax = Object.keys(words).length

// function randomNum(max) {
//   return Math.floor(Math.random() * max)
// }

// choose a random index from that dictionary
// const random_word_set = randomNum(dictMax)

// pick the word at that index and access the list of valid words relating to it
// export const atargetWord = (String(Object.keys(words)[gameIndex]))

export const targetWord = vettedWords.vettedWords[dateIndex]

console.log(targetWord)

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

// TODO: create the day index to choose the target word

// for (let i=0;i>dictMax;i++) {
//   console.log(i)
//   wordOrder.push(Object.keys(words)[randomNum(i)])
// }  

// debugging feature to show pangram
console.log(targetWord)