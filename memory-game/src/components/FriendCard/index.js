import React from "react";
import "./style.css";
import "/Points"

function FriendCard(props) {
  return (
    <span onClick = {() =>props.clicked(props.id)} className = "remove">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */} 
    </div>
    </span>
  );
}

export default FriendCard;
