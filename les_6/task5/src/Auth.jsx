import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";


class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false
  }


  loginHandler = () => {
    this.setState({
      isLoading: true,

    })
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 1000)
  }

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    })
  }


  render() {
    const { isLoggedIn, isLoading } = this.state;

    return (
      <>
        { !isLoggedIn && <Login onLogin={this.loginHandler}></Login>}
        { isLoading && <Spinner size={60} ></Spinner>}
        { isLoggedIn && <Logout onLogout={this.logoutHandler}></Logout>}
      </>
    )
  }
}

export default Auth;