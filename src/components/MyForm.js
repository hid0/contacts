import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onEmailChangeEventHandler(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onGenderChangeEventHandler(e) {
    this.setState(() => {
      return {
        gender: e.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();

    const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;

    alert(message);
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
          />
          <br />
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeEventHandler}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);

export default MyForm;
