import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLog = (e) => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state.username, this.state.password);
    }
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleLog(event)}>
        <div>
          <label>
            Username
            <input
              value={this.state.username}
              onChange={(event) => this.handleForm(event)}
              id="username"
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={this.state.password}
              onChange={(event) => this.handleForm(event)}
              id="password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
