import React from "react";
import info from "./images/info-icon.png";
import stats from "./images/stats-icon.png";
import { useState } from "react";
import { totalGamesPlayed, clearAllScore, bestScore, averageScore } from "./utils/storageHandler"

// the states below are read into the "display" CSS for each element
export default function Header() {
  const [showInstr, setShowInstr] = useState("none");
  const [showStats, setShowStats] = useState("none");
  const [time, setTime] = useState("")

  setInterval(() => { setTime(new Date((new Date().setHours(24, 0, 0, 0) - Date.now())).toLocaleTimeString()) }, 1000)

  // show/hide instructions
  function instrFunction() {
    if (showInstr === "none" && showStats === "none") {
      setShowInstr("");
    } else {
      setShowInstr("none");
    }
  }

  // show/hide stats
  function statFunction() {
    if (showStats === "none" && showInstr === "none") {
      setShowStats("");
    } else {
      setShowStats("none");
    }
  }

  return (
    <>
      <div className="header" >
        <button className="Info" onClick={() => instrFunction()}>
          {" "}
          <img
            src={info}
            width={32}
            height={32}
            alt="Instructions and Information"
          ></img>{" "}
        </button>

        <button className="Stats" onClick={() => statFunction()}>
          {" "}
          <img
            src={stats}
            width={32}
            height={32}
            alt="Game Statistics"
          ></img>{" "}
        </button>
        <p>Polyword</p>
      </div>

      <div className="overlay" style={{ display: showInstr }}>
        <button className="exitButton" onClick={() => instrFunction("")}>
          X        </button>
        <h1 style={{ marginTop: 0 }}>How to Play </h1>
        <p>{text}</p>
      </div>

      <div className="overlay" style={{ display: showStats }}>
        <button className="exitButton" onClick={() => statFunction("")}>
          <p> X </p>
        </button>
        <h1 style={{ marginTop: 0 }}>Statistics </h1>
        <p>Total games played: {totalGamesPlayed()}</p>
        <p>Best Score: {bestScore()}</p>
        <p>Average Score: {averageScore()}</p>
        <span>New word in: {time} </span>
        <button className="clearStatsButton" onClick={() => clearAllScore()}> Clear All Stats </button>
      </div>
    </>
  );
}

const text =
  'The objective of Polyword is to select the letters in order to make the longest words you can. There is one (and only one) word which is the "Pangram", and is worth bonus points. Other words may qualify but are not the one used to generate the puzzle. \n \nYou can reuse letters any amount of times, but you must include every letter at least once if you want to guess the Pangram.\n \nYou can randomise the order of the letters at any time.';
