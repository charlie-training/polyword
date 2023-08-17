import { useState } from "react";
import "./App.css";
import { uniqueLetters, targetWord, validWords } from "./wordgen";
import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

// TODO
// 

function Square({ value, onSquareClick }) {
  return (
    <button className="letter" onClick={onSquareClick}>
      {" "}
      {value}{" "}
    </button>
  );
}

function randomiser(letters) {
  for (let i = letters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters;
}

const initialLetters = randomiser([...uniqueLetters]);

function Board() {
  const initialState = "";
  const [currentGuess, setCurrentGuess] = useState(initialState);
  const [currentScore, setCurrentScore] = useState(0);
  const [letters, setRandomLetters] = useState(initialLetters);
  const [prevGuess, setPrevGuess] = useState([]);

  const deleteGuess = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const randomLetters = () => {
    setRandomLetters(randomiser([...letters]));
  };

  const makeGuess = () => {
    if (currentGuess in validWords && !prevGuess.includes(currentGuess)) {
      setCurrentScore(currentScore + validWords[currentGuess]);
      prevGuess.push(currentGuess);
      toast.success( "Correct! +" + validWords[currentGuess] + " points" , {position:toast.POSITION.TOP_CENTER})
    } else if (currentGuess == pangram) {
      setCurrentScore(currentScore + 25);
      prevGuess.push(currentGuess);
      toast.success( "Pangram! +25 points" , {position:toast.POSITION.TOP_CENTER})
    } else if (!(currentGuess in validWords)) {
      toast.info("Not in word list" , {position : toast.POSITION.TOP_CENTER})
    }

    setCurrentGuess(initialState);
  };

  const pangram = targetWord;

  return (
    <div className="moreButtons">
      <div className="buttons">
        {letters.map((l) => (
          <Square
            key={l}
            value={l}
            onSquareClick={() => setCurrentGuess(currentGuess + l)}
          />
        ))}
      </div>
      <p className="currentGuess">
        {" "}
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
          {" "}
          <li>{p}</li>{" "}
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
