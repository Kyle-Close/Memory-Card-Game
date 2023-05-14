import React from "react";

import "../Styles/GameInfo.css"

export default function GameInfo(props){
  // Displaying
  // Current Level
  // Image Category
  // High score/level

  return (
    <div className="game-info">
      <div className="current-level">
        <div className="top">Current Level</div>
        <div className="bot">{props.currentLevel}</div>
      </div>
      <div className="current-category">
        <div className="top">Current Category</div>
        <div className="bot">{props.currentCategory}</div>
      </div>
      <div className="high-score">
        <div className="top">Highscore</div>
        <div className="bot">{props.highScore}</div>
      </div>
    </div>
  )
}