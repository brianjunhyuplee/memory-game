import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
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
    console.log("adding");
    this.setState({ points: this.state.points + 10 });
    console.log(id);
    this.state.clickedCharIds.push(id);
    console.log(this.state.clickedCharIds);
};

  losePoints = () => {
    // We always use the setState method to update a component's state
    if (this.state.highscore <= this.state.points) {
        this.setState({ highscore: this.state.points });
    }
    this.setState({ points: 0 });
    this.setState({clickedCharIds: []})
}
shuffle=()=> {
  console.log("shuffling");
  var newArr = [];
  var usedIndex = [];
  for (let i = 0; i < this.state.friends.length; i++){
    let rand = Math.floor(Math.random()*this.state.friends.length);
    console.log(rand); 
    console.log(usedIndex.indexOf(rand));
    while (usedIndex.indexOf(rand)!==-1){
      rand = Math.floor(Math.random()*this.state.friends.length);
      console.log(rand);
      console.log("while");
    }
    console.log(this.state.friends[rand]);
    newArr.push(this.state.friends[rand]);
    usedIndex.push(rand);
  }
  this.setState({ friends : newArr });
}

clicked = (id) => {
  var operation = false;
  console.log(this.state.clickedCharIds);
  for(var i = 0; i < this.state.clickedCharIds.length ; i++){
    if(this.state.clickedCharIds[i]===id.target.id){
      operation = true;
      this.losePoints(id.target.id);
    }
  }
  console.log(id.target.id);
  if(operation === false){
  this.addPoints(id.target.id);
  }
  this.shuffle();
  // var newArr = [];
  // var usedIndex = [];
  // for (let i = 0; i < this.state.friends.length * 2; i++){
  //   let rand = Math.floor(Math.random()*this.state.friends.length);
  //   while (usedIndex.indexOf(rand)){
  //     rand = Math.floor(Math.random()*this.state.friends.length);
  //   }
  //   newArr.push(this.state.friends[rand]);
  //   usedIndex.push(rand);
  // }
}



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.highscore);
    return (
      <Wrapper>
      <Title>Memory Game</Title>
      <Scoreboard points = {this.state.points} highscore = {this.state.highscore}/>
      <FriendCard friends = {this.state.friends} addPoints = {this.addPoints} losePoints = {this.losePoints} clickedCharPoints = {this.clickedCharIds} clicked = {this.clicked} />
      </Wrapper>
    );
  }
}

export default App;
