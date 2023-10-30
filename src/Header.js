import React from "react";
import info from "./images/info-icon.png";
import stats from "./images/stats-icon.png";
import { useState } from "react";

export default function Header() {
  const [showInstr, setShowInstr] = useState("none");
  function instrFunction() {
    if (showInstr === "none") {
      setShowInstr("");
    } else {
      setShowInstr("none");
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

      <a href="#">
        {" "}
        <img src={stats} width={50} height={50} alt="User Score"></img>{" "}
      </a>

      <div className="instructions" style={{ display: showInstr }}>
        <p>{text}</p>
      </div>
    </div>
  );
}

const text ='The objective of Polyword is to select the letters in order to make the longest words you can. \
There is one (and only one) word which is the "Pangram",\
and is worth bonus points. Other words may qualify but are not the one used to generate the puzzle. \
\n \nYou can reuse letters any amount of times, but you must include every letter at least once if you want to guess the Pangram\
\n \nYou can randomise the order of the letters at any time.';
