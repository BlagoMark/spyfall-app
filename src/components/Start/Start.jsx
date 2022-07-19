import React from "react";
import { NavLink } from "react-router-dom";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: props.players, spies: props.spies };
  }

  componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      this.setState({ players: this.props.players, spies: this.props.spies });
    }
  }

  render() {
    return (
      <div className="Settings">
        <div className="Title">SpyFall</div>
        <form className="GameSettings">
          <div className="SettingsItem">
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.onInputChange(e, "minus", "players");
              }}
            >
              -
            </button>
            <input
              min={5}
              type={"number"}
              placeholder={"players"}
              value={this.state.players}
              onChange={(e) => this.props.onInputChange(e, null, "players")}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.onInputChange(e, "plus", "players");
              }}
            >
              +
            </button>
          </div>
          <div className="SettingsItem">
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.onInputChange(e, "minus", "spies");
              }}
            >
              -
            </button>
            <input
              type={"number"}
              placeholder={"spies"}
              value={this.state.spies}
              onChange={(e) => this.props.onInputChange(e, null, "spies")}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.onInputChange(e, "plus", "spies");
              }}
            >
              +
            </button>
          </div>

          <NavLink
            className={"StartGameButton"}
            to={{
              pathname: "/game",
            }}
          >
            Start Game
          </NavLink>
        </form>
        <NavLink className="NavigateButton" to="/rules">
          Rules
        </NavLink>
      </div>
    );
  }
}

export default Start;
