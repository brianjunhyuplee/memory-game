import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    points: 0,
    highscore: 0,
    clickedCharIds : []
  };

  addPoints = (id) => {
    // We always use the setState method to update a component's state
    this.setState({ points: this.state.points + 10 });
    this.state.clickedCharIds.push(id);
};

  losePoints = () => {
    // We always use the setState method to update a component's state
    if (this.state.highscore < this.state.points) {
        this.setState({ highscore: this.state.count });
    }
    this.setState({ points: 0 });
    this.setState({clickedCharIds: []})
}

clicked = (id) => {
  // console.log(this.state.clickedCharIds);
  for(var i = 0; i < this.state.clickedCharIds.length ; i++){
    if(this.state.clickedCharIds[i]===id){
      console.log("removing");
      this.losePoints(id);
    }
  }
  this.addPoints(id);
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Title>Memory Game</Title>
      <FriendCard friends = {this.state.friends} addPoints = {this.addPoints} losePoints = {this.losePoints} clickedCharPoints = {this.clickedCharIds} clicked = {this.clicked} />
      </Wrapper>
    );
  }
}

export default App;
