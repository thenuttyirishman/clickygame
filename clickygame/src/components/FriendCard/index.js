import React from "react";
import "./style.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.imageClick(props.id)} key = {props.id}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;