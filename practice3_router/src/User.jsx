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

  componentDidUpdate(prevProps) {

    if (this.props.userId !== prevProps.userId) {
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



// const User = () => {
//   const [userData, setUserData] = useState(null);
//   const { userId } = useParams();

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error();
//       })
//       .then(userData => {
//         setUserData(userData);
//       });
//   }, [userId]);

//   if (!userData) {
//     return null;
//   }

//   const { name, location, avatar_url } = userData;

//   return (
//     <div className="user">
//       <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//       <div className="user__info">
//         <span className="user__name">{name}</span>
//         <span className="user__location">{location}</span>
//       </div>
//     </div>
//   )
// }


// export default User;