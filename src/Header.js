import React from "react";
import info from "./images/info-icon.png";
import stats from "./images/stats-icon.png";
import { useState } from "react";
import { readScoreStorage, readGuessStorage, totalGamesPlayed } from "./utils/storageHandler"

export default function Header() {
  const [showInstr, setShowInstr] = useState("none");
  const [showStats, setShowStats] = useState("none");

  function instrFunction() {
    if (showInstr === "none") {
      setShowInstr("");
    } else {
      setShowInstr("none");
    }
  }

  function statFunction() {
    if (showStats === "none") {
      setShowStats("");
    } else {
      setShowStats("none");
    }
  }

  return (
    <div className="header">
      <button className="Info" onClick={() => instrFunction("")}>
        {" "}
        <img
          src={info}
          width={50}
          height={50}
          alt="Instructions and Information"
        ></img>{" "}
      </button>

      <button className="Stats" onClick={() => statFunction()}>
        {" "}
        <img
          src={stats}
          width={50}
          height={50}
          alt="Game Statistics"
        ></img>{" "}
      </button>

      <div className="overlay" style={{ display: showInstr }}>
        <h1> Information </h1>
        <p>{text}</p>
      </div>

      <div className="overlay" style={{ display: showStats }}>
        <h1> Statistics </h1>
        <p>Total games played: {totalGamesPlayed()}</p>
      </div>
    </div>
  );
}

const text =
  'The objective of Polyword is to select the letters in order to make the longest words you can. \
There is one (and only one) word which is the "Pangram", \
and is worth bonus points. Other words may qualify but are not the one used to generate the puzzle. \
\n \nYou can reuse letters any amount of times, but you must include every letter at least once if you want to guess the Pangram.\
\n \nYou can randomise the order of the letters at any time.';
