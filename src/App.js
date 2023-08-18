import { useState } from "react";
import "./App.css";
import { uniqueLetters, targetWord, validWords } from "./wordgen";
import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

// defines each Square rendered with a letter within
function Square({ value, onSquareClick }) {
  return (
    <button className="letter" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// function for randomising letters before passing to components
function randomiser(letters) {
  for (let i = letters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters;
}

// first pass of letters coming in through the randomiser
const initialLetters = randomiser([...uniqueLetters]);

function Board() {
  const initialState = ""; // empty State of guesses, feels more readable this way idk
  const [currentGuess, setCurrentGuess] = useState(initialState);
  const [currentScore, setCurrentScore] = useState(0);
  const [letters, setRandomLetters] = useState(initialLetters);
  const [prevGuess] = useState([]);

  // deletes the last guess of the array currentGuess
  const deleteGuess = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  // randomises the letters, defined here so it can be passed into the arrow function below
  const randomLetters = () => {
    setRandomLetters(randomiser([...letters]));
  };

  // contains the logic for a user's guess
  const makeGuess = () => {
    // if it's in the valid list and not in the previous guesses
    if (currentGuess in validWords && !prevGuess.includes(currentGuess)) {
      setCurrentScore(currentScore + validWords[currentGuess]);
      prevGuess.push(currentGuess);
      toast.success( "Correct! +" + validWords[currentGuess] + " points" , {position:toast.POSITION.TOP_CENTER})
      // pangram is the target word with all the unique letters in
    } else if (currentGuess == pangram) {
      setCurrentScore(currentScore + 25);
      prevGuess.push(currentGuess);
      toast.success( "Pangram! +25 points" , {position:toast.POSITION.TOP_CENTER})
      // if it's not in the list at all
    } else if (!(currentGuess in validWords)) {
      toast.info("Not in word list" , {position : toast.POSITION.TOP_CENTER})
    }
    setCurrentGuess(initialState);
  };

  // here for readability on exactly what the pangram is and where it comes from
  const pangram = targetWord;

  // this is a bit of a state (get it), but you can see the map function for letters and the buttons and their functions attached below
  return (
    <div className="moreButtons">
      <div className="buttons">
          <div className="row1"> <Square  value={letters[0]} onSquareClick={() => setCurrentGuess(currentGuess + letters[0])}/> 
          <Square  value={letters[1]} onSquareClick={() => setCurrentGuess(currentGuess + letters[1])}/>
          <Square  value={letters[2]} onSquareClick={() => setCurrentGuess(currentGuess + letters[2])}/></div>
          <div className="row2"> <Square  value={letters[3]} onSquareClick={() => setCurrentGuess(currentGuess + letters[3])}/></div>
          <div className="row3"> <Square  value={letters[4]} onSquareClick={() => setCurrentGuess(currentGuess + letters[4])}/>
           <Square  value={letters[5]} onSquareClick={() => setCurrentGuess(currentGuess + letters[5])}/>
           <Square  value={letters[6]} onSquareClick={() => setCurrentGuess(currentGuess + letters[6])}/></div>
  
      </div>
      <p className="currentGuess">

        {currentGuess} {} <br></br>
        SCORE: {currentScore}
      </p>
      <button onClick={() => deleteGuess()}>DELETE</button>
      <br></br>
      <button onClick={() => randomLetters()}>RANDOMISE</button>
      <br></br>
      <button onClick={() => makeGuess()}>GUESS</button>
      {prevGuess.map((p) => (
        <p className="currentGuess" key={p}>
          <li>{p}</li>
        </p>
      ))}
    </div>
  );
}

export default function Game() {
  return (
    <div className="game">
      <Board />
    </div>
  );
}
