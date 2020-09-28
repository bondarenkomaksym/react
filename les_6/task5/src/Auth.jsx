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
        { !isLoggedIn, !isLoading && <Login onLogin={this.loginHandler}></Login>}
        { isLoggedIn && <Logout onLogout={this.logoutHandler}></Logout>}
        { isLoading && <Spinner size={60} ></Spinner>}
      </>
    )
  }
}

export default Auth;