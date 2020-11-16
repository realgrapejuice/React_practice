import React, { PureComponent } from "react";

class HabitForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.inputRef.current.value;
    input && this.props.onAdd(input);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form
        className="habit-form"
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          type="input"
          className="habit-input"
          placeholder="Add Your Habit"
          required
        />
        <button type="submit" className="habit-btn">
          Add
        </button>
      </form>
    );
  }
}

export default HabitForm;
