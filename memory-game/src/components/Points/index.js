import React from "react";
import friend from "./components/FriendCard";

class Points {
    state = {
        points: 0,
        highscore: 0
    };

    addPoints = () => {
        // We always use the setState method to update a component's state
        this.setState({ points: this.state.points + 1 });
    };

    losePoints = () => {
        // We always use the setState method to update a component's state
        if (this.state.highscore < this.state.points) {
            this.setState({ highscore: this.state.count });
        }
        this.setState({ points: 0 });
    }
    render() {
        return (
            <div className="card text-center">
            <h1>Current Score : {this.state.points}</h1>
            <h1>Highscore : {this.state.highscore}</h1>
            </div>
        );
      }
    }


export default Points;