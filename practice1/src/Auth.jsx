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

  //1. hide login++
  //2. show spinner+++
  //3. hide spinner, show logout
  //4. show logout

  loginHandler = () => {
    this.setState({
      // isLoggedIn: true,
      isLoading: true,
    });


    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
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

    if (isLoading) {
      return <Spinner />
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />
    }
    return <Login onLogin={this.loginHandler} />;

    // return (
    //   <>
    //     { !isLoggedIn && !isLoading && <Login onLogin={this.loginHandler} />}
    //     { isLoggedIn && <Logout onLogout={this.logoutHandler} />}
    //     { isLoading && <Spinner />}
    //   </>
    // )
  }

};

export default Auth;