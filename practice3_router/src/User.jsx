import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

class User extends React.Component {

  state = {
    userData: null,
  }

  componentDidMount() {

    // debugger;
    fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(userData => {
        // debugger;
        this.setState({
          userData: userData,
        })
      })
  }

  componentDidUpdate(prevState) {

    // if (this.state.userData === prevState.userData) {
    //   return null;
    // }
    if (this.state.userData !== prevState.userData) {
      fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(userData => {
          this.setState({
            userData: userData,
          })
        })
    }
  }

  render() {
    if (!this.state.userData) {
      return null;
    }
    // debugger;
    const { name, location, avatar_url } = this.state.userData;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    )
  }
}


export default User;