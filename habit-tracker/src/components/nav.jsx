import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="habit-nav">
        <span className="habit-icon">
          <i className="fas fa-leaf"></i>
        </span>
        <span className="habit-title">Habit Tracker</span>
        <span className="habit-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Nav;
