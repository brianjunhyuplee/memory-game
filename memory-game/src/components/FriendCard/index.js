import React from "react";
import "./style.css";

function FriendCard(props) {
  //console.log(props.friends);
  console.log(props.friends.id);
  return (
    <div className = "container">
      {props.friends.map(friend=> (
        <div className="card">
        <div className="img-container">
        <img src={friend.image} />
        </div>
        </div>
      ))};
    </div>
  );
}

export default FriendCard;
