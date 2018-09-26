import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div
      onClick={() => props.handleImageClick(props.id)}
      className="img-container"
    >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;
