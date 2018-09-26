import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
  <div className="scorecard">
    <p>
      Score: {props.currentScore} | Top Score: {props.topScore}
    </p>
  </div>
);

export default ScoreCard;
