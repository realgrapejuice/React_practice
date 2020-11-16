import React, { Component } from "react";
import Nav from "./components/nav";
import Habits from "./components/habits";
import "./app.css";

class App extends Component {
  state = {
    habits: [
      { id: 1, habit: "reading", count: 0 },
      { id: 2, habit: "running", count: 0 },
      { id: 3, habit: "coding", count: 0 },
    ],
  };

  handleAdd = (habit) => {
    const habits = [...this.state.habits, { id: Date.now(), habit, count: 0 }];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(
      (element) => element.id !== habit.id
    );
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((element) => {
      element.count = 0;
      return element;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Nav
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
