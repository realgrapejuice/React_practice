import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <div className="habits">
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button type="button" className="habit-btn" onClick={this.handleReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
