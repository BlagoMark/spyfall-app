import React from "react";
import { NavLink } from "react-router-dom";

class Game extends React.Component {
  state = { count: -0.5, randomLocationArray: [] };

  componentDidMount() {
    this.getRandomArray(
      this.props.players,
      this.props.spies,
      this.props.randomLocation()
    );
    this.props.randomLocation();
  }

  getRandomArray = (players, spies, randomLocation) => {
    const randomArray = [];
    for (let i = 0; i < players; i++) {
      randomArray.push(randomLocation);
    }
    for (let i = 0; i < spies; i++) {
      randomArray[Math.floor(Math.random() * randomArray.length)] = "Шпион";
    }
    this.setState({ randomLocationArray: randomArray });
  };

  isFlipped = true;

  toggleIsFlipped = () => {
    if (this.isFlipped) {
      this.isFlipped = false;
      return "isFlipped";
    } else {
      this.isFlipped = true;
      return "";
    }
  };

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 0.5 }));
    this.toggleIsFlipped();
  };

  render() {
    return (
      <div className="Game">
        Игроков осталось {this.props.players - 1 - Math.floor(this.state.count)}
        <div>
          <div className={"Card " + this.toggleIsFlipped()}>
            <div className="CardFace" onClick={this.handleClick}>
              <div className="Role">
                {this.state.randomLocationArray[this.state.count]}
                <p>{this.toggleIsFlipped()}</p>
              </div>
            </div>
            <div className="CardBack" onClick={this.handleClick}></div>
          </div>
          <button
            disabled={this.state.count >= this.props.players - 0.5}
            onClick={this.handleClick}
            className="NextButton"
          >
            Next
          </button>
        </div>
        <NavLink className="NavigateButton" to="../start">
          Back
        </NavLink>
      </div>
    );
  }
}

export default Game;
