import React from "react";
import "./style.css";

export function ScoreBoard(props) {
    return (
        <div className="score-board">
            <p>Score: {props.score} | Top Score: {props.topScore}</p>
        </div>
    );
}

export default ScoreBoard;