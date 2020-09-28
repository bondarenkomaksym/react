import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Logout from "./Spinner";


class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }
  render() {
    return (
      <>
        {!this.state.isLoggedIn
          ? <Login onLogin={this.handleLogin} />
          : <Logout onLogout={this.handleLogout} />}
      </>
    )
  }
}

export default Auth;