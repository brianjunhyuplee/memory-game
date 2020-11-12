import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


var points = 0;
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    points: 0,
    highscore: 0,
    clickedCharIds : []
  };

  // clickIt = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends: friends });
  // };

  addPoints = (id) => {
    // We always use the setState method to update a component's state
    this.setState({ points: this.state.points + 1 });
    this.setState({ clickedCharIds: clickedCharIds.push(id)});
};

  losePoints = () => {
    // We always use the setState method to update a component's state
    if (this.state.highscore < this.state.points) {
        this.setState({ highscore: this.state.count });
    }
    this.setState({ points: 0 });
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Title>Memory Game</Title>
      <FriendCard friends = {this.state.friends} addPoints = {this.addPoints} losePoints = {this.losePoints} clickedCharPoints = {this.clickedCharIds} />
      </Wrapper>
    );
  }
}

export default App;
