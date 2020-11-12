import React from "react";
import "./style.css";

function Scoreboard(props) {
  return (
  <div>
  <h1 className="scoreboard">Score: {props.points}</h1>
  <h1 className="scoreboard">Highscore: {props.highscore}</h1>
  </div>
  );
}

export default Scoreboard;
