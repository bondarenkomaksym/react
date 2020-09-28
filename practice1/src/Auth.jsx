import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

//1. Auth to class +++
//2. store isLoggedIn, isLoading in state +++
//3. handlers for login, logout +++
//4. 

class Auth extends React.Component {
  //first var
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoggedIn: false,
  //     isLoading: false
  //   }
  // }

  //second var
  state = {
    isLoggedIn: false,
    isLoading: false
  }


  loginHandler = () => {

    this.setState({
      isLoggedIn: true,
    })
  }

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    })
  }



  render() {
    const { isLoggedIn } = this.state;
    // debugger;
    return (
      <>
        { !isLoggedIn && <Login onLogin={this.loginHandler}></Login>}
        { isLoggedIn && <Logout></Logout>}
        { <Spinner></Spinner>}
      </>
    )
  }



};

export default Auth;