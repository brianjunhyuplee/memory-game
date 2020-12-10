import React from "react";
import "./style.css";

function FriendCard(props) {
  //console.log(props.friends);

  return (
    <div className = "container">
      {props.friends.map(friend=> (
        <div className="card" id = {friend.id} key = {friend.id} onClick = {props.clicked}>
        <div className="img-container">
        <img src={friend.image} id = {friend.id} />
        </div>
        </div>
      ))};
    </div>
  );
}

export default FriendCard;
