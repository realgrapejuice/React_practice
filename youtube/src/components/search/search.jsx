import React, { Component } from "react";
import styles from "./search.module.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const userInput = this.inputRef.current.value;
    this.props.onSearch(userInput);
    this.inputRef.current.value = "";
  };

  onClickHandler = () => {
    window.location.reload("true");
  };

  render() {
    return (
      <header className={styles.container}>
        <a href="#" className={styles.logo} onClick={this.onClickHandler}>
          <img src="/images/logo.png" alt="logo" />
          <span>YouTube</span>
        </a>
        <form className={styles.form} onSubmit={this.onSubmitHandler}>
          <input
            ref={this.inputRef}
            className={styles.input}
            type="text"
            placeholder="Search.."
          />
          <button className={styles.button} type="submit">
            <img src="/images/search.png" alt="search" />
          </button>
        </form>
      </header>
    );
  }
}

export default Search;
